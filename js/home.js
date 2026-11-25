// Homepage: categorietegels uit het verkoopassortiment
(function () {
  var t = window.ST.t;
  var A = window.ASSORTIMENT, el = document.getElementById('cat-tegels');
  if (!A || !el) return;
  // Welke foto per categorie: liefst een eigen foto, anders de eerste met beeld.
  var VOORKEUR = { tuin: 'zitmaaiers', reiniging: 'schoonmaakmachines', bouw: 'stroomgroepen', gereedschap: 'handgereedschap', aanbouw: 'hakselaar' };
  function tegels() {
    var taal = window.ST.taal();
    el.innerHTML = A.CATS.map(function (c) {
      var items = A.AANBOD.filter(function (a) { return a.cat === c.id; });
      var foto = (A.zoek(VOORKEUR[c.id]) || {}).foto || (items.filter(function (a) { return a.foto; })[0] || {}).foto;
      var voorbeelden = items.slice(0, 4).map(function (a) { return a.naam[taal]; }).join(', ');
      return '<a class="cat-tegel product-' + c.id + '" href="' + window.ST.link('verkoop.html?cat=' + c.id) + '">' +
        (foto ? '<img src="' + foto + '" alt="" loading="lazy">' : '') +
        '<span class="cat-tegel-tekst">' +
          '<span class="cat-tegel-naam">' + c.naam[taal] + '</span>' +
          '<span class="cat-tegel-vb">' + voorbeelden + (items.length > 4 ? ', …' : '') + '</span>' +
        '</span>' +
        '<span class="cat-tegel-pijl" aria-hidden="true">→</span></a>';
    }).join('');
  }
  document.addEventListener('taal', tegels);
  tegels();
})();

// Homepage: reuzewoorden en fotostrook die zijwaarts meeschuiven met het scrollen.
// Licht gehouden: één scroll-luisteraar, enkel actief als het blok in beeld is,
// en volledig stil bij "minder beweging".
(function () {
  var t = window.ST.t;
  var rijen = [].slice.call(document.querySelectorAll('.rw-rij, .fs-rij'));
  if (!rijen.length) return;

  // Reuzewoorden in de gekozen taal, een paar keer herhaald zodat de rij nooit "op" raakt
  function woorden() {
    document.querySelectorAll('.rw-rij[data-woorden]').forEach(function (r) {
      var stuk = r.dataset.woorden.split(',').map(function (k) {
        return '<span>' + t(k) + '</span><span class="rw-stip">·</span>';
      }).join('');
      r.innerHTML = new Array(5).join(stuk);
    });
  }
  woorden();
  document.addEventListener('taal', woorden);

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  // Nieuwe browsers: de beweging zit volledig in CSS (scroll-driven animation) en draait
  // op de grafische kaart, dus altijd vloeiend. Het script hoeft dan niets te doen.
  if (window.CSS && CSS.supports('animation-timeline: view()')) return;
  document.documentElement.classList.add('schuif-js');

  // Oudere browsers: elke frame zacht naar de doelpositie glijden (geen sprongen bij snel scrollen)
  var pos = new Map(), zichtbaar = new Set(), loopt = false;
  function doel(r) {
    var box = r.parentNode.getBoundingClientRect();
    var voortgang = window.innerHeight - box.top;               // pixels sinds het blok onderaan binnenkwam
    var richting = +r.dataset.richting || -1;
    var snelheid = r.classList.contains('fs-rij') ? 0.35 : 0.5;
    var start = richting > 0 ? -r.scrollWidth * 0.45 : 0;      // naar rechts: links beginnen, nooit een leeg begin
    return start + richting * voortgang * snelheid;
  }
  function frame() {
    var nogBezig = false;
    zichtbaar.forEach(function (r) {
      var d = doel(r), x = pos.has(r) ? pos.get(r) : d;
      x += (d - x) * 0.14;                                       // zacht volgen
      if (Math.abs(d - x) > 0.3) nogBezig = true; else x = d;
      pos.set(r, x);
      r.style.transform = 'translate3d(' + x.toFixed(2) + 'px,0,0)';
    });
    if (nogBezig) requestAnimationFrame(frame); else loopt = false;
  }
  function start() { if (!loopt && zichtbaar.size) { loopt = true; requestAnimationFrame(frame); } }
  var secties = [];
  rijen.forEach(function (r) { if (secties.indexOf(r.parentNode) < 0) secties.push(r.parentNode); });
  var io = new IntersectionObserver(function (items) {
    items.forEach(function (it) {
      [].forEach.call(it.target.querySelectorAll('.rw-rij, .fs-rij'), function (r) {
        if (it.isIntersecting) zichtbaar.add(r); else zichtbaar.delete(r);
      });
    });
    start();
  }, { rootMargin: '150px 0px' });
  secties.forEach(function (s) { io.observe(s); });
  window.addEventListener('scroll', start, { passive: true });
  window.addEventListener('resize', start);
  document.addEventListener('taal', start);
  // beginpositie meteen juist zetten (zonder glijden)
  rijen.forEach(function (r) { var d = doel(r); pos.set(r, d); r.style.transform = 'translate3d(' + d.toFixed(2) + 'px,0,0)'; });
})();
