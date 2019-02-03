import React from 'react';
import { Formik } from 'formik';
import styled from 'styled-components';

import { addTodo } from '../../../fakeApi';
import useFetchData from '../../../hooks/useFetchData';

import TodoList from '../TodoList';

import Input from '../../../components/atoms/Input';
import Button from '../../../components/atoms/Button';

const StyledForm = styled.form`
  display: flex;
  justify-content: space-evenly;
`;

const List = () => {
  const { data, triggerFetchData } = useFetchData({ endpoint: 'new' });

  return (
    <>
      <Formik
        initialValues={{ id: 0, text: '', status: 'new' }}
        onSubmit={(values, { setSubmitting }) => {
          addTodo(values);
          triggerFetchData();
          setSubmitting(false);
        }}
      >
        {({
          handleSubmit,
          isSubmitting,
          handleChange,
        }) => {
          return (
            <StyledForm onSubmit={handleSubmit}>
              <Input
                type='text'
                name='text'
                placeholder='Text'
                onChange={handleChange}
              />

              <Button type='submit' disabled={isSubmitting}>
                Add
              </Button>
            </StyledForm>
          );
        }}
      </Formik>
      <hr />
      <div>
        <TodoList todos={data} triggerFetchData={triggerFetchData} />
      </div>
    </>
  );
};

export default List;
