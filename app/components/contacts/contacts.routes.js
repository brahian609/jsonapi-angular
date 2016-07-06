(function () {
    'user strict';

    angular.module('app.components.contacts').config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('contacts', {
                url: '/contacts',
                controller: 'ContactsController',
                controllerAs: 'ctrl',
                templateUrl: 'components/contacts/contacts.html'
            });
    }

}());