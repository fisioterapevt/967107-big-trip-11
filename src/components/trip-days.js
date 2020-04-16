
import {generateEvents, getRandomDate} from '../mocks/trip-data';
import {createTripEvent} from './trip-event';

const MONTH_NAMES = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`,
];

const createTripDay = (points) => {
  const counter = 1;
  const date = getRandomDate();
  const events = points.map((point) => createTripEvent(point));
  return (
    `<li class="trip-days__item  day">
        <div class="day__info">
          <span class="day__counter">${counter}</span>
          <time class="day__date" datetime="2019-03-18">${MONTH_NAMES[date.getMonth()]} ${date.getDay()}</time>
        </div>
        <ul class="trip-events__list">
          ${events}
        </ul>
      </li>
    `);
};


export const createTripDaysTemplate = () => {
  const EVENT_COUNT = 5;
  const points = generateEvents(EVENT_COUNT); // - генерирует точки маршрута из моков

  return (
    `<ul class="trip-days">
      ${createTripDay(points)}
    </ul>`
  );
};
