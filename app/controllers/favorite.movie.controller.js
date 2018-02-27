(function() {
    'use strict';

    angular.module('vidaDecora-app')
      .controller('FavoriteMovieController', FavoriteMovieController);

    FavoriteMovieController.$inject = ['$scope', 'UncuredMovieFactory'];

    function FavoriteMovieController($scope, UncuredMovieFactory) {
        $scope.movieList = UncuredMovieFactory.favorite;
    }
})();
