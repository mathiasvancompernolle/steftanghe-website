// Menubalk: dropdown, gsm-menu en vaste balk bij scrollen
(function () {
  var balk = document.getElementById('balk');
  var menu = document.getElementById('menu');
  var hamburger = document.querySelector('.hamburger');
  var dropKnop = document.querySelector('.menu-knop');
  var dropPaneel = document.getElementById('diensten-menu');

  function zetDropdown(open) {
    if (!dropKnop || !dropPaneel) return;   // (uitklapmenu is optioneel)
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

  if (dropKnop) dropKnop.addEventListener('click', function (e) {
    e.stopPropagation();
    zetDropdown(dropKnop.getAttribute('aria-expanded') !== 'true');
  });
  hamburger.addEventListener('click', function () { zetMenu(true); });
  if (sluitKnop) sluitKnop.addEventListener('click', function () { zetMenu(false); });
  if (achtergrond) achtergrond.addEventListener('click', function () { zetMenu(false); });
  window.matchMedia('(min-width: 901px)').addEventListener('change', function (e) { if (e.matches) zetMenu(false); });
  document.addEventListener('click', function (e) {
    if (dropPaneel && !dropPaneel.contains(e.target) && e.target !== dropKnop) zetDropdown(false);
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
      (dropPaneel && dropPaneel.classList.contains('open')) ||
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

  // Secties schuiven zacht in beeld bij het scrollen (niet bij "minder beweging")
  var zacht = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !zacht) {
    var doelen = document.querySelectorAll('main > section:not(.hero):not(.pagina-kop), .contact-inner > *, .dienst, .stappen li');
    var io = new IntersectionObserver(function (items) {
      items.forEach(function (it) {
        if (it.isIntersecting) { it.target.classList.add('in-beeld'); io.unobserve(it.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    doelen.forEach(function (d, i) {
      // wat al zichtbaar is bij het laden, niet animeren
      if (d.getBoundingClientRect().top < window.innerHeight) return;
      d.classList.add('verschijn');
      if (d.matches('.dienst, .stappen li')) d.style.transitionDelay = (Array.prototype.indexOf.call(d.parentNode.children, d) * 90) + 'ms';
      io.observe(d);
    });
  }

  // Knop "Naar boven" op lange pagina's
  if (!document.body.classList.contains('niet-gevonden')) {
    var boven = document.createElement('button');
    boven.type = 'button'; boven.className = 'naar-boven';
    boven.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 15l-6-6-6 6"/></svg>';
    var bovenLabel = function () { boven.setAttribute('aria-label', window.ST ? window.ST.t('naar.boven') : 'Naar boven'); };
    bovenLabel(); document.addEventListener('taal', bovenLabel);
    boven.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: zacht ? 'auto' : 'smooth' }); });
    document.body.appendChild(boven);
    window.addEventListener('scroll', function () { boven.classList.toggle('zichtbaar', window.scrollY > window.innerHeight * 1.5); }, { passive: true });
  }

  // Gsm-actiebalk: verbergen zolang de grote contactblok in beeld is (dubbel) of het menu open staat
  var actiebalk = document.getElementById('actiebalk');
  var contact = document.querySelector('.contact');
  if (actiebalk && contact && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (items) {
      actiebalk.classList.toggle('weg', items[0].isIntersecting);
    }, { threshold: 0.15 }).observe(contact);
  }
})();
