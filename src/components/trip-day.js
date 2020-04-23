import {createElement} from "../utils.js";
import {MONTH_NAMES} from '../const';
import {getRandomDate} from '../mocks/trip-data';

const createTripEvent = (events) => {
  return events.map((event) => {
    const {type, city, startTime, endTime, duration, price} = event;
    return (
      `<li class="trip-events__item">
         <div class="event">
           <div class="event__type">
             <img class="event__type-icon" width="42" height="42" src="img/icons/taxi.png" alt="Event type icon">
           </div>
           <h3 class="event__title">${type} to ${city}</h3>
  
           <div class="event__schedule">
             <p class="event__time">
               <time class="event__start-time" datetime="2019-03-18T10:30">${startTime}</time>
               &mdash;
               <time class="event__end-time" datetime="2019-03-18T11:00">${endTime}</time>
             </p>
             <p class="event__duration">${duration}</p>
           </div>
  
           <p class="event__price">
             &euro;&nbsp;<span class="event__price-value">${price}</span>
           </p>
  
           <h4 class="visually-hidden">Offers:</h4>
           <ul class="event__selected-offers">
             <li class="event__offer">
               <span class="event__offer-title">Order Uber</span>
               &plus;
               &euro;&nbsp;<span class="event__offer-price">20</span>
              </li>
           </ul>
  
           <button class="event__rollup-btn" type="button">
             <span class="visually-hidden">Open event</span>
           </button>
         </div>
      </li>`
    );
  });
};

const createTripDay = (events, number) => {
  const counter = number;
  const date = getRandomDate(events);
  const points = createTripEvent(events);

  return (
    `<li class="trip-days__item  day">
        <div class="day__info">
          <span class="day__counter">${counter}</span>
          <time class="day__date" datetime="2019-03-18">${MONTH_NAMES[date.getMonth()]} ${date.getDay()}</time>
        </div>
        <ul class="trip-events__list">
        ${points}
        </ul>
      </li>
    `);
};

export default class TripDay {
  constructor(events, number) {
    this._element = null;
    this._events = events;
    this._number = number;
  }

  getTemplate() {
    return createTripDay(this._events, this._number);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
