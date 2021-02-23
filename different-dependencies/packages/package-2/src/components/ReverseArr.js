import React, { useState } from 'react';
import { reverse } from 'lodash';

export function ReverseArr() {
  const [arr, setArr] = useState('1,2,3')

  const valueToShow = `[ ${reverse(arr.split(',')).join(',')} ]`;

  const onChange = (e) => {
    setArr(e.target.value);
  }
  return (
    <div className="reverse-arr-container">
      <input type="text" value={arr} onChange={onChange} />

      <div>
        <p>Reversed array:</p>
        <p>{valueToShow}</p>
      </div>
    </div>
  );
}