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
          '<span class="cat-tegel-aantal">' + items.length + ' ' + t(items.length === 1 ? 'aanbod.machine' : 'aanbod.machines') + '</span>' +
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
  document.addEventListener('taal', function () { woorden(); beweeg(); });

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var zichtbaar = new Set(), bezig = false;
  function beweeg() {
    bezig = false;
    zichtbaar.forEach(function (r) {
      var sectie = r.parentNode, box = sectie.getBoundingClientRect();
      var voortgang = window.innerHeight - box.top;            // pixels sinds het blok onderaan binnenkwam
      var richting = +r.dataset.richting || -1;
      var snelheid = r.classList.contains('fs-rij') ? 0.35 : 0.5;
      // naar rechts schuivende rijen starten al naar links verschoven, zodat er nooit een leeg begin zichtbaar is
      var start = richting > 0 ? -r.scrollWidth * 0.45 : 0;
      r.style.transform = 'translate3d(' + (start + richting * voortgang * snelheid).toFixed(1) + 'px,0,0)';
    });
  }
  function opScroll() { if (!bezig && zichtbaar.size) { bezig = true; requestAnimationFrame(beweeg); } }
  // per sectie volgen we alle rijen erin
  var secties = [];
  rijen.forEach(function (r) { if (secties.indexOf(r.parentNode) < 0) secties.push(r.parentNode); });
  var io = new IntersectionObserver(function (items) {
    items.forEach(function (it) {
      [].forEach.call(it.target.querySelectorAll('.rw-rij, .fs-rij'), function (r) {
        if (it.isIntersecting) zichtbaar.add(r); else zichtbaar.delete(r);
      });
    });
    opScroll();
  }, { rootMargin: '100px 0px' });
  secties.forEach(function (s) { io.observe(s); });
  window.addEventListener('scroll', opScroll, { passive: true });
  window.addEventListener('resize', opScroll);
  rijen.forEach(function (r) { zichtbaar.add(r); });
  beweeg();
  zichtbaar.clear();
})();
