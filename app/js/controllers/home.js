'use strict';
angular.module('angular')
	.controller('HomeCtrl', function ($scope) {
		$scope.listMenuItems = [
			{
				id: 1,
				name: 'Incio',
				url: 'home.dashboard',
				icon: 'dashboard'
			},
			{
				id: 2,
				name: 'Usuarios',
				url: 'home.dashboard',
				icon: 'supervisor_account'
			},
			{
				id: 3,
				name: 'Perfiles',
				url: 'home.dashboard',
				icon: 'verified_user'
			},
			{
				id: 4,
				name: 'Sucursales',
				url: 'home.dashboard',
				icon: 'store'
			}
		];
	});
