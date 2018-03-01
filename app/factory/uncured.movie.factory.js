(function() {
  'use strict';
  angular.module('vidaDecora-app')
    .factory('UncuredMovieFactory', UncuredMovieFactory);
    function UncuredMovieFactory($http, $q) {
        var notFavorite = [];
        var favorite = [];
        var movies = null;

        var loadMovies = function() {
            var deferred = $q.defer();
            if (movies !== null) {
                deferred.resolve(movies);
            } else {
                $http({
                    method: 'GET',
                    url: 'https://api.themoviedb.org/3/list/28341?api_key=69f1641d5fcc719594bd106ce4fda513&language=en-US'
                }).then(function(response) {
                    movies = response.data.items.sort(function(a, b) { return a.id - b.id;});
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
