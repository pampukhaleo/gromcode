import { getTasksList } from '../tasksGateway';

it('should fetch tasksList', () => {
  // eslint-disable-next-line no-shadow
  const result = getTasksList().then((result) => result);
  expect(result).toEqual([]);
});
