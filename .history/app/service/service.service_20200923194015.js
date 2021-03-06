'use strict'
angular.module('service')
    .factory('Service', function ($resource) {
        console.log('Service')
        var url = '/data/data.json';

        return $resource(url, { id:@id
    }, {
        query: {
            method: "GET",
            params: {},
            isArray: false,
            cache: false
        },
        get: {
            method: "GET",
            isArray: true,
            cache: false
        },
        save: {
            method: "PUT",
            params: {},
            isArray: false,
            cache: false
        }
    })


    })