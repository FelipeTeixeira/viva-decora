(function() {
    'use strict';

    angular.module('vidaDecora-app')
      .controller('UncuredMovieController', UncuredMovieController);

    UncuredMovieController.$inject = ['$scope', 'UncuredMovieFactory'];

    function UncuredMovieController($scope, UncuredMovieFactory) {
        
        //lista  exibir os filmes pro usuario
        $scope.movieList = null;

        var init = function() {

            var bodyImgChange = function () {
                var image = $scope.movieImgPath +'w600' + $scope.movieList[0].backdrop_path;
                document.querySelector("body").style.backgroundImage = "url(" + image + ")";
            }

            // Carrega a lista de filmes
            if (UncuredMovieFactory.movies !== null) {
                $scope.movieList = UncuredMovieFactory.movies.results;
            } else {
                UncuredMovieFactory.loadMovies().then(function (items) {                    
                    $scope.movieList = items;
                    bodyImgChange();
                });
            }

            var nextMovie = function (movie) {
                $scope.movieList.splice($scope.movieList.indexOf(movie), 1);
                bodyImgChange();
                if ($scope.movieList.length === 1) {
                    // NEXT PAGE API
                    UncuredMovieFactory.loadMovies().then(function (items) {
                        return $scope.movieList = items;
                    });
                }
            }

            $scope.like = function (movie) {
                UncuredMovieFactory.favorite.unshift(movie);
                nextMovie(movie);
            };

            $scope.jump = function (movie) {                
                nextMovie(movie);
            };

            $scope.unlike = function (movie) {
                UncuredMovieFactory.notFavorite.unshift(movie);
                nextMovie(movie);
            };
        };

        init();
    }

})();
