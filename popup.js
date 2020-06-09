  'use strict';

  window.onload = function() {
    var debarredCurrentTab = document.getElementById("debarredCurrentTab");

    debarredCurrentTab.addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        var debarredPage = chrome.runtime.getURL("debarredPage.html") + "?debarredPageURL=" + tabs[0].url
        chrome.tabs.sendMessage(tabs[0].id, {debarredPageURL: debarredPage});
      });
    });

    document.querySelector('#debarredTabSettings').addEventListener('click', function() {
      if (chrome.runtime.openOptionsPage) {
        chrome.runtime.openOptionsPage();
      } else {
        window.open(chrome.runtime.getURL('options.html'));
      }
    });
  };
