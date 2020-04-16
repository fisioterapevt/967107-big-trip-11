
import {filtersName} from '../mocks/filters';

const createFilters = (name, isChecked) => {
  return (`
    <div class="trip-filters__filter">
      <input id="filter-${name}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value=${name} ${isChecked ? `checked` : ``}>
      <label class="trip-filters__filter-label" for="filter-${name}">${name}</label>
    </div>
  `);
};

export const createTripFilterTemplate = () => {
  const tripFilters = filtersName.map((filter, i) => createFilters(filter, i === 0)).join(`\n`);
  return (
    `<h2 class="visually-hidden">Filter events</h2>
    <form class="trip-filters" action="#" method="get">
      ${tripFilters}
    <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`);
};
