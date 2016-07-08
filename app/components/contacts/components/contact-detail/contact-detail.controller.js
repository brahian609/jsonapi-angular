(function () {
    'user strict';

    class ContactDetailController {

        constructor(ContactsService, contact){
            console.log('contact');
            console.log(contact);
        }

    }

    ContactDetailController.$inject = ['ContactsService', 'contact'];

    angular.module('app.components.contacts').controller('ContactDetailController', ContactDetailController);

}());