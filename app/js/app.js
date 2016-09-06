var app = angular.module('angular', ['ui.router','ui.materialize','angular.morris']);
app.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'views/home.html',
			controller: 'HomeCtrl'
		})
		.state('login', {
			url: '/login?error',
			templateUrl: 'views/login.html',
			controller: 'LoginCtrl'
		})
		.state('reset-pass', {
			url: '/reset-pass',
			templateUrl: 'views/resetPass.html',
			controller: 'ResetPassCtrl'
		})
		.state('home.dashboard', {
			url: '/dashboard',
			templateUrl: 'views/dashboard.html',
			controller: 'DashboardCtrl'
		});
		$urlRouterProvider.otherwise('/login');
});
