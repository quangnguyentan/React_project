import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { apiGetProduct } from "../../../services/productService";
import { removeAllCart } from "../../../stores/actions/cartAction";
import { productList } from "../../../utils/datatest";
import { formatMoney, renderStartFromNumber } from "../../../utils/helper";
import icons from "../../../utils/icons";
import Modal from "../../atoms/Modal";
import ItemProductCart from "./ItemProductCart";
import PriceProductCart from "./PriceProductCart";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const handleRemoveCartAll = () => {
    dispatch(removeAllCart());
  };

  const { CiStar, RiDeleteBin6Line, CiDeliveryTruck, GoPlus, FiMinus } = icons;

  const dispatch = useDispatch();
  const day = new Date();

  const { currentData } = useSelector((state) => state.user);
  const [products, setProducts] = useState(null);

  const getApiProduct = async () => {
    const response = await apiGetProduct({
      limit: 5,
      page: 3,
    });
    if (response?.success) setProducts(response?.products);
  };

  useEffect(() => {
    getApiProduct();
  }, []);

  return (
    <div className="w-main flex flex-col  ">
      <div className="w-full flex">
        <div className="ml-4 w-[70%] flex flex-col">
          <div className="flex flex-col w-full">
            <h3 className="text-xl font-medium p-4 pb-0 ">GIỎ HÀNG</h3>

            {cartItems.length > 0 ? (
              <div className="m-4 flex  ">
                <div className="bg-white w-full p-4 rounded-xl">
                  <div className="flex justify-between items-center ">
                    <div className="flex gap-2 w-[324px] ">
                      <input type="checkbox" />
                      <span>Tất cả </span>
                      <span>{cartItems.length} Sản phẩm</span>
                    </div>
                    <span>Đơn giá</span>
                    <span>Số lượng</span>
                    <span>Thành tiền</span>
                    <span>
                      <Modal
                        icon={<RiDeleteBin6Line></RiDeleteBin6Line>}
                        handleRemoveCartAll={handleRemoveCartAll}
                      ></Modal>
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="flex flex-col ml-[2%] w-[96%] h-[250px] items-center bg-white border rounded-lg justify-center">
                  <img
                    className="w-[10%] h-[50]"
                    src="https://salt.tikicdn.com/ts/upload/43/fd/59/6c0f335100e0d9fab8e8736d6d2fbcad.png"
                  ></img>
                  <p className="font-bold">Giỏ hàng trống</p>
                  <p>
                    Bạn tham khảo thêm các sản phẩm được Tiki gợi ý bên dưới
                    nhé!
                  </p>
                </div>
              </>
            )}
            {cartItems.length > 0 && (
              <ItemProductCart productList={productList}></ItemProductCart>
            )}
          </div>
          <div className="w-[96%] m-4 bg-white rounded-lg">
            <div className="m-4 flex ">
              <div className="bg-white w-full p-4 rounded-xl flex flex-col gap-4 ">
                <h3 className="font-medium">Sản phẩm mua kèm</h3>
                <div className="flex gap-2">
                  {products?.map((el) => (
                    <div key={el?._id} className="flex gap-2">
                      <Link to={`/${el?.type}/${el?._id}/${el?.slug}`}>
                        <div className="w-[142px]  hover:rounded-lg h-[240px] hover:bg-gray-100 cursor-pointer flex flex-col gap-2">
                          <img
                            className="rounded-t-lg w-full h-[148px]"
                            src={el?.thumb?.[0]?.split(",")[0].split(" ")[0]}
                            alt=""
                          />
                          <div className="px-2 flex flex-col w-full h-[80px]">
                            <p className="text-xs font-light h-[36px] text-gray-800 overflow-hidden break-words whitespace-break-spaces ">
                              {el?.title}
                            </p>
                            <span className="flex gap-1">
                              {renderStartFromNumber(Number(5))}
                            </span>
                            <div className="flex">
                              <div className="font-medium">
                                {formatMoney(el?.prices)}
                              </div>
                              <sup className="top-[0.5em]">đ</sup>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {cartItems.length > 0 && <PriceProductCart></PriceProductCart>}
      </div>
    </div>
  );
};

export default Cart;
