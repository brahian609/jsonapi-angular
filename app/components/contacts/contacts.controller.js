(function () {
    'user strict';

    class ContactsController {

        constructor($scope, $timeout, ContactsService){

            this.ContactsService = ContactsService;

            ContactsService.getContacts().then(({data}) => console.log(data));

        }

        /*getRepos(){

            this.PerfilService.getReposs().then(({data}) => this.repos = data);

        }*/

    }

    ContactsController.$inject = ['$scope', '$timeout', 'ContactsService'];

    angular.module('app.components.contacts').controller('ContactsController', ContactsController);

}());