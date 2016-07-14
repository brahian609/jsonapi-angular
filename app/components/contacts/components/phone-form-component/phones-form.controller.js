class PhonesFormController {

    constructor(ContactsService, $state) {

        this.ContactsService = ContactsService;
        this.$state = $state;
        this.attributes = {};

    }

    create() {

        var dataPhone = {
            data: {
                type: 'phone-numbers',
                relationships: {
                    contact: {
                        data: {
                            type: "contacts",
                            id: this.id
                        }
                    }
                },
                attributes: this.attributes
            }
        };

        this.ContactsService.addPhone(dataPhone).then(({data}) => {
            console.log('data');
            console.log(data);
            this.$state.reload();
        }).catch(reason => {
            console.log('reason');
            console.log(reason);
        })

    }

}

PhonesFormController.$inject = ['ContactsService', '$state'];

export default PhonesFormController