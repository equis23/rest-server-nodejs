const { request, response } = require('express');
const createData = require('../helpers/data.helper');
const { isInteger } = require('../helpers/validate.helper');

const data = createData(10);

const getProducts = (req = request, res = response) => {
  const { limit = undefined } = req.query;
  if (isInteger(limit) && Number.parseInt(limit, 10) >= 0) {
    return res.json(data.slice(0, limit));
  }
  return res.json(data);
};

const getProduct = (req = request, res = response) => {
  let { id } = req.params;
  id = Number.parseInt(id, 10);
  if (id > data.length) {
    return res.json({ message: `Highest id is ${data.length}, you passed ${id}` });
  }
  return res.json(data[id - 1]);
};

module.exports = {
  getProducts,
  getProduct,
};
