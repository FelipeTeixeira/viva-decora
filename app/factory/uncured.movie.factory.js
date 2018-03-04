(function() {
  'use strict';
  angular.module('vidaDecora-app')
    .factory('UncuredMovieFactory', UncuredMovieFactory);
    function UncuredMovieFactory($http, $q) {
        var notFavorite = [];
        var favorite = [];
        var movies = null;
        var apiKey = '69f1641d5fcc719594bd106ce4fda513';
        var page = 0;

        var loadMovies = function (nextPage) {
            var deferred = $q.defer();

            if (movies !== null && !nextPage) {
                deferred.resolve(movies);
            } else {
                page++;
                $http({
                    method: 'GET',
                    url: 'https://api.themoviedb.org/4/list/1?api_key=' + apiKey + '&page=' + page
                }).then(function (response) {                    
                    movies = movies ? movies.concat(response.data.results) : response.data.results;
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
