angular.module('genre')
    .controller('genreController', function ($scope, $location, Service) {
        $scope.title = 'Genre';

        console.log(Service.query());
        /* service.get(function (data) {
            console.log(data)
        }); */

    })