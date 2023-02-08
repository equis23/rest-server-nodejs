const { isInteger } = require('../helpers/validate.helper');

const validateId = (req, res, next) => {
  const { id } = req.params;
  if (!isInteger(id)) {
    return res.json({ message: 'id should be an integer number' });
  }
  if (isInteger(id) && Number.parseInt(id, 10) <= 0) {
    return res.json({ message: 'id should be an integer positive number' });
  }
  return next();
};

module.exports = {
  validateId,
};
