import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: 1em;
  cursor: pointer;
  border: 1px solid #000;
`;

const Button = (props) => {
  return (
    <StyledButton {...props} />
  );
};

export default Button;
