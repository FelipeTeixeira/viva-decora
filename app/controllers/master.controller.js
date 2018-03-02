(function() {
    'use strict';

    angular.module('vidaDecora-app')
      .controller('MasterController', MasterController);

    MasterController.$inject = ['$scope', 'UncuredMovieFactory'];

    function MasterController($scope, UncuredMovieFactory) {
        //lista  exibir os filmes pro usuario
        $scope.movieList = null;

        var init = function() {
            // Carrega a lista de filmes
            if (UncuredMovieFactory.movies !== null) {
                $scope.movieList = UncuredMovieFactory.movies.results;                
            } else {
                UncuredMovieFactory.loadMovies().then(function(items) {
                    return $scope.movieList = items;
                });
            }          

            var showModal = function (params) {
                html.classList.add("is-modalOverlay-active");
                modal.classList.add("is-modal-active");
            }

            var hideModal = function (params) {
                html.classList.remove("is-modalOverlay-active");
                modal.classList.remove("is-modal-active");
            }

            var html  = document.querySelector("html"),
                modal   = document.querySelector("#modal-movie");

            $scope.openModal = function(movie) {
                showModal();
                $scope.movieModal = movie;
            }

            $scope.closeModal = function() {
                hideModal();
            }
        };

        init();
    }

})();