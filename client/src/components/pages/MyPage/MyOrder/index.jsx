import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { apiGetProductById } from "../../../../services/productService";
import { formatMoney, totalPrice } from "../../../../utils/helper";
const MyOrder = () => {
  const currentData = useSelector((state) => state.user.currentData?.cart);
  const [orderDetails, setOrderDetails] = useState(null);

  const findQuantityByProductId = (productId) => {
    const cartItem = currentData.find((item) => item.product === productId);
    return cartItem ? cartItem.quantity : 0;
  };

  useEffect(() => {
    // Hàm để lấy thông tin chi tiết sản phẩm từ API
    const fetchProductDetails = async () => {
      const details = await Promise.all(
        currentData?.map(async (cartItem) => {
          const response = await apiGetProductById(cartItem.product);
          return response.productDatas; // Giả sử API trả về dữ liệu sản phẩm ở thuộc tính "data"
        })
      );
      setOrderDetails(details);
    };

    // Gọi hàm để lấy thông tin sản phẩm khi component được mount
    fetchProductDetails();
  }, [currentData]);
  return (
    <div>
      <h3 className="text-2xl">Đơn hàng của bạn</h3>
      <ul>
        <div className="flex flex-col gap-6 mb-[100px]">
          {orderDetails?.map((product, index) => (
            <div className="bg-white flex-col w-100% h-100% " key={index}>
              <div className="flex p-4 border-b border-solid border-stone-400 w-100% justify-between">
                <div className="flex">
                  <div
                    className="flex-shrink-0 w-[80px] h-[80px] rounded-[4px] border border-gray-300 bg-no-repeat bg-center bg-cover relative"
                    style={{
                      backgroundImage: `url(${
                        product?.thumb?.[0]?.split(",")[0].split(" ")[0]
                      })`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <span className="text-xs leading-4 font-normal text-gray-500 text-center absolute w-[28px] h-[28px] bg-gray-200 flex justify-center items-center right-0 bottom-0 rounded-tl-2xl">
                      x{findQuantityByProductId(product._id)}
                    </span>
                  </div>
                  <div className="flex flex-col ml-[12px] mr[12px]">
                    <p className="">{product.title}</p>
                    <div className="flex">
                      <img
                        className="w-4 h-4 mt-1 mr-[6px]"
                        src="https://frontend.tikicdn.com/_desktop-next/static/img/account/store.png"
                      ></img>
                      <span>{product.brand}</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end min-w-[120px]">
                  <span className="text-black font-normal">
                    {formatMoney(product.prices)}
                    <sup>đ</sup>
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end w-100% mt-3 mr-3">
                <div className="flex text-base mb-3">
                  <div className="font-light text-slate-400 mr-[8px]">
                    Tổng tiền
                  </div>

                  <div className="font-normal text-slate-500">
                    {formatMoney(
                      totalPrice(
                        findQuantityByProductId(product._id),
                        product.prices
                      )
                    )}
                    <sup>đ</sup>
                  </div>
                </div>
                <div className="flex justify-between ">
                  <div className="flex items-center justify-center h-9 px-2 py-3 rounded text-xs text-cyan-500 ml-2 cursor-pointer box-border">
                    Xem chi tiết
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default MyOrder;
