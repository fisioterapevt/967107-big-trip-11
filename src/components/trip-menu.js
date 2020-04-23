import AbstractComponent from "./abstract-component.js";


const createMenuTemplate = () => {
  return (
    `<div>
      <h2 class="visually-hidden">Switch trip view</h2>
      <nav class="trip-controls__trip-tabs  trip-tabs">
        <a class="trip-tabs__btn" href="#">Table</a>
        <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Stats</a>
      </nav>
    </div>`
  );
};

export default class Menu extends AbstractComponent {
  getTemplate() {
    return createMenuTemplate();
  }
}
