import React from 'react';
import { render, screen  } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import Characters from './Characters';
import manyCharacters from '../../manyCharacters.json';


const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    return res(ctx.json(manyCharacters));
  }
  )
);

describe('Character container', () => {

  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('character container', async () => {
    render(<MemoryRouter><Characters /></MemoryRouter>);

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list');
    expect(ul).not.toBeEmptyDOMElement();
  });
});
