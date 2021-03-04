import React, { Suspense, useState } from 'react';

const RemoteButton1 = React.lazy(() => import("package1/Button"));
const RemoteHeader1 = React.lazy(() => import("package1/Header"));
const RemoteTimer1 = React.lazy(() => import("package1/Timer"));

// Hey! we can use usual imports!!!
import Components2 from "package2/components";
import { Timer } from "package2/Timer";


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

      <hr />
      <p>Below will be some content from Package 2</p>
      <Components2.Header>Inner content of package 2</Components2.Header>

      <div className="counter-container" style={{ display: 'flex'}}>
        <p style={{marginRight: '20px'}}>{`Counter: ${counter}`}</p>
        <Components2.Button onClick={() => setCounter(counter+1)}>Increment</Components2.Button>
        <Components2.Button onClick={() => setCounter(counter-1)}>Decrement</Components2.Button>
      </div>

      <div className="timer-container">
        <Timer />
      </div>
    </div>
  );
}