'use strict'
angular.module('addBookItem')
    .component('addBookItemComponent', {
        templateUrl: '/app/add-book/component/add-book.template.html',
        controller: 'addBookController',
        controllerAs: 'AddBookCtrl'
    });