import { rest } from 'msw';
import result from '../data/result.json';

export const handlers = [
  rest.get(`https://api.spotify.com/v1/search`, (res, ctx) => {
    return res(ctx.status(200), ctx.json(result));
  }),
];
