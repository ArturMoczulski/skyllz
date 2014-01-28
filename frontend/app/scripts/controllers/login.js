'use strict';

angular.module('skyllzFrontendApp')
  .controller('LoginCtrl', function ($scope, $firebase) {

    var db = new Firebase('https://sizzling-fire-6451.firebaseio.com/'),
        auth = new FirebaseSimpleLogin(db, function(error, user) {

          if (error) {
            console.error(error);
          } else if (user) {
            console.success(user);
          }
        });

    $scope.email = $scope.password = '';

    $scope.login = function() {

      console.log($scope.email);

      auth.login('password', {
        email: $scope.email,
        password: $scope.password,
        rememberMe: false
      });

    };

  });
