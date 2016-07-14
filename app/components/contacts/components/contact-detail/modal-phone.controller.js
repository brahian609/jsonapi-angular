class ModalPhoneController {

    constructor(ContactsService, $uibModalInstance, links, id) {

        this.ContactsService = ContactsService;
        this.$uibModalInstance = $uibModalInstance;
        this.links = links;
        this.isCollapsed = true;
        this.id = id;

        ContactsService.getPhones(links.related).then(({data}) => {
            this.phones = data;
        }).catch(reason => {
            console.log('reason');
            console.log(reason);
        });

        console.log('links');
        console.log(links);

    }

    delete(id) {

        var config = {
            url: this.links.self
        },
            data = {
                data: [{
                    type: "phone-numbers",
                    id: id
                }]
            };

        this.ContactsService.deleteRelations(config, data).then(({data}) => {
            console.log('delete data');
            console.log(data);
        }).catch(reason => {
            console.log('reason');
            console.log(reason);
        });

    }

    cancel() {
        this.$uibModalInstance.close();
    }


}

ModalPhoneController.$inject = ['ContactsService', '$uibModalInstance', 'links', 'id'];

export default ModalPhoneController