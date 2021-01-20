import React from 'react';
import spinner from '../../images/spinner.gif';
import './Spinner.css';

function Spinner() {
  return (
    <div className="sweet-loading">
      <img src={spinner} alt="spinner" />
    </div>
  );
}

export default Spinner;
