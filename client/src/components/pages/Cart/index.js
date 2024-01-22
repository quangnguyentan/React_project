import React, { useEffect, useState } from "react";
import { Button } from "../../atoms";
import { Link, Navigate } from "react-router-dom";
import path from "../../../utils/path";
import icons from "../../../utils/icons";
import { useDispatch, useSelector } from "react-redux";
import { getCurrent } from "../../../stores/actions/userAction";
import {
  apiGetProduct,
  apiGetProductById,
} from "../../../services/productService";
import { formatMoney } from "../../../utils/helper";
import { apiRemoveCart, apiUpdateCart } from "../../../services/userService";
const { CiStar, RiDeleteBin6Line, CiDeliveryTruck, GoPlus, FiMinus } = icons;
const Cart = () => {
  const dispatch = useDispatch();

  const { currentData } = useSelector((state) => state.user);
  const [products, setProducts] = useState(null);
  const [user, setUser] = useState([]);
  const getApiProduct = async () => {
    const response = await apiGetProduct({
      title: currentData?.cart[0]?.product?.title,
    });
    if (response?.success) setProducts(response?.products);
  };
  const handleRemoveProduct = async (id) => {
    const response = await apiRemoveCart(id);
    if (response?.success) dispatch(getCurrent());
    localStorage.removeItem(id);
  };
  useEffect(() => {
    getApiProduct();
  }, []);
  const getLocal = (id) => localStorage.getItem(id);
  const handleChange = (e) => {
    const { checked, id, name } = e.target;
    if (name === "all-checkbox") {
      const allUser = currentData?.cart?.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUser(allUser);
    } else {
      const findUser = currentData?.cart?.find((user) =>
        user?.product?._id === id ? { ...user, isChecked: checked } : user
      );
      setUser(findUser);
      localStorage.setItem(id, JSON.stringify(checked));
    }
  };

  const handleQuantity = async (id, type) => {
    let local = getLocal(id);

    const findProduct = currentData?.cart?.find((el) => el.product?._id === id);

    if (type === "increase" && findProduct) {
      const updatedQuantity = Number(local) + 1;
      localStorage.setItem(id, JSON.stringify(updatedQuantity));
      setTimeout(() => {
        findProduct.quantity = updatedQuantity;
        dispatch(getCurrent());
      }, 100);
    } else {
      if (type === "reduce" && findProduct) {
        const updatedQuantity = Number(local) - 1;
        localStorage.setItem(id, JSON.stringify(updatedQuantity));
        setTimeout(() => {
          findProduct.quantity = updatedQuantity;
          dispatch(getCurrent());
        }, 100);
      }
    }
  };

  return (
    <div className="w-main flex flex-col  ">
      <div className="w-full flex">
        <div className="ml-4 w-[70%] flex flex-col">
          <div className="flex flex-col w-full">
            <h3 className="text-xl font-medium p-4 pb-0 ">GIỎ HÀNG</h3>
            <div className="m-4 flex ">
              <div className="bg-white w-full p-4 rounded-xl">
                <div className="flex justify-between items-center ">
                  <div className="flex gap-2 w-[324px] ">
                    <input
                      type="checkbox"
                      name="all-checkbox"
                      // checked={getLocal(user)}
                      onChange={handleChange}
                    />
                    <span>Tất cả </span>
                    <span>(2 sản phẩm)</span>
                  </div>
                  <span>Đơn giá</span>
                  <span>Số lượng</span>
                  <span>Thành tiền</span>
                  <span>
                    <RiDeleteBin6Line />
                  </span>
                </div>
              </div>
            </div>
            {currentData?.cart &&
              currentData?.cart?.map((el) => (
                <div className="mx-4   flex " key={el._id}>
                  <div className="bg-white w-full p-4 rounded-xl">
                    <div className="flex justify-between items-center ">
                      <div className=" w-[324px] gap-2 flex ">
                        <input
                          type="checkbox"
                          id={el?._id}
                          // checked={Boolean(getLocal(el?._id))}
                          onChange={handleChange}
                        />

                        <div className="w-[80px] h-[80px]">
                          <img
                            src={
                              el?.product?.thumb?.[0]
                                ?.split(",")[0]
                                .split(" ")[0]
                            }
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col gap-1 w-[202px]">
                          <span className="overflow-ellipsis overflow-hidden text-sm font-normal">
                            {el?.product?.title}
                          </span>
                          <span className="text-xs text-gray-400">Màu đen</span>
                          <div className="flex gap-2 text-xs  font-normal">
                            <span className="w-[32px] h-[16px]">
                              {/* <CiDeliveryTruck className="w-full" /> */}
                              <img
                                src="https://salt.tikicdn.com/cache/w96/ts/tka/65/be/89/d0c3208134f19e4bab8b50d81b41933a.png"
                                alt=""
                              />
                            </span>
                            <span> Giao thứ 2, 15/01</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        {formatMoney(el?.product?.prices)}
                        <sub>₫</sub>
                      </div>
                      <div>
                        <div className="flex">
                          <div className="w-[23px] h-[24px] rounded-l-sm border pl-[2px] ">
                            <button
                              className=""
                              onClick={() =>
                                handleQuantity(el?.product?._id, "reduce")
                              }
                            >
                              <FiMinus />
                            </button>
                          </div>
                          <div className="w-[32px] h-[24px]  border">
                            <span id="product" className=" p-3">
                              {getLocal(el?.product?._id)}
                            </span>
                          </div>
                          <div className="w-[23px] h-[24px] rounded-r-sm border pl-[2px] ">
                            <button
                              className=""
                              onClick={() =>
                                handleQuantity(el?.product?._id, "increase")
                              }
                            >
                              <GoPlus />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        {formatMoney(el?.product?.prices * el?.quantity)}
                        <sub>₫</sub>
                      </div>
                      <span
                        onClick={() => handleRemoveProduct(el?.product?._id)}
                      >
                        <RiDeleteBin6Line />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="w-[96%] m-4 bg-white rounded-lg">
            <div className="m-4 flex ">
              <div className="bg-white w-full p-4 rounded-xl flex flex-col gap-4 ">
                <h3 className="font-medium">Sản phẩm mua kèm</h3>
                <div className="flex gap-2">
                  <div className="flex gap-2">
                    <Link to={`/${path.PRODUCT_INFO}`}>
                      <div className="w-[142px]  hover:rounded-lg h-[240px] hover:bg-gray-100 cursor-pointer flex flex-col gap-2">
                        <img
                          className="rounded-t-lg w-full h-[148px]"
                          src="https://salt.tikicdn.com/cache/280x280/ts/product/5d/d0/f6/a00d7cdc0d8c56556263458b87f94e81.jpg.webp"
                          alt="home_product"
                        />
                        <div className="px-2 flex flex-col w-full h-[80px]">
                          <p className="text-xs font-light h-[36px] text-gray-800 overflow-hidden break-words whitespace-break-spaces ">
                            Ba lô nam thời trang cao cấp phong cách mới 15,6
                            acasdsdadsadasddadas
                          </p>
                          <span className="">
                            <CiStar color="yellow" size={12} />
                          </span>
                          <div className="flex">
                            <div className="font-medium">441.000</div>
                            <sup className="top-[0.5em]">đ</sup>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="flex gap-2">
                    <Link to={`/${path.PRODUCT_INFO}`}>
                      <div className="w-[142px]  hover:rounded-lg h-[240px] hover:bg-gray-100 cursor-pointer flex flex-col gap-2">
                        <img
                          className="rounded-t-lg w-full h-[148px]"
                          src="https://salt.tikicdn.com/cache/280x280/ts/product/5d/d0/f6/a00d7cdc0d8c56556263458b87f94e81.jpg.webp"
                          alt="home_product"
                        />
                        <div className="px-2 flex flex-col w-full h-[80px]">
                          <p className="text-xs font-light h-[36px] text-gray-800 overflow-hidden break-words whitespace-break-spaces ">
                            Ba lô nam thời trang cao cấp phong cách mới 15,6
                          </p>
                          <span className="">
                            <CiStar color="yellow" size={12} />
                          </span>
                          <div className="flex">
                            <div className="font-medium">441.000</div>
                            <sup className="top-[0.5em]">đ</sup>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[28%] flex flex-col m-4 ml-0 gap-2">
          <div className=" bg-white  rounded-xl p-4 flex-col flex gap-4">
            <div className="flex items-center">
              <div className="w-[40px] h-[40px]">
                <img
                  src="https://vcdn.tikicdn.com/cache/w100/ts/seller/81/27/4e/bac5296e1c315488f3e4ba3d61c4581c.jpg.webp"
                  alt=""
                />
              </div>
              <div>
                <a href="https://tiki.vn/cua-hang/gu-bag-official-store?source_screen=product_detail&source_engine=organic">
                  <span className="font-medium text-base">
                    Gu Bag Official Store
                  </span>
                </a>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium">4.6</span>
                  <CiStar fill="black" color="black" />
                  <span className="font-medium text-gray-400">
                    (3.0k+ đánh giá)
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img
                className="w-[40px] h-[40px]"
                src="https://salt.tikicdn.com/cache/280x280/ts/product/d0/1c/e3/cdbf0218b586a07a659b6f63f380a258.jpg.webp"
                alt=""
              />
              <span className="font-normal text-base">Màu ghi</span>
            </div>
          </div>
          <div className="bg-white  rounded-xl p-4 flex-col flex gap-4">
            {/* <div className="flex justify-between text-gray-400">
              <span className="">Tạm tính</span>
              <div className="flex  text-black">
                224.100 <sub>₫</sub>
              </div>
            </div> */}

            <div className="flex justify-between text-gray-400">
              <span>Tổng tiền</span>
              <div className="flex flex-col ">
                <div className="flex justify-end text-red-500  text-2xl">
                  {currentData?.cart.length > 0
                    ? formatMoney(
                        currentData?.cart?.reduce(
                          (sum, el) =>
                            sum + el?.quantity * Number(el?.product?.prices),
                          0
                        )
                      )
                    : 0}
                  <sub className="">đ</sub>
                </div>
                <span className="font-light text-xs">
                  (Đã bao gồm VAT nếu có)
                </span>
              </div>
            </div>
          </div>
          <Link to={`/${path.CHECKOUT}${path.PAYMENT}`}>
            <div className="flex flex-col gap-2">
              <Button name="Mua ngay (1)" fw />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
