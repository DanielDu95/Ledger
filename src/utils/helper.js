export const formatCurrency = (value) => {
  const baseValue = new Intl.NumberFormat("en", {
    style: "currency",
    currency: "CNY",
  }).format(value);
  if (value >= 0) return baseValue.slice(2);
  else return `-${baseValue.slice(3)}`;
};
