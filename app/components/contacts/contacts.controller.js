(function () {
    'user strict';

    class ContactsController {

        constructor(ContactsService, $state, $uibModal){

            this.ContactsService = ContactsService;
            this.$state = $state;
            this.$uibModal = $uibModal;

            ContactsService.getContacts().then(({data}) => {
                this.contacts = data;
            });

        }

        detail(contact) {
            this.$state.go('contacts.detail', {id: contact.id, contact});
        }

        modalPhone() {

            var modalInstance = this.$uibModal.open({
                templateUrl: 'myModalContent.html',
                //controller: 'ModalInstanceCtrl',
            });

        }

    }

    ContactsController.$inject = ['ContactsService', '$state', '$uibModal'];

    angular.module('app.components.contacts').controller('ContactsController', ContactsController);

}());