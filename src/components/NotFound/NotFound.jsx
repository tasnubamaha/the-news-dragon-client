import React from 'react';
import NotFoundImage from '../images/not-found.png';

function NotFound() {
  return (
    <div>
      <h1>404 Page Not Found</h1>
      <img src={NotFoundImage} alt="404 Not Found" />
    </div>
  );
}

export default NotFound;
