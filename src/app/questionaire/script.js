
Save New Duplicate & Edit Just Text Twitter
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
// Code goes here
var myApp = angular.module('myApp', []);
myApp.controller('QuestionaireListController', ['$scope', '$http', function($scope, $http) {

  //Buttons Settings
  $scope.submit = true;
  $scope.update = false;
  $scope.cancel = false;
  $scope.userid = true;

  //Getting Users List
  //$http GET function
  $http({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/users'
  }).then(function successCallback(response) {
    $scope.users = response.data;
  }, function errorCallback(response) {
    alert("Error. Try Again!");
  });


  //Create New User
  $scope.createUser = function() {
    //$http POST function
    $http({
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/users',
      data: $scope.user
    }).then(function successCallback(response) {
      $scope.users.push(response.data);
      alert("User has created Successfully")
    }, function errorCallback(response) {
      alert("Error. while created user Try Again!");
    });
  };


  //Update User
  $scope.updateUser = function() {
    //$http PUT function
    $http({
      method: 'PUT',
      url: 'https://jsonplaceholder.typicode.com/users/' + $scope.user.id,
      data: $scope.user
    }).then(function successCallback(response) {
      alert("User has updated Successfully")
    }, function errorCallback(response) {
      alert("Error. while updating user Try Again!");
    });
  };


  //Delete User
  $scope.deleteUser = function(user) {
    //$http DELETE function
    $http({
      method: 'DELETE',
      url: 'https://jsonplaceholder.typicode.com/users/' + user.id
    }).then(function successCallback(response) {
      alert("User has deleted Successfully");
      var index = $scope.users.indexOf(user);
      $scope.users.splice(index, 1);
    }, function errorCallback(response) {
      alert("Error. while deleting user Try Again!");
    });
  };

  //Set $scope on Edit button click
  $scope.editUser = function(user) {
    $scope.user = user;
    $scope.submit = false;
    $scope.update = true;
    $scope.cancel = true;
    $scope.userid = false;
  };

  //cancel Update
  $scope.cancelUpdate = function() {
    $scope.user = null;
    $scope.submit = true;
    $scope.update = false;
    $scope.cancel = false;
    $scope.userid = true;
  };

}]);
