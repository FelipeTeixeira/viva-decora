(function() {
  'use strict';
    angular.module('vidaDecora-app', ['ui.router', 'directivesApp'])

    .constant('config', {
        apiUrl: '69f1641d5fcc719594bd106ce4fda513'
    })

    .run(function($rootScope, $location) {
        $rootScope.$location = $location;
        
        // MENU
        var html = document.querySelector("html");
        $rootScope.openMenu = function() {
            html.classList.toggle("is-menu-active")
        };

        $rootScope.closeMenu = function() {
            html.classList.remove("is-menu-active")
        };
    })

    .filter('cut', function () {
        return function (value, wordwise, max, tail) {
            if (!value) return '';

            max = parseInt(max, 10);
            if (!max) return value;
            if (value.length <= max) return value;

            value = value.substr(0, max);
            if (wordwise) {
                var lastspace = value.lastIndexOf(' ');
                if (lastspace !== -1) {
                  if (value.charAt(lastspace-1) === '.' || value.charAt(lastspace-1) === ',') {
                    lastspace = lastspace - 1;
                  }
                  value = value.substr(0, lastspace);
                }
            }

            return value + (tail || ' …');
        };
    });

})();
