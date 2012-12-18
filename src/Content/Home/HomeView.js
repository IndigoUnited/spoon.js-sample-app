define([
    'spoon',
    'doT',
    'jquery',
    'text!./assets/tmpl/home.html',
    'css!./assets/css/home.css'
], function (spoon, doT, $, tmpl) {

    'use strict';

    return spoon.View.extend({
        $name: 'HomeView',

        _element: 'div.home',
        _template: doT.template(tmpl)
    });
});