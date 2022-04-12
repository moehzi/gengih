import React from 'react';
import './style.css';

export const ButtonSelect = ({ isSelected, onClick, id }) => {
  return (
    <button
      className="btn-select"
      style={{
        backgroundColor: isSelected ? 'gray' : '#6C5ECF',
      }}
      onClick={onClick}
      id={id}
    >
      {isSelected ? 'Deselect' : 'Select'}
    </button>
  );
};
