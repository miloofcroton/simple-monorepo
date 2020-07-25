import React from 'react';

interface Props {
  value: string;
  handleChange: (event: any) => void;
}

const Input: React.FC<Props> = ({ value, handleChange }) => {
  return <input type="text" value={value} onChange={handleChange} />;
};

export default Input;
