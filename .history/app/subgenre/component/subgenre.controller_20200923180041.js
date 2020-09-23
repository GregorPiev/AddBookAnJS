angular.module('subgenre')
    .controller('subgenreController', function ($scope, $routeParams, Service, $location) {
        console.log('subgenreController')
        var id = $routeParams.id;
        $scope.title = `SubGenre ${id}`;


        $scope.genreList = [];
        $scope.choosedId = 0;
        console.log('genreController');

        Service.query(function (data) {
            console.log('data item:', data['genres']);
            var choosedItem = data['genres'].filter(function (item) {
                return item.id === id;
            });

            console.log('choosed item:', choosedItem);

            /* angular.forEach(data['genres'], function (item, index) {
                console.log('item:', item)
                var genreItem = {
                    id: item.id,
                    name: item.name
                }
                console.log('genreItem:', genreItem)
                $scope.genreList.push(genreItem);
            }) */
        });

        $scope.chooseGenre = function (id) {
            $scope.choosedId = id;
        }
        $scope.moveFroward = function () {
            $location.path(`/subgenre/${$scope.choosedId}`);
        }
    })