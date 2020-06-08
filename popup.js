  'use strict';

  window.onload = function() {
    var debarredCurrentTab = document.getElementById("debarredCurrentTab");
    console.log(chrome.runtime.id);
    console.log(chrome.runtime.getURL("debarredPage.html"));

    debarredCurrentTab.addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        var debarredPage = chrome.runtime.getURL("debarredPage.html") + "?debarredPageURL=" + tabs[0].url
        chrome.tabs.sendMessage(tabs[0].id, {debarredPageURL: debarredPage});
      });
    });
  };
