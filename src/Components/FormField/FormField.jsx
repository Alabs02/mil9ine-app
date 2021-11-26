import { Fragment } from 'react';
import './FormField.css';

export const TextField = (props) => {
  return (
    <Fragment>
      <input className="custom-form-control shadow" {...props} />
    </Fragment>
  );
}

