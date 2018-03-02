angular.module("directivesApp", [])

.directive("cardMovie", function () {

	var ddo = {};

	ddo.restrict = "E";

	ddo.scope = {
		title: "@",
		image: "@",
		overview: '@',
		voteCount: "@",
		voteAverage: "@",
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
		name: "@",
		image: "@",
		date: "@",
		overview: "@",
		voteCount: "@",
		voteAverage: "@",
		closeModal: '&'
	};

	ddo.templateUrl = "directives/templates/modal-movie.html";

	return ddo;
})

.directive("reviewFavorites", function () {

	var ddo = {};

	ddo.restrict = "E";
	ddo.transclude = true;

	ddo.scope = {
		voteAverage: "@",
		width: "@"
	};

	ddo.templateUrl = "directives/templates/review-favorites.html";

	return ddo;
});