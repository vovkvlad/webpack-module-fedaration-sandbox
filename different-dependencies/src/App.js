import React, { Suspense } from 'react';

const RemotePackage1 = React.lazy(() => import("package1/package1"));
const RemotePackage2 = React.lazy(() => import("package2/package2"));

export default function App() {
  return (
    <div>
      <h1>App 1</h1>
      <p>Below will be some content</p>
      <hr/>
      <Suspense fallback={'Loading Package 1'}>
        <RemotePackage1 />
      </Suspense>

      <Suspense fallback={'Loading Package 2'}>
        <RemotePackage2 />
      </Suspense>
    </div>
  );
}