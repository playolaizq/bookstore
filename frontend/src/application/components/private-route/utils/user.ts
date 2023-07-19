import { User } from '#/common/types/user';

export const getUserCaps = (user: User) => {
  const capitalizedFirstName = user.firstName.charAt(0).toUpperCase();
  const capitalizedLastName = user.lastName.charAt(0).toUpperCase();

  return capitalizedFirstName + capitalizedLastName;
};
