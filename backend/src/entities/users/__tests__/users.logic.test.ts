import { server } from '../../../application';
import { client } from '../../../application/database/client';
import { Error } from '../constants/error';
import { createUser } from './requests';

describe('users logic', () => {
  afterAll(async () => {
    // Reset database
    const deleteUsers = client.user.deleteMany();
    const deleteBooks = client.book.deleteMany();

    await client.$transaction([deleteUsers, deleteBooks]);
    await client.$disconnect();

    // Close server
    server.close();
  });

  it('should create a user', async () => {
    const user = {
      email: 'pol@gmail.com',
      firstName: 'Pol',
      lastName: 'Layola',
    };

    const { body } = await createUser(user);

    expect(body.email).toBe(user.email);
    expect(body.firstName).toBe(user.firstName);
    expect(body.lastName).toBe(user.lastName);
  });

  it('should not create a user if already exists', async () => {
    const user = {
      email: 'pol@gmail.com',
      firstName: 'Pol',
      lastName: 'Layola',
    };

    const { body } = await createUser(user);

    expect(body.error).toBe(Error.CONFLICT);
  });
});
