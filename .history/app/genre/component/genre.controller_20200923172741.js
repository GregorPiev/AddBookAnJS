angular.module('genre')
    .controller('genreController', function ($scope, Service) {
        $scope.genreList = [];
        $scope.choosedId = 0;
        console.log('genreController');

        Service.query(function (data) {
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
    })