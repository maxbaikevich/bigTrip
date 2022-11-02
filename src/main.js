import {RenderPosition, renderTemplate} from './render';
import {createMainTemplate} from './view/main-view';
import {createInfoView} from './view/info-view';
import {createFilterTemplate} from './view/filter-view';
import {createSortTemplate} from './view/sort-view';
import {createdTripEventListTemplate} from './view/trip-event-list-view';
import {createTripEventItemTemplate} from './view/trip-event-item-view';
import {createEventEditTemplate} from './view/trip-event-edit-view';
import {createEventEditHeaderTemplate} from './view/card-event-edit-header';
const countTripEvent = 3;
const siteTripMain = document.querySelector('.trip-main');
renderTemplate(siteTripMain, createInfoView(), RenderPosition.AFTERBEGIN);
const siteControlNavigation = siteTripMain.querySelector( '.trip-controls__navigation');
renderTemplate(siteControlNavigation, createMainTemplate(), RenderPosition.BEFOREEND);
const siteControlsFilters = siteTripMain.querySelector( '.trip-controls__filters');
renderTemplate(siteControlsFilters, createFilterTemplate(), RenderPosition.BEFOREEND);
const siteMain  = document.querySelector('.page-main');
const tripEvents = siteMain.querySelector('.trip-events');
renderTemplate(tripEvents, createSortTemplate(), RenderPosition.BEFOREEND);
renderTemplate(tripEvents, createdTripEventListTemplate(), RenderPosition.BEFOREEND);
const tripEventsList = tripEvents.querySelector('.trip-events__list');
renderTemplate(tripEventsList, createEventEditTemplate(), RenderPosition.BEFOREEND);
const eventEditCard = tripEventsList.querySelector('.event--edit');
renderTemplate(eventEditCard, createEventEditHeaderTemplate(), RenderPosition.AFTERBEGIN);
for(let i = 0; i < countTripEvent; i++) {
  renderTemplate(tripEventsList, createTripEventItemTemplate(), RenderPosition.BEFOREEND);
}
