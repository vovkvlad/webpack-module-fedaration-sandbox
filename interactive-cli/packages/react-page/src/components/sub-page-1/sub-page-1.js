import React from 'react';
import { get } from 'lodash';

export function SubPage1 () {
  const obj = { name: 'This is a sub-page 1'};
  return (
    <div className="react-app-subpage-1-container">
      <h3>{get(obj, 'name', '')}</h3>

      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
      </ul>
    </div>
  );
}

export default SubPage1;