angular.module('starter.controllers', [])


.controller('HomeCtrl', function($scope, $state) {
  
  $scope.startTesting = function() {
    $state.go('tab.testProcess');
  }

  $scope.showHistory = function() {
    $state.go('tab.history');
  }
})

.controller('testProcessCtrl', function($scope, $state) {
  $scope.startTesting = function() {
    showProgress();
    setTimeout( 
    function() {
      var startFactorial = new Date().getTime();
      console.log(factorial(1000000));
      var endFactorial = new Date().getTime();
      var timeFactorial = endFactorial - startFactorial;
      console.log('Execution time: ' + timeFactorial);
      var startCount = new Date().getTime();
      console.log(count(50000));
      var endCount = new Date().getTime();
      var timeCount = endCount - startCount;
      console.log('Execution time: ' + timeCount);
    }, 3000);
  }

  function showProgress() {
    console.log("krenuo je");
    document.getElementById('firstText').style.display = 'none';
    document.getElementById('thirdText').style.display = 'none';
    document.getElementById('secondText').style.display = 'block';
    document.getElementById('loading').style.display = 'block';
  }

  function endTesting() {
    console.log('gotovo');
    document.getElementById('loading').style.display = 'none';
    document.getElementById('secondText').style.display = 'none';
    document.getElementById('thirdText').style.display = 'block';
  }

  function factorial(n) {
    var fact = 1;
    for (let i = 1; i <= n; i++) {
      fact = fact * i;
    }
    return fact;
  }

  function count(n) {
    var count = 0;
    for (let i = 0; i <= n; i++) {
      count = count + factorial(i);
    }
    endTesting();
    return count;
  }

  function test(n, m) {

  }
})

.controller('historyCtrl', function($scope, $state) {
 
});
