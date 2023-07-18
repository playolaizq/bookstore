import { StatusCodes } from 'http-status-codes';
import { createUser, getUser } from './requests';

describe('users validators', () => {
  describe('create user', () => {
    it('should return bad request if email is bad formatted', async () => {
      const user = {
        email: 'polgmailcom',
        firstName: 'Pol',
        lastName: 'Layola',
      };

      const { status } = await createUser(user);

      expect(status).toBe(StatusCodes.BAD_REQUEST);
    });

    it('should return bad request if firstName is missing', async () => {
      const user = {
        email: 'pol@gmail.com',
        firstName: '',
        lastName: 'Layola',
      };

      const { status } = await createUser(user);

      expect(status).toBe(StatusCodes.BAD_REQUEST);
    });

    it('should return bad request if lastName is missing', async () => {
      const user = {
        email: 'pol@gmail.com',
        firstName: 'Pol',
        lastName: '',
      };

      const { status } = await createUser(user);

      expect(status).toBe(StatusCodes.BAD_REQUEST);
    });
  });

  describe('get user', () => {
    it('should return bad request if userId param is not uuid', async () => {
      const userId = 'abc';
      const { status } = await getUser(userId);

      expect(status).toBe(StatusCodes.BAD_REQUEST);
    });
  });
});
