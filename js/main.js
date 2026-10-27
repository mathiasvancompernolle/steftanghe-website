// Menubalk: dropdown, gsm-menu en vaste balk bij scrollen
(function () {
  var balk = document.getElementById('balk');
  var menu = document.getElementById('menu');
  var hamburger = document.querySelector('.hamburger');
  var dropKnop = document.querySelector('.menu-knop');
  var dropPaneel = document.getElementById('diensten-menu');

  function zetDropdown(open) {
    dropKnop.setAttribute('aria-expanded', open ? 'true' : 'false');
    dropPaneel.classList.toggle('open', open);
  }
  function zetMenu(open) {
    hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
    hamburger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    menu.classList.toggle('open', open);
    if (open) balk.classList.add('is-vast'); else updateBalk();
  }

  dropKnop.addEventListener('click', function (e) {
    e.stopPropagation();
    zetDropdown(dropKnop.getAttribute('aria-expanded') !== 'true');
  });
  hamburger.addEventListener('click', function () {
    zetMenu(hamburger.getAttribute('aria-expanded') !== 'true');
  });
  document.addEventListener('click', function (e) {
    if (!dropPaneel.contains(e.target) && e.target !== dropKnop) zetDropdown(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { zetDropdown(false); zetMenu(false); }
  });
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { zetDropdown(false); zetMenu(false); });
  });

  function updateBalk() {
    if (!balk.classList.contains('balk-transparant')) return;
    if (menu.classList.contains('open')) return;
    balk.classList.toggle('is-vast', window.scrollY > 40);
  }
  window.addEventListener('scroll', updateBalk, { passive: true });
  updateBalk();

  document.querySelectorAll('[data-jaar]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
