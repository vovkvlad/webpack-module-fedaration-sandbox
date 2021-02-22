import React, { useState } from 'react';

import { Button } from './components/Button';
import { Header } from './components/Header';

export function App2() {
  const [counter, setCounter] = useState(0);

  return(
    <div className="app-2-contaier">
      <Header>Inner content of package 1</Header>

      <div className="counter-container" style={{ display: 'flex'}}>
        <p style={{marginRight: '20px'}}>{`Counter: ${counter}`}</p>
        <Button onClick={() => setCounter(counter+1)}>Increment</Button>
        <Button onClick={() => setCounter(counter-1)}>Decrement</Button>
      </div>
    </div>
  )
}

export default App2;