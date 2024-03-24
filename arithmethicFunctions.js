function add(value_1, value_2) {
  let result = parseInt(value_1) + parseInt(value_2);
  return result;
}

function sub(value_1, value_2) {
  let result = parseInt(value_1) - parseInt(value_2);
  return result;
}

function mul(value_1, value_2) {
  let result = parseInt(value_1) * parseInt(value_2);
  return result;
}

function div(value_1, value_2) {
  let result = parseInt(value_1) / parseInt(value_2);
  return result;
}

module.exports = { add, sub, mul, div };
