import {RenderPosition, renderTemplate} from './render';
import {createMainTemplate} from './view/main-view';
import {createInfoView} from './view/info-view';
import {createFilterTemplate} from './view/filter-view';
import {createSortTemplate} from './view/sort-view';
import {createdTripEventListTemplate} from './view/trip-event-list-view';
import {createTripEventItemTemplate} from './view/trip-event-item-view';
import {createEventEditTemplate} from './view/trip-event-edit-view';
import {createEventEditHeaderTemplate} from './view/card-header';
import {createCardDetailsTemplate} from './view/card-details';
import {createDestinationTemplate} from './view/card-destination';
import {createHeaderTypeItem} from './view/header-type-item';
import {createCardOfferSelectorElementTemplate} from './view/card-offer-selector-element';
const countTripEvent = 3;
const typeItemData = ['Taxi','Bus','Train','Ship','Drive','Flight','Check-in','Sightseeing','Restaurant'];
const offerSelector = [
  {
    title: 'Add luggage',
    price: 50,
    name: 'luggage'
  },
  {
    title: 'Switch to comfort',
    price: 80,
    name: 'comfort'
  },
  {
    title: 'Add meal',
    price: 15,
    name: 'meal'
  },
  {
    title: 'Choose seats',
    price: 5,
    name: 'seats'
  },
  {
    title: 'Travel by train',
    price: 40,
    name: 'train'
  }
];

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
const eventHeader = eventEditCard.querySelector('.event__type-group');
for(let i = 0; i < typeItemData.length; i++) {
  renderTemplate(eventHeader, createHeaderTypeItem(typeItemData[i]), RenderPosition.BEFOREEND);
}
renderTemplate(eventEditCard, createCardDetailsTemplate(), RenderPosition.BEFOREEND);
const cardDetails = tripEventsList.querySelector('.event__details');
const availableOffers = cardDetails.querySelector('.event__available-offers');
for(let i = 0; i < offerSelector.length; i++) {
  renderTemplate(availableOffers, createCardOfferSelectorElementTemplate(offerSelector[i]), RenderPosition.BEFOREEND);
}
renderTemplate(cardDetails, createDestinationTemplate(), RenderPosition.BEFOREEND);
for(let i = 0; i < countTripEvent; i++) {
  renderTemplate(tripEventsList, createTripEventItemTemplate(), RenderPosition.BEFOREEND);
}
