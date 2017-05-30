var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.posts = [
    {title: 'post1', votes: 2},
    {title: 'post2', votes: 3},
    {title: 'post3', votes: 4},
    {title: 'post4', votes: 1},
    {title: 'post5', votes: 5}
  ];
}]);
