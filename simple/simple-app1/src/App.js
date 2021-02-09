import React, { Suspense } from 'react';

const RemoteApp2 = React.lazy(() => import("app2/App"));

export default function App() {
  return (
    <div>
      <h1>App 1</h1>
      <p>Below will be some content</p>
      <hr/>
      <Suspense fallback={'Loading App 2'}>
        <RemoteApp2 />
      </Suspense>
    </div>
  );
}