const Struct = require('./struct');
module.exports = function({syntax, gen, mapKey}) {
  return Struct(...arguments);
}