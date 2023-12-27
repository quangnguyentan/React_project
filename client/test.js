let initialState = [
  {
    username: "foo",
    password: "bar",
  },
];
const action = {
  type: "LOGIN",
  payload: {
    username: "foo",
    password: "bar",
  },
};
const LoginComponent = (state, action) => {
  switch (action.type) {
    // This reducer handles any action with type "LOGIN"
    case "LOGIN":
      return state.map((user) => {
        if (user.username !== action.payload.username) {
          return user;
        }

        if (user.password == action.payload.password) {
          return {
            ...user,
            login_status: "LOGGED IN",
          };
        }
      });
    default:
      return state;
  }
};

console.log(LoginComponent(initialState, action));
