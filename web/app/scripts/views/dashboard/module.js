(function () {
    'use strict';

    /* ngInject */
    function StateConfig($stateProvider) {
        $stateProvider.state('dashboard', {
            url: '/',
            template: '<driver-dashboard></driver-dashboard>',
            label: 'Dashboard',
            showInNavbar: true
        });
    }

    angular.module('driver.views.dashboard', [
        'ui.router',
        'ui.bootstrap',
        'ase.resources',
        'driver.blackSpots',
        'driver.resources',
        'driver.toddow',
        'driver.stepwise',
        'driver.map-layers.recent-events',
        'driver.recentCounts',
        'driver.recentProportions',
        'driver.state'
    ]).config(StateConfig);

})();
