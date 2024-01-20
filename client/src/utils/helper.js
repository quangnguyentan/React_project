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
export const totalPrice = (price, quantity) => {
  let total = price * quantity;
  return total;
};
export const calculateTotal = (cartItems) => {
  let total = 0;
  cartItems.forEach((product) => {
    total += totalPrice(product.price, product.quantities);
  });
  return total;
};
