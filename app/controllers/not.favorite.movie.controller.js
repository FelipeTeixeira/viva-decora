(function() {
    'use strict';

    angular.module('vidaDecora-app')
      .controller('NotFavoriteMovieController', NotFavoriteMovieController);

    NotFavoriteMovieController.$inject = ['$scope', 'UncuredMovieFactory'];

    function NotFavoriteMovieController($scope, UncuredMovieFactory) {
        $scope.movieList = UncuredMovieFactory.notFavorite;
    }
})();
