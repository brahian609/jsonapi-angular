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
            })
            .state('contacts.create', {
                url: '/create',
                controller: 'ContactFormController',
                controllerAs: 'ctrlForm',
                templateUrl: 'components/contacts/components/contact-form/contact-form.html'
            })
            .state('contacts.detail', {
                url: '/:id',
                controller: 'ContactDetailController',
               /* controllerProvider: function ($state) {
                    return `Contacts${$state.name}Controller`
                },*/
                params: {
                    contact: null
                },
                controllerAs: 'ctrlDetail',
                templateUrl: 'components/contacts/components/contact-detail/contact-detail.html',
                resolve: {
                    contact: ['$q', 'ContactsService', '$stateParams', ($q, ContactsService, $stateParams) => {

                        let link = $stateParams.contact.links.self;

                        return $q((resolve, reject) => {
                            ContactsService.getDetail(link).then(({data}) => {
                                resolve(data);
                            }).catch(reason => {
                                console.log('reason');
                                console.log(reason);
                            });
                        });

                    }]
                }
            });
    }

}());