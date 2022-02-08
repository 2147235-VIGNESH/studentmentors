var myapp = angular.module('mentors', []);
      /*Dependency Injection*/
      myapp.controller('mentorctrl',function($scope,$http)
{
   $http.get('https://raw.githubusercontent.com/2147235-VIGNESH/studentmentors/main/mentors.json')
   .success(function(response)
{
  $scope.names=response.mentor;
  $scope.rowlimit=6;
}
);
});