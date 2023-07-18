let user = {
  id: 1,
  name: "名無し",
};

export const createUser = async (name: string) => {
  console.log("createUser", name);
  user = {
    ...user,
    name,
  };
  return user;
};

export const getUser = async () => {
  console.log("getUser", user);
  return user;
};
