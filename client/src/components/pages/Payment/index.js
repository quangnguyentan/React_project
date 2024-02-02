import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import path from "../../../utils/path";
import { Footer, PayPal } from "../../organisms";
import logo from "../../../assets/images/logo.png";
import contact from "../../../assets/images/contact.png";
import icons from "../../../utils/icons";
import {
  vn_pay,
  viettel_money,
  payment_hand,
  momo,
  zalo_pay,
} from "../../atoms/images";
import { Button } from "../../atoms";
import { useDispatch, useSelector } from "react-redux";
import { formatMoney, totalPrice } from "../../../utils/helper";
import { postDataCart } from "../../../services/userService";
import { apiGetProductById } from "../../../services/productService";
import { removeAllCart } from "../../../stores/actions/cartAction";

const { GiShop } = icons;
const Payment = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get("productId");
  const quantity = queryParams.get("quantity");
  const [product, setProduct] = useState(null);
  const [checkproductId, setCheckproductId] = useState(false);
  const { cartItems, totalCart } = cart;
  const { price } = cartItems;
  const { currentData } = useSelector((state) => state.user);
  const placeOderKey = true;
  const getProductById = async (productId) => {
    const response = await apiGetProductById(productId);
    if (response?.success) setProduct(response?.productDatas);
    setCheckproductId(true);
  };
  useEffect(() => {
    if (productId) {
      getProductById(productId);
    }
  }, []);
  const handlePlaceOrder = async () => {
    try {
      let cartData;
      if (productId) {
        // Nếu có productId, tạo dữ liệu đơn hàng từ sản phẩm đó
        cartData = [
          {
            product: productId,
            quantity: quantity,
            color: "black",
          },
        ];
      } else {
        // Nếu không có productId, tạo dữ liệu đơn hàng từ các sản phẩm trong cartItems
        cartData = cartItems.map((product) => ({
          product: product.id,
          quantity: product.quantities,
          color: "black",
        }));
      }

      const response = await postDataCart(currentData?.id, cartData);
      dispatch(removeAllCart());
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };
  return (
    <>
      <div className="flex-1 flex justify-end">
        <img src={contact} className=" w-[185px] h-[56px]" alt="" />
      </div>
      <div className="flex w-full">
        <div className="w-[70%] mx-4 mt-8 mb-4 flex flex-col gap-4">
          <div className="bg-white rounded-md p-4 flex flex-col gap-8">
            <h3 className="font-bold text-lg">Thông tin đơn hàng</h3>
            {productId ? (
              <div className="w-full h-[154px] border rounded-lg px-4 relative py-8">
                <span className="absolute top-0 flex items-center gap-1 font-normal px-2 left-3 translate-y-[-50%] bg-white text-sm text-green-600">
                  <GiShop />
                  Gói : Giao thứ 4, trước 19h, 17/01
                </span>
                <div className="w-[60%] flex flex-col gap-2">
                  <div className="flex gap-8 justify-between">
                    <span className="text-xs">GIAO TIẾT KIỆM</span>
                    <div className="flex gap-1 items-center">
                      <span className="text-sm line-through text-gray-500">
                        42.000 ₫
                      </span>
                      <span className="font-medium text-green-600">
                        MIỄN PHÍ
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2 ">
                    <img
                      className="w-[48px] h-[48px]"
                      src={product?.thumb?.[0]?.split(",")[0].split(" ")[0]}
                      alt=""
                    />
                    <div className="flex flex-col gap-1 text-sm text-gray-500">
                      <span className="overflow-hidden overflow-ellipsis line-clamp-1 ">
                        {product?.title}
                      </span>
                      <div className="flex justify-between">
                        <span>SL: x{quantity}</span>
                        <span>
                          {formatMoney(totalPrice(quantity, product?.prices))} ₫
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              cartItems.map((product, index) => (
                <div className="w-full h-[154px] border rounded-lg px-4 relative py-8">
                  <span className="absolute top-0 flex items-center gap-1 font-normal px-2 left-3 translate-y-[-50%] bg-white text-sm text-green-600">
                    <GiShop />
                    Gói {index + 1}: Giao thứ 4, trước 19h, 17/01
                  </span>
                  <div className="w-[60%] flex flex-col gap-2">
                    <div className="flex gap-8 justify-between">
                      <span className="text-xs">GIAO TIẾT KIỆM</span>
                      <div className="flex gap-1 items-center">
                        <span className="text-sm line-through text-gray-500">
                          42.000 ₫
                        </span>
                        <span className="font-medium text-green-600">
                          MIỄN PHÍ
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2 ">
                      <img
                        className="w-[48px] h-[48px]"
                        src={product.img}
                        alt=""
                      />
                      <div className="flex flex-col gap-1 text-sm text-gray-500">
                        <span className="overflow-hidden overflow-ellipsis line-clamp-1 ">
                          {product.title}
                        </span>
                        <div className="flex justify-between">
                          <span>SL: x{product.quantities}</span>
                          <span>
                            {formatMoney(
                              totalPrice(product.quantities, product.price)
                            )}{" "}
                            ₫
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="bg-white rounded-md p-4 flex flex-col gap-8">
            <h3>Chọn hình thức thanh toán</h3>
            <div className="flex flex-col gap-4">
              <div className="w-full flex gap-2 items-center h-[64px] ">
                <input type="radio" className="w-[18px] h-[18px]" />
                <img src={payment_hand} className="w-[32px] h-[32px]" alt="" />
                <span>Thanh toán tiền mặt khi nhận hàng</span>
              </div>
              <div className="w-full flex gap-2 items-center h-[64px]">
                <input type="radio" className="w-[18px] h-[18px]" />
                <img src={viettel_money} className="w-[32px] h-[32px]" alt="" />
                <span>Thanh toán bằng ví Viettel Money</span>
              </div>
              <div className="w-full flex gap-2 items-center h-[64px]">
                <input type="radio" className="w-[18px] h-[18px]" />
                <img src={momo} className="w-[32px] h-[32px]" alt="" />
                <span>Thanh toán bằng ví MoMo</span>
              </div>
              <div className="w-full flex gap-2 items-center h-[64px]">
                <input type="radio" className="w-[18px] h-[18px]" />
                <img src={zalo_pay} className="w-[32px] h-[32px]" alt="" />
                <span>Thanh toán bằng ví ZaloPay</span>
              </div>
              <div className="w-full flex gap-2 items-center h-[64px]">
                <input type="radio" className="w-[18px] h-[18px]" />
                <img src={vn_pay} className="w-[32px] h-[32px]" alt="" />
                <div className="flex flex-col ">
                  <span>Thanh toán bằng VNPAY</span>
                  Quét Mã QR từ ứng dụng ngân hàng
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[25%] mx-4 mt-8 mb-4 flex flex-col gap-4">
          <div className="bg-white rounded-md p-4">
            <h3 className="font-normal text-lg text-gray-400">Giao tới</h3>
            <div className="flex gap-2 items-center font-medium">
              <span>{currentData?.fullname}</span>
              <p className=" w-[1px] bg-black h-[20px]"></p>
              <span>0938915502</span>
            </div>
            <div className="">
              <span className="mr-[5px] text-xs rounded-[100%] border bg-green-100 h-[18px] text-center px-1 text-green-600">
                Nhà
              </span>
              <span className="text-gray-500 ">
                01 văn cận, Phường Khuê Trung, Quận Cẩm Lệ, Đà Nẵng
              </span>
            </div>
          </div>
          <div className="bg-white rounded-md p-4">
            <div className="flex justify-between w-full h-[52px] border-b-[1px]">
              <h3 className="font-medium text-lg ">Đơn hàng</h3>
              <Link to={`/${path.CHECKOUT}${path.CART}`}>
                <span className="text-blue-600">Thay đổi</span>
              </Link>
            </div>
            <div className=" w-full h-[108px] flex flex-col text-sm text-gray-500 gap-1 my-2 border-b-[1px]">
              <div className="flex justify-between">
                <span>Tạm tính</span>
                <span>441.000đ</span>
              </div>
              <div className="flex justify-between">
                <span> Phí vận chuyển</span>
                <span> 42.000đ</span>
              </div>
              <div className="flex justify-between">
                <span> Khuyến mãi vận chuyển </span>
                <span className="text-green-400"> -42.000đ</span>
              </div>
              <div className="flex justify-between">
                <span> Giảm giá </span>
                <span className="text-green-400"> -25.000đ</span>
              </div>
            </div>
            <div className=" w-full h-[66px] flex flex-col gap-1 my-2 ">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Tổng tiền</span>
                <span className="text-xl font-medium text-red-500">
                  {!productId
                    ? formatMoney(totalCart)
                    : formatMoney(totalPrice(quantity, product?.prices))}
                  ₫
                </span>
              </div>
            </div>
            <Link to={`/${path.HOME}`}>
              <div className=" w-full h-[60px] ">
                <Button
                  name="Đặt hàng"
                  fw
                  placeOderKey={placeOderKey}
                  handlePlaceOrder={handlePlaceOrder}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 text-xs mt-12 p-4 flex flex-col items-start justify-start w-full gap-4 text-gray-500">
        <div className="flex flex-col gap-1">
          <span>
            Bằng việc tiến hành Đặt Mua, bạn đồng ý với các Điều kiện Giao dịch
            chung:
          </span>
          <div className="flex gap-4 items-center text-black">
            <span>Quy chế hoạt động</span>
            <span className="w-[1px] h-[15px] bg-gray-300"></span>
            <span>Chính sách giải quyết khiếu nại</span>
            <span className="w-[1px] h-[15px] bg-gray-300"></span>
            <span>Chính sách bảo hành</span>
            <span className="w-[1px] h-[15px] bg-gray-300"></span>
            <span>Chính sách bảo mật thanh toán</span>
            <span className="w-[1px] h-[15px] bg-gray-300"></span>
            <span>Chính sách bảo mật thông tin cá nhân</span>
          </div>
        </div>
        <div className="bg-gray-200 text-xs mt-12 p-4 flex flex-col items-start justify-start w-full gap-4 text-gray-500">
          <div className="flex flex-col gap-1">
            <span>
              Bằng việc tiến hành Đặt Mua, bạn đồng ý với các Điều kiện Giao
              dịch chung:
            </span>
            <div className="flex gap-4 items-center text-black">
              <span>Quy chế hoạt động</span>
              <span className="w-[1px] h-[15px] bg-gray-300"></span>
              <span>Chính sách giải quyết khiếu nại</span>
              <span className="w-[1px] h-[15px] bg-gray-300"></span>
              <span>Chính sách bảo hành</span>
              <span className="w-[1px] h-[15px] bg-gray-300"></span>
              <span>Chính sách bảo mật thanh toán</span>
              <span className="w-[1px] h-[15px] bg-gray-300"></span>
              <span>Chính sách bảo mật thông tin cá nhân</span>
            </div>
          </div>

          <div>
            <span>© 2019 - Bản quyền của Công Ty Cổ Phần Ti Ki - Tiki.vn</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
