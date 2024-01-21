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
