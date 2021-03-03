import app from './app.module';
// import ColorService from "./data/color.service";

function appController($scope) {
  'ngInject';

  // $scope.themeColor = ColorService.getInstance().themeColor;

  // console.error('Col', $scope.themeColor)
}

app.controller('AppController', appController);

export default 'AppController';
