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

export const postDataCart = (cart) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "POST",
        url: "/user/get-one", // Thay thế "/your-endpoint" bằng đường dẫn của bạn
        data: {
          cart: cart,
        },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
