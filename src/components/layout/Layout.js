import React, { Fragment } from 'react';

export default (props) => {
  return (
    <Fragment>
      <h1>Layout</h1>
      <div>{props.children}</div>
    </Fragment>
  );
}