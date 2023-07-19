import { StatusCodes } from 'http-status-codes';
import { signUp, signIn } from './requests';

describe('auth logic', () => {
  describe('sign up', () => {
    it('should sign up a user', async () => {
      const payload = {
        email: 'pol@gmail.com',
        password: '12345678',
        firstName: 'Pol',
        lastName: 'Layola',
      };
      const { body, status } = await signUp(payload);

      expect(status).toBe(StatusCodes.CREATED);
      expect(body.id).toBeDefined();
      expect(body.email).toBe(payload.email);
      expect(body.password).toBeUndefined();
      expect(body.firstName).toBe(payload.firstName);
      expect(body.lastName).toBe(payload.lastName);
    });

    it('should not sign up a user if already exists', async () => {
      const payload = {
        email: 'pol-duplicated@gmail.com',
        password: '12345678',
        firstName: 'Pol',
        lastName: 'Layola',
      };
      const { body: body1, status: status1 } = await signUp(payload);
      expect(status1).toBe(StatusCodes.CREATED);
      expect(body1.id).toBeDefined();
      expect(body1.password).toBeUndefined();

      const { body: body2, status: status2 } = await signUp(payload);
      expect(status2).toBe(StatusCodes.CREATED);
      expect(body2.id).toBeUndefined();
      expect(body2.password).toBeUndefined();
    });
  });

  describe('sign in', () => {
    it('should sign in a registered user', async () => {
      const payload = {
        email: 'pol@gmail.com',
        password: '12345678',
      };
      const { body, status } = await signIn(payload);

      expect(status).toBe(StatusCodes.OK);
      expect(body.id).toBeDefined();
      expect(body.email).toBe(payload.email);
      expect(body.password).toBeUndefined();
    });

    it('should not sign in an unknown user', async () => {
      const payload = {
        email: 'unknown@gmail.com',
        password: '12345678',
      };
      const { body, status } = await signIn(payload);

      expect(status).toBe(StatusCodes.UNAUTHORIZED);
      expect(body.id).toBeUndefined();
    });
  });
});
