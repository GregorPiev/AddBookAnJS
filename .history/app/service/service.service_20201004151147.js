'use strict'
angular.module('service')
    .factory('Service', function ($resource) {
        var url = '/data/data.json'; //https://angularjs-addbook.firebaseio.com/
        // var url = 'https://angularjs-addbook.firebaseio.com/';
        return $resource(url, {},
            {
                query: {
                    method: "GET",
                    params: { id: '@_id' },
                    isArray: false,
                    cache: false
                },
                get: {
                    method: "GET",
                    isArray: false,
                    cache: false
                },
                update: {
                    method: "PUT"
                }
            })


    })
    .factory('GetGenre', function ($resource) {
        var url = 'https://angularjs-addbook.firebaseio.com/genres.json';
        return $resource(url, {},
            {
                get: {
                    method: "GET",
                    isArray: true,
                    cache: false

                }
            })
    })
    .factory('GetSubGenre', function ($resource) {
        var url = 'https://angularjs-addbook.firebaseio.com/genres/:id.json';
        return $resource(url);

    })
    .factory('AddSubgenre', function ($resource) {
        var url = 'https://angularjs-addbook.firebaseio.com/genres/:idGenre.json';
        return $resource(url, { id: '@idGenre' },
            {
                get: {
                    method: "GET",
                    isArray: false,
                    cache: false

                },
                update: {
                    method: "PATCH"
                }
            });

    })
