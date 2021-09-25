import React from 'react';
import rockGlass from '../images/rockGlass.svg';

import backGroundImage from '../images/loading.png';

export default function Loading() {
  return (
    <div className="loading-app" style={{ backgroundImage: `url(${backGroundImage})` }}>
      <object
        className="rocksGlass"
        type="image/svg+xml"
        data={rockGlass}
        width="100"
      >
        Glass
      </object>
      <span className="logo">Loading...</span>
    </div>
  );
}
