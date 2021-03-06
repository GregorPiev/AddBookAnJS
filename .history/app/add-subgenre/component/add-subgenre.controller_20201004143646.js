'use strict'
angular.module('addSubgenre')
    .controller('addSubgenreController', function ($scope, $routeParams, $location, AddSubgenre) {
        var id = $routeParams.id;
        $scope.$emit("step", 3);

        $scope.name = '';
        $scope.index = 0;
        $scope.id = 0;
        $scope.subgenres = [];
        $scope.isDescriptionRequired = false;




        $scope.saveVal = function () {
            AddSubgenre({ id: id });


            AddSubgenre.get({ id: id }).$promise
                .then(function (genreObject) {
                    console.log('genreObject:', genreObject);
                    angular.forEach(genreObject['subgenres'], function (item) {
                        console.log('Add Subgenre item:', item)
                        $scope.id = item.id;
                    })

                    var newItem = {
                        'id': ++$scope.id,
                        'isDescriptionRequired': $scope.isDescriptionRequired,
                        'name': $scope.name

                    }

                    genreObject['subgenres'].push(newItem);
                    console.log('genreObject After Add:', genreObject);
                    AddSubgenre.update(genreObject);
                });


            /*  var newIndex = $scope.index++;
             var newId = ++$scope.id;
             var newSubgenre = new AddSubgenre({ id: id });
             var newItem = {
                 'id': newId,
                 'name': $scope.name,
                 'isDescriptionRequired': $scope.isDescriptionRequired
             }
             $scope.subgenres.push(newItem)

             console.log($scope.subgenres) */
            // newSubgenre.subgenres = $scope.subgenres;

            // var savePromise = newSubgenre.subgenres.$save($scope.subgenres)

            //.$promise.then(function (result) {
            //console.log('Add Subgenre result:', result)
            //data saved. do something here.
            // $location.path(`/add-book/${id}/1`);
            //});


        }
        $scope.moveBack = function () {
            $location.path(`/subgenre/${id}`);
        }
    });