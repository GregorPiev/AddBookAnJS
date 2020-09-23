angular.module('genre')
    .controller('genreController', function ($rootScope, $scope, Service, $location) {
        $scope.genreList = [];
        $scope.choosedId = 0;
        console.log('genreController');
        console.log($scope.$parent.step)


        Service.get(function (data) {
            angular.forEach(data['genres'], function (item, index) {
                // console.log('item:', item)
                var genreItem = {
                    id: item.id,
                    name: item.name
                }
                // console.log('genreItem:', genreItem)
                $scope.genreList.push(genreItem);
            })
        });

        $scope.chooseGenre = function (id) {
            $scope.choosedId = id;
        }
        $scope.moveFroward = function () {
            $location.path(`/subgenre/${$scope.choosedId}`);
        }
    })