const color = (initialValue) => {
  return console.log(initialValue);
};

const arrColor = (value1, value2, value3) => {
  let colorArrString = [];
  colorArrString.push(value1, value2, value3);
  return colorArrString;
};

const arrColorLength = (value) => {
  return value.length;
};

const getColorLength = (arr, color) => {
  const arrColor = arr.filter((c) => c.includes(color));\

  return arrColor
};

module.exports = { color, arrColor, arrColorLength };
