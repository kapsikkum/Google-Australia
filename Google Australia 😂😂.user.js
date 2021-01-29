// ==UserScript==
// @name         Google Australia 😂😂
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Fuck the "Google Search is in the news" alert right off
// @author       kapsikkum
// @include      https://www.google.*/search*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.getElementsByClassName('hide-focus-ring ua9Gvb')[0].remove();
})();