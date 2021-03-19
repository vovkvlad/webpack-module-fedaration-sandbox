import React from 'react';
import { UIView, UISrefActive, UISref } from '@uirouter/react';

import { UserPermissions } from './components/user-permissions/user-permissions';

import './App.css';

export default function App() {
  return (
      <div className="react-page-container">
        <h1>This is top level page that is rendered using react</h1>
        <p>it also uses User permissions service to list all permissions below:</p>

        <UserPermissions/>

        <hr/>

        <p>If you want to add subrouting - just at the required stuff here. (or probably I'll do it later)</p>
        <p>Okay, okay, I've done that too:</p>

        <ul className="react-tabs-container">
          <li className="react-tab-item">
            <UISrefActive class="react-tab-active">
              <UISref to="app.react-page.sub-page-1">
                <a>React Sub Page 1</a>
              </UISref>
            </UISrefActive>
          </li>
          <li className="react-tab-item">
            <UISrefActive class="react-tab-active">
              <UISref to="app.react-page.sub-page-2">
                <a>React Sub Page 2</a>
              </UISref>
            </UISrefActive>
          </li>
        </ul>

        <UIView/>
      </div>
  );
}