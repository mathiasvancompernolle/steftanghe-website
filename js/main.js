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
  var sluitKnop = menu.querySelector('.menu-sluit');
  var achtergrond = document.querySelector('.menu-achtergrond');
  function zetMenu(open) {
    var wasOpen = menu.classList.contains('open');
    hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
    menu.classList.toggle('open', open);
    if (achtergrond) achtergrond.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
    if (open && sluitKnop) setTimeout(function () { sluitKnop.focus(); }, 50);
    if (!open && wasOpen) { zetDropdown(false); hamburger.focus(); }
  }

  dropKnop.addEventListener('click', function (e) {
    e.stopPropagation();
    zetDropdown(dropKnop.getAttribute('aria-expanded') !== 'true');
  });
  hamburger.addEventListener('click', function () { zetMenu(true); });
  if (sluitKnop) sluitKnop.addEventListener('click', function () { zetMenu(false); });
  if (achtergrond) achtergrond.addEventListener('click', function () { zetMenu(false); });
  window.matchMedia('(min-width: 901px)').addEventListener('change', function (e) { if (e.matches) zetMenu(false); });
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

  // Balk verdwijnt bij naar beneden scrollen, komt terug bij naar boven scrollen
  var vorige = window.scrollY;
  function iets_open() {
    return menu.classList.contains('open') ||
      dropPaneel.classList.contains('open') ||
      !!document.querySelector('.taal-lijst.open');
  }
  function verberg() {
    var y = window.scrollY;
    var verschil = y - vorige;
    if (y < 120 || iets_open()) {
      balk.classList.remove('is-weg');
    } else if (verschil > 6) {
      balk.classList.add('is-weg');
      zetDropdown(false);
    } else if (verschil < -6) {
      balk.classList.remove('is-weg');
    }
    if (Math.abs(verschil) > 6) vorige = y;
  }
  window.addEventListener('scroll', function () { updateBalk(); verberg(); }, { passive: true });
  balk.addEventListener('focusin', function () { balk.classList.remove('is-weg'); });
  updateBalk();

  document.querySelectorAll('[data-jaar]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
