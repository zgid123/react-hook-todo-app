import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 10px;
  font-size: 1em;
  border: 1px solid #000;
`;

const Input = ({ value = undefined, ...props }) => {
  return (
    <StyledInput value={value} {...props} />
  );
};

export default Input;
