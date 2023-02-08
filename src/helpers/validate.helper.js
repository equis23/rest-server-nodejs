const isInteger = (value) => !Number.isNaN(Number.parseInt(value, 10));

module.exports = {
  isInteger,
};
