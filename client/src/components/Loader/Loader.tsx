import * as React from 'react';
import './style.scss';

const Loader = () => (
  <div className="loading-component">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <circle cx="16" cy="16" r="15" />
    </svg>
  </div>
);

export default Loader;
