
import InfoComponent from './components/trip-info';
import MenuComponent from './components/trip-menu';
import SortComponent from './components/trip-sort';
import SortEventComponent from './components/trip-sort-event';
import TripDaysComponent from './components/trip-days';
import TripDayComponent from './components/trip-day';
import NoPointsComponent from './components/no-points';

import {render, RenderPosition} from "./utils/render";
import {generateEvents} from './mocks/trip-data';

const EVENTS_COUNT = 10;

// *информация о путешествии в header
const siteTripMainElement = document.querySelector(`.trip-main`);
render(siteTripMainElement, new InfoComponent(`2000`), RenderPosition.AFTERBEGIN);

// *навигация в header
const siteMainNavigationElement = document.querySelector(`.trip-main__trip-controls`);
render(siteMainNavigationElement, new MenuComponent(), RenderPosition.BEFOREEND);
// *фильтр в header
render(siteMainNavigationElement, new SortComponent(), RenderPosition.BEFOREEND);

//* меню сортировки путешествия
const siteEventsElement = document.querySelector(`.trip-events`);
render(siteEventsElement, new SortEventComponent(), RenderPosition.BEFOREEND);

//* контейнер для списка дней маршрута
render(siteEventsElement, new TripDaysComponent(), RenderPosition.BEFOREEND);
const siteDaysListElement = document.querySelector(`.trip-days`);

//* отрисовывает дни с точками маршрута
const renderTripDays = (events) => {
  if (events.length <= 0) {
    render(siteDaysListElement, new NoPointsComponent(), RenderPosition.BEFOREEND);
    return;
  }

  //* список дней с точками маршрута
  for (let i = 0; i <= 5; i++) {
    render(siteDaysListElement, new TripDayComponent(events, i + 1), RenderPosition.BEFOREEND);
  }
};

const events = generateEvents(EVENTS_COUNT);
renderTripDays(events);


//* создать новое путешествие
