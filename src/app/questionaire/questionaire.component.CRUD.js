var questionaire = angular.module('questionaire', []);
questionaire.controller('questions', ['$scope', '$http', function($scope, $http) {

  //Buttons Settings
  $scope.submit = true;
  $scope.update = false;
  $scope.cancel = false;
  $scope.questionid = true;

  //Getting questions List
  //$http GET function
  $http({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/users'

  }).then(function successCallback(response) {

    $scope.questions = response.data;

  }, function errorCallback(response) {

    alert("Error. No question found!");

  });


  //Create New Question
  $scope.createQuestion = function() {

    //$http POST function
    $http({

      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/users',
      data: $scope.questions

    }).then(function successCallback(response) {

      $scope.questions.push(response.data);
      alert("Question has created Successfully")

    }, function errorCallback(response) {

      alert("Error. while created question Try Again!");

    });

  };


  //Update Question
  $scope.updateQuestion = function() {

    //$http PUT function
    $http({

      method: 'PUT',
      url: 'https://jsonplaceholder.typicode.com/users/' + $scope.questions.id,
      data: $scope.questions

    }).then(function successCallback(response) {

      alert("Question had succesfully been updated!")

    }, function errorCallback(response) {

      alert("Error. while updating question Try Again!");

    });

  };


  //Delete Question
  $scope.deleteQuestion = function(question) {

    //$http DELETE function
    $http({

      method: 'DELETE',
      url: 'https://jsonplaceholder.typicode.com/users/' + question.id

    }).then(function successCallback(response) {

      alert("Question has deleted Successfully");
      var index = $scope.questions.indexOf(question);
      $scope.questions.splice(index, 1);

    }, function errorCallback(response) {

      alert("Error. while deleting question Try Again!");

    });

  };

  //Set $scope on Edit button click
  $scope.editQuestion = function(question) {

    $scope.question = question;
    $scope.submit = false;
    $scope.update = true;
    $scope.cancel = true;
    $scope.questionid = false;

  };


  //cancel Update
  $scope.cancelUpdate = function() {
    $scope.question = null;
    $scope.submit = true;
    $scope.update = false;
    $scope.cancel = false;
    $scope.questionid = true;
  };

}]);
