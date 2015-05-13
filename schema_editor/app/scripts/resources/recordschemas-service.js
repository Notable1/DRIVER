
(function () {
    'use strict';

    /* ngInject */
    function RecordSchemas($resource, Config) {
        return $resource(Config.api.hostname + '/api/recordschemas/:id/', {id: '@uuid'}, {
            create: {
                method: 'POST'
            },
            get: {
                method: 'GET'
            },
            query: {
                method: 'GET',
                transformResponse: function(data) { return angular.fromJson(data).results; },
                isArray: true
            },
            update: {
                method: 'PATCH'
            }
        });
    }

    angular.module('ase.resources')
    .factory('RecordSchemas', RecordSchemas);

})();