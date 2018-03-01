(function() {
    'use strict';

angular.module('vidaDecora-app')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider) {
            $locationProvider.html5Mode(true);;
            $urlRouterProvider.otherwise("/filmes-nao-curados");


            $stateProvider
            .state('master', {
                templateUrl: 'views/master.html',
                controller: 'MasterController',
            })
            .state('uncuredMovie', {
                url: "/filmes-nao-curados",
                templateUrl: 'views/uncured-movie.html',
                controller: 'UncuredMovieController',
                parent: 'master'
            })
            .state('favoriteMovieC', {
                url: "/filmes-curtidos",
                templateUrl: 'views/favorite-movie.html',
                controller: 'FavoriteMovieController',
                parent: 'master'
            })
            .state('notFavoriteMovie', {
                url: "/filmes-nao-curtidos",
                templateUrl: 'views/not-favorite-movie.html',
                controller: 'NotFavoriteMovieController',
                parent: 'master'
            });
        }
    ]);
})();