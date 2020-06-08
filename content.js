'use strict';

var debarredTab;

// 30 mins
const timeout = 1000 * 60 * 30;

document.addEventListener("visibilitychange", function() {
  if (document.visibilityState != 'visible') {
    debarredTab = setTimeout(function() { location.replace(chrome.runtime.getURL("debarredPage.html") + "?debarredPageURL=" + window.location.href); }, timeout);
  } else {
    clearInterval(debarredTab);
  }
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    location.replace(request.debarredPageURL);

    return Promise.resolve("Dummy response to keep the console quiet");
});
