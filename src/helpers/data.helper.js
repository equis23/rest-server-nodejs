/* eslint-disable import/no-extraneous-dependencies */
const { faker } = require('@faker-js/faker');

const createData = (limit) => {
  const data = [];
  let count = 0;
  while (count < limit) {
    data.push({
      id: count + 1,
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: Number.parseFloat(faker.commerce.price()),
      qty: Number.parseInt(faker.random.numeric(), 10),
    });
    count += 1;
  }
  return data;
};

module.exports = createData;
