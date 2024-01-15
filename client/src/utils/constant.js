import home from "../assets/images/home.png";
import account from "../assets/images/Account.png";
import path from "./path";
import cart from "../assets/images/cart.png";
import icons from "./icons";
const {
  FaUser,
  IoMdNotifications,
  MdOutlinePayment,
  IoLocationSharp,
  MdWorkHistory,
} = icons;
export const navigation = [
  {
    id: 1,
    value: "Trang chủ",
    image: home,
    css: "hover:rounded-md flex gap-1 justify-center items-center w-[118px] h-[40px] ",
  },
  {
    id: 2,
    value: "Tài khoản",
    image: account,
    css: "hover:rounded-md flex gap-1 justify-center items-center w-[118px] h-[40px] ",
    path: `/${path.ACCOUNT}`,
    children: [
      {
        id: 3,
        value: "Thông tin tài khoản",
        path: `customer/${path.CUSTOMER}`,
      },
      {
        id: 4,
        value: "Đơn hàng của tôi",
        path: `sales/${path.ORDERHISTORY}`,
      },
      {
        id: 5,
        value: "Đăng xuất",
      },
    ],
  },
  {
    id: 6,
    image: cart,
    css: "hover:rounded-md flex gap-1 justify-center items-center w-[40px] h-[40px] before:h-[20px] before:bg-gray-300 before:mr-[20px] before:ml-[-20px] before:align-center ml-[30px] mr-[10px] before:pr-[1px]",
    path: `/${path.CHECKOUT}${path.CART}`,
  },
];
export const customerTabs = [
  {
    id: 1,
    value: "Thông tin tài khoản",
    icon: <FaUser size={16} />,
    path: path.CUSTOMER,
  },
  {
    id: 2,
    value: "Thông báo của tôi",
    icon: <IoMdNotifications size={16} />,
    path: path.NOFICATION,
  },
  {
    id: 3,
    value: "Quản lí đơn hàng",
    icon: <MdWorkHistory size={16} />,
    path: path.MYACCOUNT[1] ? path.ORDERHISTORY : "",
  },
  {
    id: 4,
    value: "Sổ địa chỉ",
    icon: <IoLocationSharp size={16} />,
    path: path.ADDRESS,
  },
  {
    id: 5,
    value: "Thông tin thanh toán",
    icon: <MdOutlinePayment size={16} />,
    path: path.PAYMENTCART,
  },
];
const style = `after:w-[50px] after:bottom-[-3px] relative after:absolute after:border after:border-b-4 after:block after:right-[50%] after:border-blue-500 font-normal after:rounded-xl after:translate-x-[50%]`;
const activeHover = `after:w-[50px] after:bottom-[-3px] relative after:absolute hover:after:border hover:after:border-b-4 after:block after:right-[50%] after:border-blue-500  after:rounded-xl after:translate-x-[50%]`;
export const prodcutDetailTabs = [
  {
    id: 1,
    value: "Phổ Biến",
    style: style,
    hover: activeHover,
    path: `/${path.DETAILS_PRODUCT}`,
  },
  {
    id: 2,
    value: "Bán Chạy",
    style: style,
    hover: activeHover,
    path: `/${path.DETAILS_PRODUCT}${path.TOP_SELLER}`,
  },
  {
    id: 3,
    value: "Hàng Mới",
    style: style,
    hover: activeHover,
    path: `/${path.DETAILS_PRODUCT}${path.TOP_SELLER}`,
  },
  {
    id: 4,
    value: "Giá Thấp Đến Cao",
    style: style,
    hover: activeHover,
    path: `/${path.DETAILS_PRODUCT}${path.TOP_SELLER}`,
  },
  {
    id: 5,
    value: "Giá Cao Đến Thấp",
    style: style,
    hover: activeHover,
    path: `/${path.DETAILS_PRODUCT}${path.TOP_SELLER}`,
  },
];
