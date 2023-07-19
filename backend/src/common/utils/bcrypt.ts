import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export async function hashPassword(password: string) {
  const hash = await bcrypt.hash(password, SALT_ROUNDS);
  return hash;
}

export async function checkPassword(password: string, hash: string) {
  const result = await bcrypt.compare(password, hash);
  return result;
}
