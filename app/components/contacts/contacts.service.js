(function () {
    'user strict';

    class ContactsService {

        constructor($q, $http){
            this.$q = $q;
            this.$http = $http;
        }

        addContact(data) {

            return this.$q((resolve, reject) => {

                this.$http({
                    url: `http://localhost:3000/contacts`,
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: data
                }).then(({data}) => {
                    resolve(data);
                }, (reason)=> {
                    reject(reason);
                });

            });

        }

        getContacts() {
            return this.$q((resolve, reject) => {

                this.$http({
                    url: `http://localhost:3000/contacts`,
                    method: 'GET'
                }).then(({data}) => {
                    resolve(data);
                }, (reason)=> {
                    reject(reason);
                });

            });
        }

        getDetail(url) {

            return this.$q((resolve, reject) => {

                this.$http({
                    url: url,
                    method: 'GET'
                }).then(({data}) => {
                    resolve(data);
                }, (reason)=> {
                    reject(reason);
                });

            });
        }

        getPhones(url) {

            return this.$q((resolve, reject) => {

                this.$http({
                    url: url,
                    method: 'GET'
                }).then(({data}) => {
                    resolve(data);
                }, (reason)=> {
                    reject(reason);
                });

            });
        }

    }

    ContactsService.$inject = ['$q', '$http'];

    angular.module('app.components.contacts').service('ContactsService',ContactsService);

}());
