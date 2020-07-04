import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import showMoreStyles from './modules/showMoreStyles';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    
    modals();
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');

    sliders('.main-slider-item', 'vertikal');
    forms();

    mask('[name = "phone"]');

    showMoreStyles('.button-styles', '#styles .row');


});