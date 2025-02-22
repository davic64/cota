const zero = (value: number) => {
  return value < 10 ? `0${value}` : value;
};

export const numberQuote = () => {
  const dateNow = new Date();
  const year = dateNow.getFullYear();
  const month = dateNow.getMonth();
  const day = dateNow.getDay();
  const seconds = dateNow.getSeconds();

  const number = `${year}${zero(month + 1)}${zero(day)}${zero(seconds)}`;
  return number;
};

export const formatNumber = (number: number) => {
  const fixedNumber = Number(number).toFixed(2);
  const [integerPart, decimalPart] = fixedNumber.split(".");
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `${formattedInteger}.${decimalPart}`;
};
