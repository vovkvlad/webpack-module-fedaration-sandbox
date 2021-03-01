import angular from 'angular';

import app from './app.module';

import './routes';
import './app.controller';

angular.bootstrap(document, [app.name]);