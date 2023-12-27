import React, { useEffect } from "react";

import { useSelector } from "react-redux";

const Account = () => {
  const { currentData } = useSelector((state) => state.user);
  return (
    <div className="">
      Thông tin tài khoản
      <div>
        <h3>Thông tin cá nhân</h3>
        {currentData && <p>{currentData?.fullname}</p>}
      </div>
    </div>
  );
};

export default Account;
