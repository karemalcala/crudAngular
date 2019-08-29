(function () {

  angular.module('crud.services', [])

    .factory('personService', ['$http', '$q', '$window', function ($http, $q, $window) {
      var localStorage = $window.localStorage;

      function all() {
        var deferred = $q.defer();

        $http.get('/persons.json')
          .success(function (data) {
            deferred.resolve(data);
          });

        return deferred.promise;
      }

      /* function createPerson(name, lastname){
        console.log(name + ' ' + lastname);

        all().then(function (data) {
          console.log('dentro de la funcion')
        });
      } */

      return {
        all: all,
      };

    }]);

})();