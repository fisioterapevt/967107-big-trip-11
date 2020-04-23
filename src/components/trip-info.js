import {createElement} from "../utils.js";

const createInfoMainTemplate = (title, date) => {
  return (
    `<div class="trip-info__main">
      <h1 class="trip-info__title">${title}</h1>
      <p class="trip-info__dates">${date}</p>
    </div>`
  );
};

const createInfoTemplate = (cost) => {
  const TripInfoMain = createInfoMainTemplate();
  return (
    `<section class="trip-main__trip-info  trip-info">
      ${TripInfoMain}
      <p class="trip-info__cost">
        Total: &euro;&nbsp;<span class="trip-info__cost-value">${cost}</span>
      </p>
    </section>`);
};

export default class Info {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createInfoTemplate();
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
