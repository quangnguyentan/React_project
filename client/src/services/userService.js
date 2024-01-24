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

export const postDataCart = (id, cart) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "PUT",
        url: "/user/get-one", // Thay thế bằng endpoint phù hợp cho chức năng đặt hàng của bạn
        data: {
          id: id, // Thêm thông tin userId vào dữ liệu gửi đi
          cart: cart,
        },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
