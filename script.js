// ==UserScript==
// @name         Auto-remove YouTube Adblock Enforcement Popup
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Automatically removes YouTube's adblock enforcement popup
// @author       You
// @match        *://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const removeEnforcementPopup = () => {
        const popup = document.querySelector('ytd-enforcement-message-view-model');
        if (popup) {
            popup.remove();
            console.log('YouTube enforcement popup removed.');
        }
    };

    // Observe dynamic changes to detect when the popup is added
    const observer = new MutationObserver(removeEnforcementPopup);
    observer.observe(document.body, { childList: true, subtree: true });

    // Initial check in case it’s already present
    removeEnforcementPopup();
})();
