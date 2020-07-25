import React from 'react';

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<Props> = ({ onClick }) => (
  <button type="button" onClick={onClick}>
    Button
  </button>
);

export default Button;
