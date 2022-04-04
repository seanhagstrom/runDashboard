/* eslint-disable prefer-template */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable import/prefer-default-export */

export const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('Service Worker Registered', registration);
      console.log(`Scope: ${registration.scope}`);
      if (registration.installing) {
        console.log('Service worker installing');
      } else if (registration.waiting) {
        console.log('Service worker installed');
      } else if (registration.active) {
        console.log('Service worker active');
      }
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  } else {
    console.log('Service worker not supported');
  }
};
