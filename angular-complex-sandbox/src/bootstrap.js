import angular from 'angular';
import app from './app.module';
import './routes';
import './app.controller';

import './global-styles.css';

angular.bootstrap(document, [app.name]);
