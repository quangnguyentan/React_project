import React, { useEffect, useState } from "react";
import icons from "../../../utils/icons";
import { Button } from "../../atoms";
import { Link, NavLink, useParams } from "react-router-dom";
import path from "../../../utils/path";
import {
  apiGetProduct,
  apiGetProductById,
} from "../../../services/productService";
import { formatMoney } from "../../../utils/helper";
import ClipLoader from "react-spinners/ClipLoader";
import { apiUpdateCart } from "../../../services/userService";
import { useDispatch, useSelector } from "react-redux";
import { getCurrent } from "../../../stores/actions/userAction";
const { CiStar, GoPlus, FiMinus } = icons;
const ProductCard = () => {
  const [product, setProduct] = useState(null);
  const [productCate, setProductCate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const { category, id, title } = useParams();
  const getProductById = async (id) => {
    const response = await apiGetProductById(id);
    if (response?.success) setProduct(response?.productDatas);
  };
  const fetchApiProduct = async () => {
    const response = await apiGetProduct({
      // page: Math.floor(Math.random(10) * 10) + 1,
      // page: Math.floor(Math.random(10) * 10) + 1,
      limit: 8,
      sort: "-prices",
      type: category,
    });
    if (response?.success) {
      setProductCate(response?.products);
    }
  };
  const renderColor = (type) => {
    const color = [];

    type?.map((variant) => {
      if (variant?.colorName === "Màu" || variant?.colorName === "Màu sắc") {
        variant.variants.map((el) => {
          if (el != null) {
            color.push(
              <span
                // className={({ isActive }) =>
                //   isActive
                //     ? "w-[120px] rounded-md active:rounded-md active:border-2 active:border-blue-500 flex h-[52px] items-center justify-center bg-gray-200 border"
                //     : " w-[120px] rounded-md flex h-[52px] items-center justify-center bg-gray-200 border"
                // }

                className="w-[143px] rounded-md flex h-[52px] items-center justify-center bg-gray-200 border active:border-blue-500"
              >
                {el}
              </span>
            );
          }
        });
      }
    });
    return color;
  };
  const { currentData } = useSelector((state) => state.user);
  const handleClickOptions = async (flag) => {
    if (flag === "CART") {
      if (!currentData) throw new Error("Please login first");
      const initialCartQuantity = currentData?.cart?.quantity ?? 0;

      const updatedQuantity = quantity + initialCartQuantity;
      const response = await apiUpdateCart({
        pid: product?._id,
        quantity: updatedQuantity,
        color: product?.color[0],
      });

      if (response?.success) {
        dispatch(getCurrent());
      }
    }
  };
  useEffect(() => {
    setLoading(true);
    getProductById(id) && fetchApiProduct();

    setTimeout(() => {
      setLoading(false);
    }, 2500);
    window.scrollTo(0, 0);
  }, [category, id, title]);
  console.log(product);
  // const handleQuantity = (type) => {
  //   if (type === "increase") {
  //     setQuantity(quantity + 1);
  //   } else {
  //     if (quantity === 1) {
  //       return;
  //     } else {
  //       setQuantity(quantity - 1);
  //     }
  //   }
  // };
  const handleQuantity = (type) => {
    if (type === "increase") {
      setQuantity((prevQuantity) => prevQuantity + 1);
    } else {
      if (quantity > 1) {
        setQuantity((prevQuantity) => prevQuantity - 1);
      }
    }
  };
  // const updatedPrice = price.reduce((total, currentValue, index, arr) => {
  //   const x = total * currentValue;
  //   setPrice(x);
  //   return x;
  // }, quantity);
  // console.log(updatedPrice);
  return (
    <>
      {loading ? (
        <div className="w-full h-[200px] flex items-center justify-center">
          <ClipLoader
            loading={loading}
            size={60}
            color={"#3644d6"}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="w-main flex flex-col  ">
          <div className="w-full flex">
            <div className="ml-4 w-[70%] flex flex-col gap-4 ">
              <div className="flex gap-2 w-full">
                <div className="w-[50%] m-4 bg-white rounded-xl ">
                  <div className="w-[368px] border m-6 rounded-xl h-[360px]">
                    <img
                      src={product?.thumb?.[0]?.split(",")[0].split(" ")[0]}
                      alt="thumb"
                    />
                  </div>
                  <div className="m-6 w-full flex gap-2">
                    {product?.images?.map((el) => (
                      <div
                        key={el?._id}
                        className="w-[53px] h-[53px] border rounded-lg"
                      >
                        <img
                          className="w-[38px] h-[38px] text-center mx-2 my-2 "
                          src={el?.split(",")[0].split(" ")[0]}
                          alt=""
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-[43%] rounded-xl flex-col my-4  bg-white">
                  <div className="flex p-4 pb-1 items-center gap-2">
                    <img
                      className="w-[89px] h-[20px]"
                      src="https://salt.tikicdn.com/ts/upload/d7/56/04/b93b8c666e13f49971483596ef14800f.png"
                      alt=""
                    />

                    <p className="font-normal text-sm">
                      Thương hiệu:
                      <Link to={product?.brandLink} className="">
                        <span className="text-blue-700 cursor-pointer">
                          {product?.brand}
                        </span>
                      </Link>
                    </p>
                  </div>
                  <div className="px-4 flex flex-col gap-2">
                    <h3 className="font-medium text-xl">{product?.title}</h3>
                    <div className="flex items-center gap-2 text-sm ">
                      <div className="flex items-center gap-1 ">
                        <span className="font-medium">4.8</span>
                        <CiStar color="yellow" />
                      </div>
                      <span className="text-gray-400">(30)</span>
                      <div className="w-[1px] h-[12px] bg-gray-300 mx-[-1px] mt-[2px]"></div>
                      <span className="text-gray-400">
                        Đã bán {product?.sold}
                      </span>
                    </div>
                    <div className="font-semibold text-2xl">
                      {formatMoney(product?.prices)}
                      <sup>đ</sup>
                    </div>
                  </div>
                  <div className="w-[330px] p-4 gap-4 flex flex-col h-[141px]">
                    <h3 className="font-semibold text-sm">Màu sắc</h3>
                    <span className="flex  gap-2  flex-wrap  ">
                      {renderColor(product?.variants)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-[96%] m-4 bg-white rounded-lg">
                <div className="p-4">
                  <h3>Khách hàng đánh giá</h3>
                  <div className="my-2">
                    <span className="">Tổng quan</span>
                  </div>

                  <div className="flex flex-col gap-1 mb-2">
                    <div className="flex items-center gap-4">
                      <span>4.8</span>
                      <CiStar />
                    </div>
                    <span>(9) đánh giá</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex">
                      <CiStar />
                      <CiStar />
                      <CiStar />
                      <CiStar />
                      <CiStar />
                    </div>
                    <div className="flex">
                      <CiStar />
                      <CiStar />
                      <CiStar />
                      <CiStar />
                      <CiStar />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[28%] flex flex-col m-4 ml-0  gap-2">
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
                <div className="flex flex-col  gap-2">
                  <span className="font-medium">Số lượng</span>
                  <div className="flex items-center gap-2">
                    <div className="w-[33px] h-[33px] rounded-lg border ">
                      <button
                        onClick={() => handleQuantity("reduce")}
                        className="p-2"
                      >
                        <FiMinus
                          className={
                            quantity === 1 ? "text-gray-200" : "text-gray-500"
                          }
                        />
                      </button>
                    </div>
                    <div className="w-38px] h-[32px] rounded-lg border ">
                      <span className="p-4">{quantity}</span>
                    </div>
                    <div className="w-[34px] h-[34px] rounded-lg border ">
                      <button
                        className="p-2"
                        onClick={() => handleQuantity("increase")}
                      >
                        <GoPlus className="text-gray-700" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-medium">Tạm tính</span>
                  <div className="flex font-semibold text-2xl">
                    {formatMoney(product?.prices * quantity)}
                    <sub className="">đ</sub>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Button
                    name="Mua ngay"
                    fw
                    handleOnclick={() => handleClickOptions("BUY")}
                  />
                  <Button
                    style={`w-full px-4 py-2 rounded-md border  border-blue-500 text-blue-500 bg-white`}
                    name="Thêm vào giỏ"
                    handleOnclick={() => handleClickOptions("CART")}
                  />
                </div>
              </div>
              <div className="w-[360px] h-[120px]">
                <img
                  className="rounded-xl"
                  src="https://salt.tikicdn.com/ts/tka/1f/10/e6/5f2bc6b51044a22e322810a07cdf7b28.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="m-4 flex ">
            <div className="bg-white w-full p-4 rounded-xl flex flex-col gap-4 ">
              <h3 className="font-medium">Sản phẩm tương tự</h3>
              <div className="flex gap-2">
                {productCate?.map((el) => (
                  <div className="flex gap-2">
                    <NavLink to={`/${el?.type}/${el?._id}/${el?.slug}`}>
                      <div className="w-[142px]  hover:rounded-lg h-[240px] hover:bg-gray-100 cursor-pointer flex flex-col gap-2">
                        <img
                          className="rounded-t-lg w-full h-[148px]"
                          src={el.thumb?.[0]?.split(",")[0].split(" ")[0]}
                          alt="home_product"
                        />
                        <div className="px-2 flex flex-col w-full h-[80px]">
                          <p className="text-xs font-light h-[36px] text-gray-800 overflow-hidden break-words whitespace-break-spaces ">
                            {el?.title}
                          </p>
                          <span className="">
                            <CiStar color="yellow" size={12} />
                          </span>
                          <div className="flex">
                            <div className="font-medium">
                              {formatMoney(product?.prices)}
                            </div>
                            <sup className="top-[0.5em]">đ</sup>
                          </div>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
