angular.module('starter.controllers', [])

.controller('homeCtrl', function($scope, $state) {
  
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
    $scope.marks = {
      markFactorial : 0,
      markCount : 0,
      markGcd : 0,
      finalMark : 0
    }

    setTimeout( 
      function() {
        var startFactorial = new Date().getTime();
        console.log(factorial(1000));
        var endFactorial = new Date().getTime();
        var timeFactorial = endFactorial - startFactorial;
        console.log('Execution time: ' + timeFactorial);
        $scope.marks.markFactorial = rateFactorial(timeFactorial);
        console.log($scope.marks.markFactorial);

        var startCount = new Date().getTime();
        console.log(count(1000));
        var endCount = new Date().getTime();
        var timeCount = endCount - startCount;
        console.log('Execution time: ' + timeCount);
        $scope.marks.markCount = rateCount(timeCount);
        console.log($scope.marks.markCount);

        var startGcd = new Date().getTime();
        console.log(gcd(5005, 2222));
        var endGcd = new Date().getTime();
        var timeGcd = endGcd - startGcd;
        console.log('Execution time: ' + timeGcd);
        $scope.marks.markGcd = rateGcd(timeGcd);
        console.log($scope.marks.markGcd);

        $scope.marks.finalMark = ($scope.marks.markFactorial + $scope.marks.markCount + $scope.marks.markGcd) / 3;
        console.log($scope.marks.finalMark);
        // $localStorage.marks = $scope.marks;
        document.getElementById('result').style.display = 'block';
      }, 3000);
  }

  function showProgress() {
    document.getElementById('result').style.display = 'none';
    document.getElementById('startTestingBtn').style.display = 'none';
    document.getElementById('firstText').style.display = 'none';
    document.getElementById('thirdText').style.display = 'none';
    document.getElementById('saveBtn').style.display = 'none';
    document.getElementById('testSeparator').style.display = 'none';
    document.getElementById('runAgainBtn').style.display = 'none';
    document.getElementById('secondText').style.display = 'block';
    document.getElementById('loading').style.display = 'block';
  }

  function endTesting() {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('secondText').style.display = 'none';
    document.getElementById('testSeparator').style.display = 'block';
    document.getElementById('runAgainBtn').style.display = 'block';
    document.getElementById('saveBtn').style.display = 'block';
    document.getElementById('thirdText').style.display = 'block';
    document.getElementById('result').style.display = 'block';
  }

  $scope.runAgain = function() {
    document.getElementById('startTestingBtn').style.display = 'block';
    document.getElementById('firstText').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    document.getElementById('secondText').style.display = 'none';
    document.getElementById('thirdText').style.display = 'none';
    document.getElementById('saveBtn').style.display = 'none';
    document.getElementById('testSeparator').style.display = 'none';
    document.getElementById('runAgainBtn').style.display = 'none';
    document.getElementById('loading').style.display = 'none';
  }

  $scope.saveResult = function() {
    $state.go('tab.saveResult');
  }

  function rateFactorial(time) {
    var mark = 0;
    if (time <= 5) {
        mark = 5;
    } else if (time > 5 && time < 7) {
        mark = 4;
    } else if (time > 7 && time < 10) {
        mark = 3;
    } else if (time > 10 && time < 15) {
        mark = 2;
    } else if (time > 15) {
        mark = 1;
    }

    return mark;
  }

  function rateCount(time) {
    var mark = 0;
    if (time <= 5) {
        mark = 5;
    } else if (time > 5 && time < 7) {
        mark = 4;
    } else if (time > 7 && time < 10) {
        mark = 3;
    } else if (time > 10 && time < 15) {
        mark = 2;
    } else if (time > 15) {
        mark = 1;
    }

    return mark;
  }

  function rateGcd(time) {
    var mark = 0;
    if (time <= 2) {
        mark = 5;
    } else if (time > 2 && time < 4) {
        mark = 4;
    } else if (time > 4 && time < 6) {
        mark = 3;
    } else if (time > 6 && time < 8) {
        mark = 2;
    } else if (time > 8) {
        mark = 1;
    }

    return mark;
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
 
})

.controller('saveResultCtrl', function($scope, $state) {

  $scope.data = {
    name : ''
  } 

  $scope.goBack = function() {
    $state.go('tab.testProcess');
  }
  
  $scope.saveResult = function() {
    console.log($scope.data.name);
    console.log("saved");
    // $scope.marks = $localStorage.marks;
    // console.log($scope.marks);
  }
});
