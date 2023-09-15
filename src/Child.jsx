import React from 'react';
import Grandchild from './Grandchild';

function Child(props) {
  return (
    <div>
      <h3>Child Component</h3>
      <Grandchild message={props.message} />
    </div>
  );
}

export default Child;

