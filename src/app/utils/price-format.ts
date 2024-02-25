// global function that must have unit test

export const priceFormatter = (currency: string, price: number): string => {
  if (Number.isNaN(price)) {
    return `${currency}--`;
  }
  const locale = navigator.language;
  const digitFraction = 2;
  const formattedPrice = Number(price).toLocaleString(locale, {
    minimumFractionDigits: digitFraction,
    maximumFractionDigits: digitFraction,
  });
  return `${formattedPrice}${currency}`;
};
