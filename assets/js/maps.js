// GDPR Cookie Management for Google Maps
(function() {
    'use strict';

    // Cookie management functions
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax";
    }

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // Initialize on page load
    document.addEventListener('DOMContentLoaded', function() {
        var cookieBanner = document.getElementById('cookie-banner');
        var mapPlaceholder = document.getElementById('map-placeholder');
        var googleMaps = document.getElementById('google-maps');
        var acceptBtn = document.getElementById('accept-cookies');
        var declineBtn = document.getElementById('decline-cookies');
        var loadMapBtn = document.getElementById('load-map');

        var mapsConsent = getCookie('maps_consent');

        if (mapsConsent === 'accepted') {
            // User has already accepted, show maps
            if (cookieBanner) cookieBanner.style.display = 'none';
            if (mapPlaceholder) mapPlaceholder.style.display = 'none';
            if (googleMaps) googleMaps.style.display = 'block';
        } else if (mapsConsent === 'declined') {
            // User has declined, show placeholder without banner
            if (cookieBanner) cookieBanner.style.display = 'none';
            if (mapPlaceholder) mapPlaceholder.style.display = 'block';
            if (googleMaps) googleMaps.style.display = 'none';
        } else {
            // No consent yet, show banner and placeholder
            if (cookieBanner) cookieBanner.style.display = 'block';
            if (mapPlaceholder) mapPlaceholder.style.display = 'block';
            if (googleMaps) googleMaps.style.display = 'none';
        }

        // Accept button click handler
        if (acceptBtn) {
            acceptBtn.addEventListener('click', function() {
                setCookie('maps_consent', 'accepted', 365);
                if (cookieBanner) cookieBanner.style.display = 'none';
                if (mapPlaceholder) mapPlaceholder.style.display = 'none';
                if (googleMaps) googleMaps.style.display = 'block';
            });
        }

        // Decline button click handler
        if (declineBtn) {
            declineBtn.addEventListener('click', function() {
                setCookie('maps_consent', 'declined', 365);
                if (cookieBanner) cookieBanner.style.display = 'none';
                if (mapPlaceholder) mapPlaceholder.style.display = 'block';
                if (googleMaps) googleMaps.style.display = 'none';
            });
        }

        // Load map button click handler (from placeholder)
        if (loadMapBtn) {
            loadMapBtn.addEventListener('click', function() {
                setCookie('maps_consent', 'accepted', 365);
                if (mapPlaceholder) mapPlaceholder.style.display = 'none';
                if (googleMaps) googleMaps.style.display = 'block';
            });
        }
    });
})();