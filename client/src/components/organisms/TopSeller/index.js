import React from "react";
const abc = [
  {
    x: "ac",
    b: ["abc", null, "npg"],
  },
  {
    x: "pnc",
    b: ["pnc", null, "mkz"],
  },
];
const TopSeller = () => {
  return (
    <div className="">
      {abc[1].b.map((el) =>
        el === null ? (
          ""
        ) : (
          <div>
            <span>{el}</span>
          </div>
        )
      )}
      {abc[0].b.map((el) =>
        el === null ? (
          ""
        ) : (
          <div>
            <span>{el}</span>
          </div>
        )
      )}
    </div>
  );
};

export default TopSeller;
