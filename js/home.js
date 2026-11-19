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
