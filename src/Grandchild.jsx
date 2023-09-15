import React from 'react';

function Grandchild(props) {
  return (
    <div>
      <h4>Grandchild Component</h4>
      <p>Message received: {props.message}</p>
    </div>
  );
}

export default Grandchild;
