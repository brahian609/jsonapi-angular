(function () {
    'user strict';

    class ContactDetailController {

        constructor(ContactsService, contact){

            this.contact = contact;

            console.log('contact');
            console.log(contact);

            this.name   = `${contact.data.attributes['name-first']} ${contact.data.attributes['name-last']}`;
            this.email  = contact.data.attributes.email;
            this.phones = contact.included;


        }

    }

    ContactDetailController.$inject = ['ContactsService', 'contact'];

    angular.module('app.components.contacts').controller('ContactDetailController', ContactDetailController);

}());