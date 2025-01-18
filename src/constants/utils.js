export const formatAmount = (hex) => {
    const decimal = parseInt(hex, 16);
    return decimal.toString();
  };