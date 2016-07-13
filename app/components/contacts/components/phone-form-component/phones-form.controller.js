class PhonesFormController {

    constructor(ContactsService, $state) {

        this.ContactsService = ContactsService;
        this.$state = $state;

    }

}

PhonesFormController.$inject = ['ContactsService', '$state'];

export default PhonesFormController