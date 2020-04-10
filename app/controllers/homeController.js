app.controller('homeController', function ($scope, $location) {
   $scope.menssage = 'Home Controller'; 
   $scope.isActive = function (viewLocation) { 
    return viewLocation === $location.path();
};
});