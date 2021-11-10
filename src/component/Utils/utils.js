function priceComma(config) {
  const a = Math.round(config)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return a;
}

export default priceComma;
