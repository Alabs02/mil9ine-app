import { Fragment } from 'react';
import PropTypes from 'prop-types';
import './NoEntity.css'
import 'animate.css';

const NoEntity = ({ imgUrl, title, copy }) => {
  return (
    <Fragment>
      <div className="container text-container animate__animated animate__fadeIn">
        <h4 className="mt-4">NO RIDES AT THE MOMENT!</h4>
      </div>
    </Fragment>
  );
}

NoEntity.propTypes = {
  imgUrl: PropTypes.object,
  title: PropTypes.string,
  copy: PropTypes.string,
}

export default NoEntity;
