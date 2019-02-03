import React from 'react';
import styled from 'styled-components';

import Icon from '../../atoms/Icon';
import Button from '../../atoms/Button';

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
`;

const StyledIcon = styled(Icon)`
  margin: 0 1em;
`;

const IconButton = ({ icon, children, ...props }) => {
  return (
    <StyledButton {...props}>
      {children}
      <StyledIcon icon={icon}></StyledIcon>
    </StyledButton>
  );
};

export default IconButton;
