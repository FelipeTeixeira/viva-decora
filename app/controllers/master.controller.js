(function() {
    'use strict';

    angular.module('vidaDecora-app')
      .controller('MasterController', MasterController);

    MasterController.$inject = ['$scope', 'UncuredMovieFactory'];

    function MasterController($scope, UncuredMovieFactory) {
        var init = function() {
            
            // MODAL
            var showModal = function (html, modal) {                
                document.querySelector("html").classList.add("is-modalOverlay-active");
                document.querySelector("#modal-movie").classList.add("is-modal-active");
            }

            var hideModal = function (params) {
                document.querySelector("html").classList.remove("is-modalOverlay-active");
                document.querySelector("#modal-movie").classList.remove("is-modal-active");
            }

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