export type CreateUserParams = {
  userName: string;
  password: string;
};

export type UpdateUserParams = {
  userName: string;
  password: string;
};

export type CreateUserProfileParams = {
  firstName: string;
  lastName: string;
  age: number;
  dob: string;
};

export type CreateUserPostParams = {
  title: string;
  description: string;
};
