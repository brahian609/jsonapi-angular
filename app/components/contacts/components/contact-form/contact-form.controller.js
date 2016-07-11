(function () {
    'user strict';

    class ContactFormController {

        constructor(ContactsService) {

            this.ContactsService = ContactsService;
            this.attributes = {}

        }

        create() {
            console.log('create contact');

           /* var dataContact = {
                type: 'contacts',
                attributes: this.attributes
            };*/

            var dataContact = {
                "type": "contacts",
                "attributes": {
                    "name-first": "John1",
                    "name-last": "Doe1",
                    "email": "john1.doe@boring.test"
                }
            };

            this.ContactsService.addContact(dataContact).then(({data}) => {
                console.log('data');
                console.log(data);
            }).catch(reason => {
                console.log('reason');
                console.log(reason);
            })

        }

    }

    ContactFormController.$inject = ['ContactsService'];

    angular.module('app.components.contacts').controller('ContactFormController', ContactFormController);

}());