/**
 * 
 */
var app = angular.module('myApp', [ 'ngRoute', 'ngCookies']);

app.config(function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl : 'c_user/home.html',
		controller : 'HomeController'
	})

	.when('/home', {
		templateUrl : 'c_user/home.html',
		controller : 'UserController'
	})

	.when('/register', {
		templateUrl : 'c_user/Registration.html',
		controller : 'UserController'
	})
	
	
	.when('/login', {
		templateUrl : 'c_user/home.html',
		controller : 'UserController'
	})

	.otherwise({
		redirectTo : '/'
	});
});

