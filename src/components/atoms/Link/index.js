import React from 'react';
import styled from 'styled-components';

const StyledA = styled.a`
  padding: 1em;
  text-decoration: none;
  border: 1px solid #000;
`;

const Link = ({ to, ...props }) => {
  return (
    <StyledA href={to} {...props} />
  );
};

export default Link;
