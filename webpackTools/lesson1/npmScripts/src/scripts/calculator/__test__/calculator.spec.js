import { sum, mult } from "../calculator";

it('should add numbers', () => {
  const result = sum(1, 2)

  expect(result).toEqual(3)
})

it('should multiply numbers', () => {
  const result = mult(1, 2)

  expect(result).toEqual(2)
})

