(function (_) {

  angular.module('crud.controllers', [])
    .controller('crudController', ['$scope', '$routeParams', 'personService', function ($scope, $routeParams, personService) {

      personService.all().then(function (data) {
        $scope.persons = data;

        //Buttons Settings
        $scope.submit = true;
        $scope.edit = false;
        $scope.personid = true;

        var empid = $scope.persons.length;

        //data bandera
        $scope.createPerson = function () {

            if ($scope.newPerson.id == null) {

                $scope.newPerson.id = empid++;

                $scope.persons.push($scope.newPerson);

            } else {

                for (i in $scope.persons) {

                    if ($scope.persons[i].id == $scope.newPerson.id) {

                        $scope.persons[i] = $scope.newPerson;

                    }

                }

            }

            $scope.newPerson = {};
            $scope.submit = true;
            $scope.edit = false;

        }

        $scope.deletePerson = function (id) {

            for (i in $scope.persons) {

                if ($scope.persons[i].id == id) {

                    $scope.persons.splice(i, 1);

                    $scope.newPerson = {};

                }

            }



        }

        $scope.editPerson = function (id) {
          $scope.submit = false;
          $scope.edit = true;

            for (i in $scope.persons) {

                if ($scope.persons[i].id == id) {
                    
                    $scope.newPerson = angular.copy($scope.persons[i]);

                }

            }

            //$scope.newPerson = {};

        }

        $scope.cancelEdit = function(){
          $scope.submit = true;
          $scope.edit = false;

          $scope.newPerson = {};
        }

      });
    }])

    .controller('TabsController', function () {
      this.tab = 1;

      this.selectTab = function (tab) {
        this.tab = tab;
      };
    })

    .controller('Clear', function () {
      this.name = '';
    });

})(_);
