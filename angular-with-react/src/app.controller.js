import app from './app.module';

function appController($scope) {
  'ngInject';

  console.log('I am ng controller');
}

app.controller('AppController', appController);

export default 'AppController';
