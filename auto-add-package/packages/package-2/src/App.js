import React from 'react';

import { Header } from './components/Header';

export function App2() {
  return(
    <div className="app-2-contaier">
      <Header>Inner content of package 2</Header>

      <div className="counter-container" style={{ display: 'flex', background: 'pink'}}>
        Some content of 2-nd package
      </div>
    </div>
  )
}

export default App2;