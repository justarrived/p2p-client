import { PropTypes } from 'react';

const { number, shape, string, oneOfType } = PropTypes;

export const imageProp =
  oneOfType([
    number.isRequired,
    shape({
      uri: string.isRequired,
    }),
  ]);
