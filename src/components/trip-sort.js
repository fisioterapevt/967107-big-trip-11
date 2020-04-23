import {createElement} from "../utils.js";

const sortsName = [
  `everything`,
  `future`,
  `past`
];
const createTripSort = (name, isChecked) => {
  return (`
    <div class="trip-filters__filter">
      <input id="filter-${name}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value=${name} ${isChecked ? `checked` : ``}>
      <label class="trip-filters__filter-label" for="filter-${name}">${name}</label>
    </div>`
  );
};

const createTripSortTemplate = () => {
  const tripSorts = sortsName.map((sort, i) => createTripSort(sort, i === 0)).join(`\n`);
  return (
    `<div>
      <h2 class="visually-hidden">Filter events</h2>
      <form class="trip-filters" action="#" method="get">
       ${tripSorts}
       <button class="visually-hidden" type="submit">Accept filter</button>
      </form>
    </div>`
  );
};

export default class Sort {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createTripSortTemplate();
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
