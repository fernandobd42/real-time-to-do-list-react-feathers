const item = require('./item/item.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(item);
};
