"use strict";

module.exports = Ferdi => {
  const getMessages = function getMessages() {
    // Initialize empty vars
    var unread = 0;
    var match = [];
    // Extract the number from the title
    match = document.title.match(/^\((\d+)\) Tiny Tiny RSS$/);
    // Some logic to handle the match groups
    unread = match != null && match.length > 0 ? match[1] : 0;
    // Set unread msgs badge
    Ferdi.setBadge(Number.parseInt(unread, 10));
  };

  const loopFunc = () => {
    getMessages();
  };

  Ferdi.loop(loopFunc);
};
