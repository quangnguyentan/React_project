// let initialState = [
//   {
//     username: "foo",
//     password: "bar",
//   },
// ];
// const action = {
//   type: "LOGIN",
//   payload: {
//     username: "foo",
//     password: "bar",
//   },
// };
// const LoginComponent = (state, action) => {
//   switch (action.type) {
//     // This reducer handles any action with type "LOGIN"
//     case "LOGIN":
//       return state.map((user) => {
//         if (user.username !== action.payload.username) {
//           return user;
//         }

//         if (user.password == action.payload.password) {
//           return {
//             ...user,
//             login_status: "LOGGED IN",
//           };
//         }
//       });
//     default:
//       return state;
//   }
// };

// console.log(LoginComponent(initialState, action));

// const createSlug = (string) =>
//   string
//     .normalize("NFD")
//     .replace(/[\u0300-\u036f]/g, "")
//     .toLowerCase()
//     .trim()
//     .replace(/\s-|&/g, "")
//     .replace(/\s+/g, " ")
//     .split(" ")
//     .join("-");

// const string = "Đồ chơi - mẹ & bé";
// console.log(
//   string
//     .normalize("NFD")
//     .replace(/Đ/g, "D")
//     .replace(/đ/g, "d")
//     .replace(/[\u0300-\u036f]/g, "")
//     .toLowerCase()
//     .trim()
//     .replace(/\s-|&/g, "")
//     .replace(/\s+/g, " ")
//     .split(" ")
//     .join("-")
// );
// const price = [123.0, 134.0];

// const result = price.reduce((total, currentValue, index, arr) => {
//   // console.log(total);
//   const x = total + currentValue;
//   return x;
// }, 0);
// console.log(result);

const createSlug = (string) =>
  string
    .normalize("NFD")
    .replace(/Đ/g, "D")
    .replace(/đ/g, "d")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s-|&/g, "")
    .replace(/\s+/g, " ")
    .split(" ")
    .join("-");

const categories = [
  {
    id: 1,
    categoryName: "Đồ Chơi - Mẹ & Bé",
  },
  {
    id: 2,
    categoryName: "Điện Thoại - Máy Tính Bảng",
  },
  {
    id: 3,
    categoryName: "NGON",
  },
  {
    id: 4,
    categoryName: "Làm Đẹp - Sức Khỏe",
  },
  {
    id: 5,
    categoryName: "Điện Gia Dụng",
  },
  {
    id: 6,
    categoryName: "Thời trang nữ",
  },
  {
    id: 7,
    categoryName: "Thời trang nam",
  },
  {
    id: 8,
    categoryName: "Giày - Dép nữ",
  },
  {
    id: 9,
    categoryName: "Túi thời trang nữ",
  },
  {
    id: 10,
    categoryName: "Giày - Dép nam",
  },
  {
    id: 11,
    categoryName: "Túi thời trang nam",
  },
  {
    id: 12,
    categoryName: "Balo và Vali",
  },
  {
    id: 13,
    categoryName: "Phụ kiện thời trang",
  },
  {
    id: 14,
    categoryName: "Đồng hồ và Trang sức",
  },
  {
    id: 14,
    categoryName: "Laptop - Máy Vi Tính - Linh kiện",
  },
  {
    id: 15,
    categoryName: "Nhà Cửa - Đời Sống",
  },
  {
    id: 16,
    categoryName: "Cross Border - Hàng Quốc Tế",
  },
  {
    id: 17,
    categoryName: "Bách Hóa Online",
  },
  {
    id: 18,
    categoryName: "Thiết Bị Số - Phụ Kiện Số",
  },
  {
    id: 19,
    categoryName: "Voucher - Dịch vụ",
  },
  {
    id: 20,
    categoryName: "Ô Tô - Xe Máy - Xe Đạp",
  },
  {
    id: 21,
    categoryName: "Nhà Sách Tiki",
  },
  {
    id: 22,
    categoryName: "Điện Tử - Điện Lạnh",
  },
  {
    id: 23,
    categoryName: "Thể Thao - Dã Ngoại",
  },
  {
    id: 24,
    categoryName: "Máy Ảnh - Máy Quay Phim",
  },
  {
    id: 25,
    categoryName: "Sản phẩm Tài chính - Bảo hiểm",
  },
];
// console.log(typeof createSlug(categories[0].categoryName));

const formatMoney = (number) => {
  let formattedString = number?.toFixed(2)?.replace(".", "").split(" ")[0];
  console.log(formattedString);
  formattedString = formattedString?.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  console.log(typeof number);
  return formattedString;
};
console.log(formatMoney(2410332));

// const createSlugCategories = (name) => {
//   const array = [];
//   for (let category of categories) {
//     if (category.categoryName === name) {
//       array.push(createSlug(category.categoryName));
//     }
//   }
//   return array;
// };
// console.log(createSlugCategories(categories[0].categoryName)[0]);
// module.exports = categories;

// const thumb = [
//   "https://salt.tikicdn.com/cache/750x750/ts/product/e5/da/f1/034ab44d25534259f38aa90a3635157e.jpg 1x, https://salt.tikicdn.com/cache/750x750/ts/product/e5/da/f1/034ab44d25534259f38aa90a3635157e.jpg 2x",
// ];

// const sliceThumb = thumb[0];
// console.log(sliceThumb.split(",")[0].split(" ")[0]);
