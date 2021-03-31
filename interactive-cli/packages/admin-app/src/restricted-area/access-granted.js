import React, { useState } from 'react';

import NgReactComponent from 'ng/ng-react-component'

export function AccessGrantedReactComponent() {
  const [likes, setLikes] = useState(0);

  return (
    <div className="access-granted-container">
      <h3>Hooray! You can enter this page now, as you are the God!</h3>
      <p>How do you like it? Hit the button to add more likes!</p>

      <button onClick={() => setLikes(likes + 1)}>❤️</button>
      <p>Number of likes: {likes}</p>
    </div>
  );
}

export const NgAccessGrantedReactCmp = NgReactComponent.wrap(AccessGrantedReactComponent, 'access-granted-react-component');