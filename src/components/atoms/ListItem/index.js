import React from 'react';
import styled from 'styled-components';

const StyledLi = styled.li`
  font-size: 1em;
  list-style-type: none;
`;

const ListItem = (props) => {
  return (
    <StyledLi {...props} />
  );
};

export default ListItem;
