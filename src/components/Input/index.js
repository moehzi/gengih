import React from 'react';

const Input = ({ handleChange, text }) => {
  return <input name={text} onChange={handleChange} />;
};

export default Input;
