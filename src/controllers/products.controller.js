const { request, response } = require('express');

const getProducts = (req = request, res = response) => {
  console.log(req.query);
  res.json({ message: 'get products' });
};

module.exports = {
  getProducts,
};
