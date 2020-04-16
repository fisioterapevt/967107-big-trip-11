
const generateEvent = () => {
  return {
    type: `Bus`,
    city: `Paris`,
    startTime: `10:30`,
    endTime: `11:30`,
    duration: `30M`,
    price: `20`
  };
};

const generateEvents = (count) => {
  return new Array(count).fill(``).map(generateEvent);
};

const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

const getRandomDate = () => {
  const targetDate = new Date();
  const sign = Math.random() > 0.5 ? 1 : -1;
  const diffValue = sign * getRandomIntegerNumber(0, 30);

  targetDate.setDate(targetDate.getDate() + diffValue);

  return targetDate;
};

export {generateEvent, generateEvents, getRandomDate};
