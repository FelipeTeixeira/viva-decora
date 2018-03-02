(function() {
  'use strict';
  angular.module('vidaDecora-app')
    .factory('UncuredMovieFactory', UncuredMovieFactory);
    function UncuredMovieFactory($http, $q) {
        var notFavorite = [];
        var favorite = [];
        var movies = null;
        var apiKey = '69f1641d5fcc719594bd106ce4fda513';

        var loadMovies = function() {
            var deferred = $q.defer();
            if (movies !== null) {
                deferred.resolve(movies);
            } else {                
                $http({
                    method: 'GET',
                    url: 'https://api.themoviedb.org/4/list/1?api_key=' + apiKey
                }).then(function(response) {
                    movies = response.data.results;
                    deferred.resolve(movies);
                }, function(response) {
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
