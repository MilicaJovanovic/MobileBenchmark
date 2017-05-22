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

  $scope.goBack = function() {
    $state.go('tab.home');
  }

  $scope.startTesting = function() {
    showProgress();
    setTimeout( 
      function() {
        var startFactorial = new Date().getTime();
        console.log(factorial(5));
        var endFactorial = new Date().getTime();
        var timeFactorial = endFactorial - startFactorial;
        console.log('Execution time: ' + timeFactorial);

        var startCount = new Date().getTime();
        console.log(count(5));
        var endCount = new Date().getTime();
        var timeCount = endCount - startCount;
        console.log('Execution time: ' + timeCount);

        var startGcd = new Date().getTime();
        console.log(gcd(5005, 2222));
        var endGcd = new Date().getTime();
        var timeGcd = endGcd - startGcd;
        console.log('Execution time: ' + timeGcd);

      }, 3000);
  }

  function showProgress() {
    document.getElementById('startTestingBtn').style.display = 'none';
    document.getElementById('firstText').style.display = 'none';
    document.getElementById('thirdText').style.display = 'none';
    document.getElementById('secondText').style.display = 'block';
    document.getElementById('loading').style.display = 'block';
  }

  function endTesting() {
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

  function gcd(n, m) {
    while (m != 0) {
      temp = m;
      m = n % m;
      n = temp;
    }
    return n;
  }
})

.controller('historyCtrl', function($scope, $state) {
 
});
