import React from 'react';

export const Covers = () => {
  return (
    <div
      style={{
        position: 'absolute',
        right: '0',
        zIndex: '0',
        top: '0',
      }}
    >
      <img
        src="/images/covers.png"
        alt="covers"
        style={{
          maxWidth: '1100px',
          width: '100%',
          maxHeight: '99vh',
        }}
      />
    </div>
  );
};
