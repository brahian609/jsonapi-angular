(function () {
    'user strict';

    class ContactsService {

        constructor($q, $http){
            this.$q = $q;
            this.$http = $http;
        }

        getContacts() {
            return this.$http({
                method: 'GET',
                url: 'http://localhost:3000/contacts'
            }).then(function (response) {
                return response;
            }, function (error) {
                console.log("--- error ---");
                console.log(error);
            });
        }

    }

    ContactsService.$inject = ['$q', '$http'];

    angular.module('app.components.contacts').service('ContactsService',ContactsService);

}());
