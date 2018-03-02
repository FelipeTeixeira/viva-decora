angular.module("directivesApp", [])

.directive("cardMovie", function () {

	var ddo = {};

	ddo.restrict = "E";

	ddo.scope = {
		title: "@",
		image: "@",
		vote: '@',
		overview: '@',
		action: '&'
	};

	ddo.templateUrl = "directives/templates/card-movie.html";

	return ddo;
})

.directive("notMovie", function () {

	var ddo = {};

	ddo.restrict = "E";

	ddo.scope = {
		countMovie: "@"
	};

	ddo.templateUrl = "directives/templates/not-movie.html";

	return ddo;
})

.directive("modalMovie", function () {

	var ddo = {};

	ddo.restrict = "E";

	ddo.scope = {
		countMovie: "@"
	};

	ddo.templateUrl = "directives/templates/modal-movie.html";

	return ddo;
});