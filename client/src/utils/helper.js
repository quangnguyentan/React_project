import icons from "./icons";
const { AiFillStar, AiOutlineStar } = icons;
export const createSlug = (string) =>
  string
    .normalize("NFD")
    .replace(/Đ/g, "D")
    .replace(/đ/g, "d")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s-|&/g, "")
    .replace(/\s+/g, " ")
    .split(" ")
    .join("-");

export const formatMoney = (number) => {
  let formattedString = number?.toFixed(2)?.replace(".", "")?.split(" ")[0];
  formattedString = formattedString?.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return formattedString;
};

export const renderColor = (type) => {
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

export const renderStartFromNumber = (number, size) => {
  if (!Number(number)) return;
  const stars = [];
  number = Math.round(number);
  for (let i = 0; i < +number; i++)
    stars.push(<AiFillStar color="orange" size={size || 16} />);
  for (let i = 5; i > +number; i--)
    stars.push(<AiOutlineStar color="orange" size={size || 16} />);

  return stars;
};
