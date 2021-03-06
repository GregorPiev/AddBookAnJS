'use strict'
angular.module('subgenre')
    .controller('subgenreController', function ($scope, $routeParams, GetSubGenre, $location) {
        var id = $routeParams.id;
        $scope.$emit("step", 2);

        $scope.subGenreList = [];
        $scope.choosedId = 0;

        GetSubGenre.get({ id: id }).$promise
            .then(function (date) {
                console.log('Subgenre:', date);
                angular.forEach(date['subgenres'], function (item, index) {
                    //console.log('Subgenre item:', item)
                    //console.log('Subgenre index:', index)
                    var subGenreItem = {
                        id: item.id,
                        name: item.name
                    }
                    $scope.subGenreList.push(subGenreItem);
                })
            });

        $scope.chooseGenre = function (id) {
            $scope.choosedId = id;
        }
        $scope.moveFroward = function () {
            if (+$scope.choosedId === -1) {
                $location.path(`/add-subgenre/${id}`);
            } else {
                $location.path('/');
            }

        }

        $scope.getBooksList = function () {
            $location.path(`/book/${id}/${$scope.choosedId}`);
        }
        $scope.moveBack = function () {
            $location.path('/');
        }
    })