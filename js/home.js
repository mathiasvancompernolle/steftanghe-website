// Homepage: categorietegels uit het verkoopassortiment
(function () {
  var A = window.ASSORTIMENT, el = document.getElementById('cat-tegels');
  if (!A || !el) return;
  function teken() {
    var taal = window.ST.taal();
    el.innerHTML = A.CATS.map(function (c) {
      var items = A.AANBOD.filter(function (a) { return a.cat === c.id; });
      var voorbeelden = items.slice(0, 4).map(function (a) { return a.naam[taal]; }).join(', ');
      return '<a class="cat-tegel product-' + c.id + '" href="' + window.ST.link('verkoop.html?cat=' + c.id) + '">' +
        '<span class="cat-tegel-naam">' + c.naam[taal] + '</span>' +
        '<span class="cat-tegel-aantal">' + items.length + ' ' + window.ST.t(items.length === 1 ? 'aanbod.machine' : 'aanbod.machines') + '</span>' +
        '<span class="cat-tegel-vb">' + voorbeelden + (items.length > 4 ? ', …' : '') + '</span></a>';
    }).join('');
  }
  document.addEventListener('taal', teken);
  teken();
})();
