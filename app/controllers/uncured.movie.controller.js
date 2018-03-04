(function() {
    'use strict';

    angular.module('vidaDecora-app')
      .controller('UncuredMovieController', UncuredMovieController);

    UncuredMovieController.$inject = ['$scope', 'UncuredMovieFactory'];

    function UncuredMovieController($scope, UncuredMovieFactory) {
        var nextPage = false;

        $scope.movieList = null;

        var init = function() {
            var bodyImgChange = function () {
                var image = $scope.movieImgPath +'w500' + $scope.movieList[0].backdrop_path;
                document.querySelector("body").style.backgroundImage = "url(" + image + ")";
            }

            // UPLOAD MOVIE LIST
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
                    
                    // API - NEXT PAGE
                    nextPage = true;
                    UncuredMovieFactory.loadMovies(nextPage).then(function (items) {
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
