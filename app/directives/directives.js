angular.module("directivesApp", [])

.directive("movieCard", function () {

	var ddo = {};

	ddo.restrict = "E";

	ddo.scope = {
		title: "@",
		image: "@",
		vote: '@',
		overview: '@',
		action: '&'
	};

	ddo.templateUrl = "directives/movie-card.html";

	return ddo;
})

.directive("notMovie", function () {

	var ddo = {};

	ddo.restrict = "E";

	ddo.scope = {
		countMovie: "@"
	};

	ddo.templateUrl = "directives/not-movie.html";

	return ddo;
});