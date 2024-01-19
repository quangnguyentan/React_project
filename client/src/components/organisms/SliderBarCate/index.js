import React, { useState } from "react";
import icons from "../../../utils/icons";
import { Input } from "../../atoms";
const { FaMapMarkerAlt, CiStar } = icons;

const data = [
  "Tã, Bỉm",
  "Dinh dưỡng cho bé",
  "Thực phẩm ăn dặm",
  "Dinh dưỡng cho mẹ",
  "Dinh dưỡng cho người lớn",
  "Đồ dùng cho bé",
  "Đồ chơi",
  "Chăm sóc mẹ mang thai, sau sinh",
  "Chuẩn bị mang thai",
  "Chăm sóc nhà cửa",
  "Thời Trang Cho Mẹ Và Bé",
];
const SliderCate = () => {
  const [prices, setPrices] = useState({
    from: "0",
    to: "0",
  });

  const handleValueChange = (e) => {
    console.log(e);
  };
  return (
    <div className="p-4 flex flex-col gap-4">
      {/* <div className="flex flex-col gap-1">
        <h3 className="text-sm font-medium">Danh Mục Sản Phẩm</h3>
        {data.map((el, index) => (
          <div key={index}>
            <span className="font-normal text-xs">{el}</span>
          </div>
        ))}
      </div> */}
      <div className="flex flex-col ">
        <h3 className=" flex items-center gap-2 font-normal text-sm text-gray-400">
          <span>
            <FaMapMarkerAlt />
          </span>
          <span>Giao đến : </span>
        </h3>
      </div>
      <div className="flex flex-col gap-2 ">
        <h3 className="text-sm font-medium">Đánh giá</h3>
        <div className="flex items-center text-sm gap-1">
          <span>
            <CiStar />
          </span>
          <span>từ 5 sao</span>
        </div>
        <div className="flex items-center text-sm gap-1">
          <span>
            <CiStar />
          </span>
          <span>từ 4 sao</span>
        </div>
        <div className="flex items-center text-sm gap-1">
          <span>
            <CiStar />
          </span>
          <span>từ 3 sao</span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium">Giá</h3>
        <div className="flex flex-col gap-2">
          <span className="cursor-pointer rounded-2xl bg-gray-200  p-1 px-2 w-fit   text-sm">
            60.000 → 160.000
          </span>
          <span className=" cursor-pointer rounded-2xl bg-gray-200 p-1 px-2 w-fit  text-sm">
            160.000 → 400.000
          </span>
          <span className=" cursor-pointer rounded-2xl bg-gray-200 p-1 px-2 w-fit  text-sm">
            400.000 → 600.000
          </span>
          <span className=" cursor-pointer rounded-2xl bg-gray-200 p-1 w-fit px-2 text-sm">
            Trên 600.000
          </span>
          <span className="text-xs text-gray-400">Chọn khoảng giá</span>
          <div className="flex gap-1">
            <input
              value={prices.from}
              // onChange={(e) =>
              //   setPrices((prev) => ({ ...prev, from: e.target.value }))
              // }
              type="number"
              className="border-black border rounded-md w-[77px] h-[30px] placeholder:text-black  px-2 outline-none "
            />
            <span>-</span>
            <input
              value={prices.to}
              // onChange={(e) =>
              //   setPrices((prev) => ({ ...prev, to: e.target.value }))
              // }
              type="number"
              className="border-black border rounded-md w-[77px] h-[30px] px-2 placeholder:text-black outline-none "
            />
          </div>
          <button className="border border-blue-400 rounded-md w-[168px] cursor-pointer">
            <span className="text-xs text-center text-blue-400">Áp dụng</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3>Thương hiệu</h3>
        <div className="flex gap-2">
          <input className="w-[16px]" type="checkbox" />
          <span className="text-sm">finish</span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3>Độ tuổi</h3>
        <div className="flex gap-2">
          <input className="w-[16px]" type="checkbox" />
          <span className="text-sm">2 - 4 tuổi</span>
        </div>
      </div>
    </div>
  );
};

export default SliderCate;
