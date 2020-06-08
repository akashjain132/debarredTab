'use strict';

window.onload = function() {
  var debarredPageURL = getSecondPart(window.location.href, "debarredPageURL=")

  var debarredPageURLElement = document.getElementById("debarredPageURL");

  debarredPageURLElement.innerHTML = debarredPageURL;
  debarredPageURLElement.setAttribute("href", debarredPageURL);

  document.addEventListener("click", function(){
    window.location.href = debarredPageURL;
  });

  function getSecondPart(str, word) {
    return str.split(word)[1];
  }
};
