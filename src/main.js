import {RenderPosition, renderTemplate} from './render';
import {createMainTemplate} from './view/main-view';
import {createInfoView} from './view/info-view';
import {createFilterTemplate} from './view/filter-view';
const siteTripMain = document.querySelector('.trip-main');
renderTemplate(siteTripMain, createInfoView(), RenderPosition.AFTERBEGIN);
const siteControlNavigation = siteTripMain.querySelector( '.trip-controls__navigation');
renderTemplate(siteControlNavigation, createMainTemplate(), RenderPosition.BEFOREEND);
const siteControlsFilters = siteTripMain.querySelector( '.trip-controls__filters');
renderTemplate(siteControlsFilters, createFilterTemplate(), RenderPosition.BEFOREEND);


