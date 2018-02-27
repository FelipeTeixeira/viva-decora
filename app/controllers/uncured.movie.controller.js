(function() {
    'use strict';

    angular.module('vidaDecora-app')
      .controller('UncuredMovieController', UncuredMovieController);

    UncuredMovieController.$inject = ['$scope', 'UncuredMovieFactory'];

    function UncuredMovieController($scope, UncuredMovieFactory) {

        var init = function() {
            $scope.like = function (movie) {
                UncuredMovieFactory.favorite.push(movie);
                $scope.movieList.splice( $scope.movieList.indexOf(movie), 1 );
            };

            $scope.jump = function (movie) {
                $scope.movieList.splice( $scope.movieList.indexOf(movie), 1 );
            };

            $scope.unlike = function (movie) {
                UncuredMovieFactory.notFavorite.push(movie);
                $scope.movieList.splice( $scope.movieList.indexOf(movie), 1 );
            };
        };

        init();
    }

})();
