import { createLogger } from "../logger";

it('should return logs array', () => {
  const logger = createLogger('login')

  expect(logger.getLogs()).toEqual([])
})

it('should add log to logs array', () => {
  const logger = createLogger('login')
  logger.log('login successful')

  expect(logger.getLogs()).toEqual(['log - login - login successful'])
})

it('should add error to logs array', () => {
  const logger = createLogger('login')
  logger.error('login error')

  expect(logger.getLogs()).toEqual(['error - login - login error'])
})