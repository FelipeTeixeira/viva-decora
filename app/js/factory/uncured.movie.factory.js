(function() {
  'use strict';
  angular.module('vidaDecora-app')
    .factory('UncuredMovieFactory', UncuredMovieFactory);
    function UncuredMovieFactory($http, $q, config) {

        var notFavorite = [],
            favorite = [],
            movies = null,
            page = 0;
        

        var loadGenresMovie = function (movieId) {
            var deferred = $q.defer();
            var genres;
            $http({
                method: 'GET',
                url: 'https://api.themoviedb.org/3/movie/' + movieId + '?api_key=' + config.apiKey
            }).then(function (response) {
                genres = response.data.genres;
                deferred.resolve(genres);
            }, function (response) {
                deferred.reject(response.data);
            });

            return deferred.promise;
        };

        var loadMovies = function (nextPage) {
            var deferred = $q.defer();

            if (movies !== null && !nextPage) {
                deferred.resolve(movies);
            } else {
                page++;
                
                $http({
                    method: 'GET',
                    url: 'https://api.themoviedb.org/4/list/1?api_key=' + config.apiKey + '&page=' + page
                }).then(function (response) {                    
                    movies = movies ? movies.concat(response.data.results) : response.data.results;

                    movies.forEach(element => {                        
                        loadGenresMovie(element.id).then(function (items) {
                            var generes = items.map(function (genres) {
                                return genres.name
                            }).join(', ');                            
                            element.genres = generes;
                        });
                    });
                    
                    deferred.resolve(movies);
                }, function (response) {
                    deferred.reject(response.data);
                });
            }

            return deferred.promise;
        };

        return {
            loadMovies: loadMovies,
            notFavorite: notFavorite,
            favorite: favorite,
            movies: movies
        };
  }
})();
