'use strict';

angular.module('bowlingjsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.rolls = [];
    $scope.addRoll = function(pins) {
        $scope.rolls.push(pins);
      };

    $scope.resetRolls = function() {
        $scope.rolls = [];
      };

  });
