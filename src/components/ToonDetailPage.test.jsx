import React from 'react';
import { render } from '@testing-library/react';
import ToonDetailPage from './ToonDetailPage';

describe('ToonDetailPage component', () => {
  it('makes toon details', () => {
    const { asFragment } = render(
      <ToonDetailPage name="Rick Sanchez" status="alive" 
        species="human" gender="male" />
    );

    expect(asFragment()).toMatchSnapshot;
  });
});
