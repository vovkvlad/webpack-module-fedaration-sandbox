/* eslint-disable import/no-mutable-exports */
import angular from 'angular';

export let $compile = null;
export let $compileProvider = null;
export let $filter = null;
export let $http = null;
export let $interval = null;
export let $location = null;
export let $log = null;
export let $rootScope = null;
export let $timeout = null;
export let $q = null;
export let $state = null;
export let injector = null;
export let $sce = null;
export let $window = null;
export let $stateParams = null;
export let $transitions = null;
export let $anchorScroll = null;

export default angular
  .module('ngExports', [])
  .config(hydrateProviders)
  .run(hydrateServices);

function hydrateProviders($injector) {
  'ngInject';
  $compileProvider = $injector.get('$compileProvider');
}

function hydrateServices($injector) {
  'ngInject';
  injector = $injector;
  $compile = $injector.get('$compile');
  $filter = $injector.get('$filter');
  $http = $injector.get('$http');
  $interval = $injector.get('$interval');
  $location = $injector.get('$location');
  $log = $injector.get('$log');
  $rootScope = $injector.get('$rootScope');
  $timeout = $injector.get('$timeout');
  $q = $injector.get('$q');
  $state = $injector.get('$state');
  $sce = $injector.get('$sce');
  $window = $injector.get('$window');
  $stateParams = $injector.get('$stateParams');
  $transitions = $injector.get('$transitions');
  $anchorScroll = $injector.get('$anchorScroll');
}
