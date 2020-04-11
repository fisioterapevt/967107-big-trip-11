

const createTripInfoMainTemplate = (title, date) => {
  return (
    `<div class="trip-info__main">
      <h1 class="trip-info__title">${title}</h1>
      <p class="trip-info__dates">${date}</p>
    </div>`
  );
};

export const createTripInfoTemplate = (cost) => {
  const TripInfoMain = createTripInfoMainTemplate();
  return (
    `<section class="trip-main__trip-info  trip-info">
      ${TripInfoMain}
      <p class="trip-info__cost">
        Total: &euro;&nbsp;<span class="trip-info__cost-value">${cost}</span>
      </p>
    </section>`);
};
