(function () {

  angular.module('crud.directives', [])

    .directive('pageTitle', function () {
      return {
        restrict: 'E',
        templateUrl: 'partials/page-title.html'
      };
    })

    .directive('personName', function () {
      return {
        restrict: 'E',
        templateUrl: 'partials/person-name.html'
      };
    })

    .directive('personBtns', function () {
      return {
        restrict: 'E',
        templateUrl: 'partials/person-btns.html'
      };
    })

    .directive('personPaginator', function () {
      return {
        restrict: 'E',
        templateUrl: 'partials/person-paginator.html'
      };
    })

    .directive('formPerson', function () {
      return {
        restrict: 'E',
        templateUrl: 'partials/form-person.html'
      };
    })

})();
