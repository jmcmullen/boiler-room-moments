import { MomentApi } from './MomentStore';

it('fetch moments from api', async () => {
  const { data } = await new MomentApi().fetchMoments();
  expect(data.legth).toBe(3);
});
