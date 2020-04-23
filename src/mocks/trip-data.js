import {TYPE_EVENT, CITY_EVENT} from '../const';

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);

  return array[randomIndex];
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

const generateEvent = () => {
  return {
    type: getRandomArrayItem(TYPE_EVENT),
    city: getRandomArrayItem(CITY_EVENT),
    startTime: `10:30`,
    endTime: `11:30`,
    duration: `30M`,
    price: `20`
  };
};

const generateEvents = (count) => {
  return new Array(count).fill(``).map(generateEvent);
};

export {generateEvent, generateEvents, getRandomDate};
