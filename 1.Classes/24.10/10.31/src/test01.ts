enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

export const user1 = {
  name: "David",
  role: Role.ADMIN
};
export const users = {
  name: "Peter",
  role: Role.USER
};

const user3 = {
  name: "Romeo",
  role: Role.GUEST
};
