import React from 'react';

const Welcome = ({ user, onSignOut }) => {
  return (
    <div>
      <div>
        Welcome <strong>{user.username}</strong>!
        {/* eslint-disable-next-line */}
      </div>
      {/* <a href="#" onClick={onSignOut}>
        Sign out
      </a> */}
      <button type="submit" onClick={onSignOut}>
        Sign out
      </button>
    </div>
  );
};

export default Welcome;
