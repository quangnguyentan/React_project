import axiosConfig from "../axios";
export const apigetCurrent = (token) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: "/user/get-one",
        headers: {
          authentication: token,
        },
      });
      console.log(response);
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
