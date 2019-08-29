(function () {

  var app = angular.module('crud', [
    'ngRoute',
    'crud.controllers',
    'crud.directives',
    'crud.services'
  ]);

  app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/crud.html',
        controller: 'crudController'
      })
      .otherwise({
        redirectTo: '/'
      });

  }]);

})();
