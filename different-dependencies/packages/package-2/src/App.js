import React from 'react';

import { Header } from './components/Header';
import { ReverseArr } from './components/ReverseArr';

export function App2() {
  return(
    <div className="app-2-contaier">
      <Header>Inner content of package 2</Header>

      <div className="counter-container" style={{ display: 'flex', background: 'pink'}}>
        <ReverseArr />
      </div>
    </div>
  )
}

export default App2;