import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import CharDetail from './CharDetail';
import character from '../../character.json';

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character/2', (req, res, ctx) => {
    return res(ctx.json(character));
  }

  )
);

describe('CharDetail container', () => {

  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays characters details', async () => {
    render(<MemoryRouter><CharDetail match={{ params: { id: '2' } }} 
    /></MemoryRouter>);

    screen.getByText('Loading...');

    const section = await screen.findByRole('details');
    expect(section).not.toBeEmptyDOMElement();

  });
});
