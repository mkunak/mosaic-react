import React from 'react';
import { ServicesConsumer } from '../ServicesContext';

export const withServices = () => (Wrapped) => {
  return (props) => {
    return (
      <ServicesConsumer>
        {(Services) => {
          return <Wrapped {...props} Services={Services} />;
        }}
      </ServicesConsumer>
    );
  };
};
