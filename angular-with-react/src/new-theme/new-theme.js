import React, {Suspense, lazy} from "react";

const RemotePackage1 = lazy(() => import("package1/package1"));

export default class NewTheme extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{color: "red"}}>Hello from react class component</h1>
        <Suspense fallback={"Loading Package 1"}>
          <RemotePackage1 />
        </Suspense>
      </div>
    );
  }
}
