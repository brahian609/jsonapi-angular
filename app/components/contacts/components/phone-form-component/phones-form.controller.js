class PhonesFormController {

    constructor(ContactsService, $state, $scope) {

        this.ContactsService = ContactsService;
        this.$state = $state;
        this.attributes = {};
        this.id = this.contact.id;
        this.createForm = true;

        $scope.$watch(() => {
            if(this.phone.attributes != undefined){
                this.attributes.name = this.phone.attributes.name;
                this.attributes['phone-number'] = this.phone.attributes['phone-number'];
                this.createForm = false;
            }
        });

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

    update() {

        console.log("update phone");

        console.log('this.phone');
        console.log(this.phone);

    }

}

PhonesFormController.$inject = ['ContactsService', '$state', '$scope'];

export default PhonesFormController