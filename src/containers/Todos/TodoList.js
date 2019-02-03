import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { removeTodo, completeTodo } from '../../fakeApi';

import ListItem from '../../components/atoms/ListItem';
import IconButton from '../../components/molecules/IconButton';

const StyledUl = styled.ul`
  padding: 1em;

  > :first-child {
    border-top: 1px solid #000;
  }
`;

const StyledListItem = styled(ListItem)`
  display: flex;
  padding: 1em 0;
  align-items: center;
  border-bottom: 1px solid #000;
`;

const StyledSpan = styled.span`
  flex: 1;
`;

const TodoList = ({ todos, triggerFetchData }) => {
  return (
    <StyledUl>
      {
        todos.map(t => (
          <StyledListItem key={t.id}>
            <StyledSpan>{t.text}</StyledSpan>

            {
              t.status !== 'completed' &&
              <IconButton
                icon='check'
                onClick={() => {
                  completeTodo(t.id);
                  triggerFetchData();
                }}
              >
                Complete
              </IconButton>
            }

            <IconButton
              icon='bin'
              onClick={() => {
                removeTodo(t.id);
                triggerFetchData();
              }}
            >
              Remove
            </IconButton>
          </StyledListItem>
        ))
      }
    </StyledUl>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array,
  triggerFetchData: PropTypes.func,
};

export default TodoList;
