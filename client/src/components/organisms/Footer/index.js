import React from "react";
import path from "../../../utils/path";
import footer1 from "../../../assets/images/logo_fotter1.png";
import footer2 from "../../../assets/images/logo_footer2.svg";
import footer3 from "../../../assets/images/logo_footer3.png";

const Footer = () => {
  return (
    <div className="overflow-x-hidden flex w-main px-4">
      <div className="flex flex-col flex-2 items-start justify-start gap-4">
        <h3 className="text-base font-medium">Hỗ trợ khách hàng</h3>
        <div className="flex flex-col text-xs gap-2 text-gray-600">
          <span className="flex flex-col ">
            <span className="flex gap-1">
              Hotline: <strong className="font-medium ">1900-6035</strong>
            </span>
            <span className="">(1000 đ/phút, 8-21h kể cả T7, CN)</span>
          </span>
          <span>Các câu hỏi thường gặp</span>
          <span>Gửi yêu cầu hỗ trợ</span>
          <span>Hướng dẫn đặt hàng</span>
          <span>Phương thức vận chuyển</span>
          <span>Chính sách đổi trả</span>
          <span>Hướng dẫn trả góp</span>
          <span>Chính sách hàng nhập khẩu</span>
          <span>Hỗ trợ khách hàng: hotro@tiki.vn</span>
          <span>Báo lỗi bảo mật: security@tiki.vn</span>
        </div>
      </div>
      <div className="flex flex-col flex-2 items-start justify-start gap-4">
        <h3 className="text-base font-medium">Về Tiki</h3>
        <div className="flex flex-col text-xs gap-2 text-gray-600">
          <span>Giới thiệu Tiki</span>

          <span>Tiki Blog</span>
          <span>Tuyển dụng</span>
          <span>Chính sách bảo mật thanh toán</span>
          <span>Chính sách bảo mật thông tin cá nhân</span>
          <span>Chính sách giải quyết khiếu nại</span>
          <span>Điều khoản sử dụng</span>
          <span>Giới thiệu Tiki Xu</span>
          <span>Gói hội viên VIP</span>
          <span>Tiếp thị liên kết cùng Tiki</span>
          <span>Bán hàng doanh nghiệp</span>
          <span>Điều kiện vận chuyển</span>
        </div>
      </div>
      <div className="flex flex-col flex-2 items-start justify-start gap-4">
        <h3 className="text-base font-medium">Hợp tác và liên kết</h3>
        <div className="flex flex-col text-xs gap-2 text-gray-600">
          <span>Quy chế hoạt động Sàn GDTMĐT</span>

          <span>Bán hàng cùng Tiki</span>
        </div>
        <div>
          <h3 className="text-base font-medium">Chứng nhận bởi</h3>
          <div className="w-[83px] h-[32px] flex gap-2">
            <img src={footer1} alt="" />
            <img src={footer2} className="w-[83px] h-[32px]" alt="" />
            <img src={footer3} alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-2 items-start justify-start">
        <h3>Hỗ trợ khách hàng</h3>
        <div className="flex flex-col">
          <span>Hotline: 1900-6035 (1000 đ/phút, 8-21h kể cả T7, CN)</span>
          <span>Các câu hỏi thường gặp</span>
          <span>Gửi yêu cầu hỗ trợ</span>
          <span>Hướng dẫn đặt hàng</span>
          <span>Phương thức vận chuyển</span>
          <span>Chính sách đổi trả</span>
          <span>Hướng dẫn trả góp</span>
          <span>Chính sách hàng nhập khẩu</span>
          <span>Hỗ trợ khách hàng: hotro@tiki.vn</span>
          <span>Báo lỗi bảo mật: security@tiki.vn</span>
        </div>
      </div>
      <div className="flex flex-col flex-2 items-start justify-start">
        <h3>Hỗ trợ khách hàng</h3>
        <div className="flex flex-col">
          <span>Hotline: 1900-6035 (1000 đ/phút, 8-21h kể cả T7, CN)</span>
          <span>Các câu hỏi thường gặp</span>
          <span>Gửi yêu cầu hỗ trợ</span>
          <span>Hướng dẫn đặt hàng</span>
          <span>Phương thức vận chuyển</span>
          <span>Chính sách đổi trả</span>
          <span>Hướng dẫn trả góp</span>
          <span>Chính sách hàng nhập khẩu</span>
          <span>Hỗ trợ khách hàng: hotro@tiki.vn</span>
          <span>Báo lỗi bảo mật: security@tiki.vn</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
