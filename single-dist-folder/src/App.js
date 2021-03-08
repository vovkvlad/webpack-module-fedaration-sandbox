import React, { Suspense, useState } from 'react';

const RemoteButton1 = React.lazy(() => import("package1/Button"));
const RemoteHeader1 = React.lazy(() => import("package1/Header"));
const RemoteTimer1 = React.lazy(() => import("package1/Timer"));


export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>App 1</h1>
      <p>Below will be some content from Package 1 with each component individually exposed</p>
      <hr/>
      <Suspense fallback={'Loading Package 1'}>
        <RemoteHeader1>Inner content of package 1</RemoteHeader1>

        <div className="counter-container" style={{ display: 'flex'}}>
          <p style={{marginRight: '20px'}}>{`Counter: ${counter}`}</p>
          <RemoteButton1 onClick={() => setCounter(counter+1)}>Increment</RemoteButton1>
          <RemoteButton1 onClick={() => setCounter(counter-1)}>Decrement</RemoteButton1>
        </div>

        <div className="timer-container">
          <RemoteTimer1 />
        </div>
      </Suspense>
    </div>
  );
}