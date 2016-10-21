var app = angular.module('app', []);

	app.controller('usersCtrl', function($scope, $http){
		$http({
			method: "GET",
			url: "users.json"
		}).then(function (res){
				$scope.usersData = res.data.records;
			});
	});



