import { StatusCodes } from 'http-status-codes';
import { signUp } from './requests';

describe('autb validators', () => {
  describe('sign up', () => {
    it('should return bad request if email is bad formatted', async () => {
      const payload = {
        email: 'polgmailcom',
        password: '12345678',
        firstName: 'Pol',
        lastName: 'Layola',
      };
      const { status } = await signUp(payload);

      expect(status).toBe(StatusCodes.BAD_REQUEST);
    });

    it('should return bad request if password length is invalid', async () => {
      const payload = {
        email: 'pol@gmail.com',
        password: '12345',
        firstName: 'Pol',
        lastName: 'Layola',
      };
      const { status } = await signUp(payload);

      expect(status).toBe(StatusCodes.BAD_REQUEST);
    });

    it('should return bad request if firstName is missing', async () => {
      const payload = {
        email: 'pol@gmail.com',
        password: '12345678',
        firstName: '',
        lastName: 'Layola',
      };
      const { status } = await signUp(payload);

      expect(status).toBe(StatusCodes.BAD_REQUEST);
    });

    it('should return bad request if lastName is missing', async () => {
      const payload = {
        email: 'pol@gmail.com',
        password: '12345678',
        firstName: 'Pol',
        lastName: '',
      };
      const { status } = await signUp(payload);

      expect(status).toBe(StatusCodes.BAD_REQUEST);
    });
  });
});
