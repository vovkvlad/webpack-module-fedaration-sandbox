import app from './app.module';

function appController($scope) {
  'ngInject';
}

app.controller('AppController', appController);

export default 'AppController';
