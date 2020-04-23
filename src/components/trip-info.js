import AbstractComponent from "./abstract-component.js";


const createInfoMainTemplate = (title, date) => {
  return (
    `<div class="trip-info__main">
      <h1 class="trip-info__title">${title}</h1>
      <p class="trip-info__dates">${date}</p>
    </div>`
  );
};

const createInfoTemplate = (cost) => {
  const TripInfoMain = createInfoMainTemplate(`title`, `21/10/2020`);
  return (
    `<section class="trip-main__trip-info  trip-info">
      ${TripInfoMain}
      <p class="trip-info__cost">
        Total: &euro;&nbsp;<span class="trip-info__cost-value">${cost}</span>
      </p>
    </section>`);
};

export default class Info extends AbstractComponent {
  constructor(cost) {
    super();
    this._cost = cost;
  }

  getTemplate() {
    return createInfoTemplate(this._cost);
  }
}
