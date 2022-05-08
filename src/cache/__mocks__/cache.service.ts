export const CacheService = jest.fn().mockReturnValue({
  find: jest.fn(),
  create: jest.fn(),
  compare: jest.fn().mockResolvedValue(false),
});
