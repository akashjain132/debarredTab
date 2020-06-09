'use strict';

var debarredTab;

var timeout = '1800000';

chrome.storage.sync.get({
  debarredTabTimer: '1800000',
}, function(items) {
  timeout = items.debarredTabTimer;
});

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
