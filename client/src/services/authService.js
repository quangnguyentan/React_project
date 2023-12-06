import axiosConfig from "../axios";
// export const apiRegister = (payload) =>
//   new Promise(async (resolve, reject) => {
//     try {
//       const response = await axiosConfig({
//         method: "POST",
//         url: "/v1/auth/register",
//         data: payload,
//       });
//       resolve(response);
//     } catch (error) {
//       reject(error);
//     }
//   });

export const apiLoginSuccess = (id, tokenLogin) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "POST",
        url: "/auth/login-success",
        data: { id, tokenLogin },
      });
      console.log(response);
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
