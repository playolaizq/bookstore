import { StatusCodes } from 'http-status-codes';
import { Error } from '../constants/error';
import { createUser } from './requests';

describe('users logic', () => {
  it('should create a user', async () => {
    const user = {
      email: 'pol@gmail.com',
      firstName: 'Pol',
      lastName: 'Layola',
    };

    const { body, status } = await createUser(user);

    expect(status).toBe(StatusCodes.CREATED);
    expect(body.email).toBe(user.email);
    expect(body.firstName).toBe(user.firstName);
    expect(body.lastName).toBe(user.lastName);
  });

  it('should not create a user if already exists', async () => {
    const user = {
      email: 'pol-duplicated@gmail.com',
      firstName: 'Pol',
      lastName: 'Layola',
    };

    const { status: status1 } = await createUser(user);
    expect(status1).toBe(StatusCodes.CREATED);

    const { body, status: status2 } = await createUser(user);
    expect(status2).toBe(StatusCodes.CONFLICT);
    expect(body.error).toBe(Error.CONFLICT);
  });
});
