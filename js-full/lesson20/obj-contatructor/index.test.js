import { setTitle } from './index'

it('should add numbers', () => {
  const result = setTitle('1 + 2');

  expect(result).toEqual('1 + 2');
});