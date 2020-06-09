  'use strict';

  window.onload = function() {
    restore_options();
    document.getElementById('save').addEventListener('click', save_options);

    // Saves options to chrome.storage
    function save_options() {
      var debarredTabTimer = document.getElementById('DebarredTabTimer').value;

      chrome.storage.sync.set({
        debarredTabTimer: debarredTabTimer
      }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.style.display = "block";
        status.textContent = 'Configuration has been changed.';
      });
    }

    // Restores select box and checkbox state using the preferences
    // stored in chrome.storage.
    function restore_options() {
      chrome.storage.sync.get({
        debarredTabTimer: '1800000',
      }, function(items) {
        document.getElementById('DebarredTabTimer').value = items.debarredTabTimer;
      });
    }
  };
