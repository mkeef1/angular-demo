(function(){
  'use strict';

  angular.module('demo', [])
  .controller('MainController', ['$scope', function($scope){
    $scope.name = 'Groot!';
    $scope.age = 6;
    $scope.dogs = [
      {name:'fido', age:3},
      {name:'baxter', age:5},
      {name:'flufy', age:7}
    ];
  }]);
})();
