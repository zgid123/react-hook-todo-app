import React from 'react';
import styled from 'styled-components';

const StyledI = styled.i`
  > svg {
    width: 20px;
    height: 20px;
  }
`;

const Icon = ({ icon, ...props }) => {
  const svg = require(`!raw-loader!../../../assets/images/${icon}.svg`);

  return (
    <StyledI {...props} dangerouslySetInnerHTML={{ __html: svg }} />
  );
};

export default Icon;
