export type CreateUserArgsType = {
  login: string;
  password: string;
};

export type UpdateUserArgsType = {
  login?: string;
  password?: string;
};

export type UserType = {
  id: string;
  login: string;
  password: string;
};

export abstract class UserRepository {
  abstract findOne(id: string): Promise<UserType>;

  abstract findByLogin(login: string): Promise<UserType>;

  abstract create(createUserArgs: CreateUserArgsType): Promise<UserType>;

  abstract delete(id: string): Promise<UserType>;

  abstract update(
    id: string,
    updateUserData: UpdateUserArgsType,
  ): Promise<UserType>;
}
