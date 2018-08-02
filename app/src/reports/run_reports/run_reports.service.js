(function () {
    'use strict';

    angular.module('selfService')
        .service('RunReportService', ['$q', '$http', '$rootScope', '$state', '$resource', 'BASE_URL', RunReportService]);

    function RunReportService($q, $http, $rootScope, $state, $resource, BASE_URL) {

        this.reports = function () {
            return $resource(BASE_URL + "/self/runreports/:reportSource", {reportSource: '@reportSource'}, {
                get:
                    {
                        method: 'GET',
                        params: {},
                        isArray: true
                    },
                getReport:
                    {
                        method: 'GET',
                        params: {}
                    }
            });

            /*return $resource(BASE_URL + "/runreports/:reportSource", {reportSource: '@reportSource'});*/
        }

    }

})();