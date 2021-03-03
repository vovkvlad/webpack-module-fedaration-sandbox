import angular from 'angular';
import jquery from 'jquery';
import app from './app.module';
import './routes';
import './app.controller';

window.$ = jquery;

setTimeout(() => {
  angular.bootstrap(document, [app.name]);
}, 0);

