
import {createTripInfoTemplate} from './components/trip-info';
import {createTripControlsTemplate} from './components/trip-controls';
import {createTripFilterTemplate} from './components/trip-filter';
import {createTripSortItemTemplate} from './components/trip-sort-item';
import {createTripDaysTemplate} from './components/trip-days';

const DAYS_COUNT = 5;

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

// -информация о путешествии в header
const siteTripMainElement = document.querySelector(`.trip-main`);
// *блок кода с информацией о путешествии
render(siteTripMainElement, createTripInfoTemplate(), `afterbegin`);

// -навигация в header
const siteMainNavigationElement = document.querySelector(`.trip-main__trip-controls`);
render(siteMainNavigationElement, createTripControlsTemplate());
// -фильтр в header
render(siteMainNavigationElement, createTripFilterTemplate());

// - путешествия
const siteTripEventsElement = document.querySelector(`.trip-events`);
render(siteTripEventsElement, createTripSortItemTemplate());
// - отрисовывает дни

for (let i = 1; i < DAYS_COUNT; i++) {
  render(siteTripEventsElement, createTripDaysTemplate());
}


