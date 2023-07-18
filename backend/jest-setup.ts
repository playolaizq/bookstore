import { server } from './src/application';
import { client } from './src/application/database/client';

afterAll(async () => {
  // Reset database
  const deleteUsers = client.user.deleteMany();
  const deleteBooks = client.book.deleteMany();

  await client.$transaction([deleteUsers, deleteBooks]);
  await client.$disconnect();

  // Close server
  server.close();
});
