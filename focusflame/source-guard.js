(function () {
  document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
  });

  document.addEventListener('keydown', function (event) {
    var key = (event.key || '').toLowerCase();
    var blocked = event.key === 'F12'
      || (event.ctrlKey && event.shiftKey && ['i', 'j', 'c'].indexOf(key) !== -1)
      || (event.ctrlKey && ['u', 's'].indexOf(key) !== -1);
    if (blocked) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, true);
})();
