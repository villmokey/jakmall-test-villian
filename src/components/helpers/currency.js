export const currencySeperator = (number) => {
  return new Intl.NumberFormat("ja-JP", { currency: "IDR" }).format(number);
};
