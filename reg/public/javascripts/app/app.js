(function(){
	angular.module('myApp', [])
    	.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
            $scope.test = 'sample';
        }]);
})();