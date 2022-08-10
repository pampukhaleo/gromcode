import { user } from './index'
it('should return name', () => {
  const result = user.fullName;
  expect(result).toEqual('John Doe')
})