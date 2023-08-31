const add = (a, b) => {
  if (!isNaN(a) && !isNaN(b)) {
    if (a < 1 && b < 1) {
      return (a * 10 + b * 10) / 10;
    }
    return a + b;
  }
  return null;
};

const subtract = (a, b) => {
  if (!isNaN(a) && !isNaN(b)) {
    return a - b;
  }
  return null;
};

const multiply = (a, b) => {
  if (!isNaN(a) && !isNaN(b)) {
    return a * b;
  }
  return null;
};

const divide = (a, b) => {
  if (!isNaN(a) && !isNaN(b)) {
    return a / b;
  }
  return null;
};

const power = (a, b) => {
  if (!isNaN(a) && !isNaN(b)) {
    return a ** b;
  }
  return null;
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
};
