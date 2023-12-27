import axiosConfig from "../axios";
export const apigetCurrent = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: "/user/get-one",
        // headers: {
        //   authentication: token,
        // },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
