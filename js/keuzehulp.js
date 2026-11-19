// Keuzehulp "Welke maaier past bij jou?" op de verkooppagina.
// Max. 3 vragen; de uitkomst wijst naar machines uit js/assortiment.js.
// Advies aanpassen? Wijzig enkel de functie advies() hieronder.
(function () {
  var A = window.ASSORTIMENT, t = window.ST.t;
  var $ = function (id) { return document.getElementById(id); };
  var dlg = $('keuzehulp');
  if (!dlg || !A) return;
  function taal() { return window.ST.taal(); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  // Vragen: id, tekstsleutel, opties [waarde, tekstsleutel]
  var VRAGEN = {
    grootte: { k: 'kh.q1', o: [['a', 'kh.q1.a'], ['b', 'kh.q1.b'], ['c', 'kh.q1.c'], ['d', 'kh.q1.d']] },
    zelf: { k: 'kh.q2', o: [['ja', 'kh.q2.a'], ['nee', 'kh.q2.b']] },
    stil: { k: 'kh.q3s', o: [['accu', 'kh.q3s.a'], ['kracht', 'kh.q3s.b']] },
    obstakels: { k: 'kh.q3o', o: [['veel', 'kh.q3o.a'], ['open', 'kh.q3o.b']] }
  };
  function volgorde(a) {
    var v = ['grootte', 'zelf'];
    if (a.zelf === 'ja') v.push(a.grootte === 'a' || a.grootte === 'b' ? 'stil' : 'obstakels');
    return v;
  }
  function advies(a) {
    if (a.zelf === 'nee') return ['robotmaaiers'];
    if (a.grootte === 'a') return [a.stil === 'accu' ? 'loopmaaiers-op-accu' : 'loopmaaiers-op-benzine'];
    if (a.grootte === 'b') return [a.stil === 'accu' ? 'loopmaaiers-op-accu' : 'loopmaaiers-op-benzine', 'zitmaaiers'];
    if (a.obstakels === 'veel') return ['zitmaaiers-zero-turn', 'frontmaaiers'];
    return a.grootte === 'c' ? ['zitmaaiers', 'zitmaaiers-zero-turn'] : ['zitmaaiers-zero-turn', 'compacte-traktoren'];
  }

  var antw = {}, stap = 0;
  function teken() {
    var v = volgorde(antw), n = Math.max(v.length, antw.zelf === 'nee' ? 2 : 3);
    var html;
    if (stap < v.length) {
      var q = VRAGEN[v[stap]];
      $('kh-balk').style.width = (stap / n * 100) + '%';
      html = '<p class="kh-stap">' + t('kh.vraag').replace('{i}', stap + 1).replace('{n}', n) + '</p>' +
        '<h2 class="kh-vraag" tabindex="-1">' + t(q.k) + '</h2><div class="kh-opties">' +
        q.o.map(function (o) {
          return '<button type="button" class="kh-optie" data-v="' + o[0] + '"' + (antw[v[stap]] === o[0] ? ' aria-pressed="true"' : '') + '>' + t(o[1]) + '</button>';
        }).join('') + '</div>' +
        (stap ? '<button type="button" class="kh-terug" data-terug>← ' + t('kh.terug') + '</button>' : '');
    } else {
      $('kh-balk').style.width = '100%';
      var items = advies(antw).map(A.zoek).filter(Boolean);
      var samenvatting = volgorde(antw).map(function (k) { var o = VRAGEN[k].o.filter(function (x) { return x[0] === antw[k]; })[0]; return '- ' + t(VRAGEN[k].k) + ' ' + t(o[1]); });
      var msg = t('kh.msg') + '\n' + samenvatting.join('\n') + '\n' + t('kh.msg.uit') + ': ' + items.map(function (a) { return a.naam[taal()]; }).join(', ');
      html = '<h2 class="kh-vraag" tabindex="-1">' + t('kh.res') + '</h2><p class="kh-res-p">' + t('kh.res.p') + '</p>' +
        '<div class="kh-resultaten">' + items.map(function (a) {
          return '<a class="kh-res" href="' + window.ST.link('verkoop-detail.html?p=' + a.slug) + '">' +
            (a.foto ? '<img src="' + A.klein(a.foto) + '" alt="" width="640" height="400">' : '') +
            '<span><strong>' + esc(a.naam[taal()]) + '</strong><span>' + esc(a.tekst[taal()]) + '</span></span></a>';
        }).join('') + '</div>' +
        '<div class="kh-acties"><a class="btn btn-groen" target="_blank" rel="noopener" href="https://wa.me/32473235755?text=' + encodeURIComponent(msg) + '">' + t('kh.res.wa') + '</a>' +
        '<button type="button" class="btn btn-rand" data-opnieuw>' + t('kh.opnieuw') + '</button></div>';
    }
    $('kh-inhoud').innerHTML = html;
    var kop = $('kh-inhoud').querySelector('.kh-vraag'); if (kop) kop.focus({ preventScroll: true });
  }

  $('kh-inhoud').addEventListener('click', function (e) {
    var o = e.target.closest('.kh-optie');
    if (o) {
      var v = volgorde(antw);
      antw[v[stap]] = o.dataset.v;
      // antwoorden die niet meer van toepassing zijn, wissen
      Object.keys(antw).forEach(function (k) { if (volgorde(antw).indexOf(k) < 0) delete antw[k]; });
      stap++; teken(); return;
    }
    if (e.target.closest('[data-terug]')) { stap = Math.max(0, stap - 1); teken(); return; }
    if (e.target.closest('[data-opnieuw]')) { antw = {}; stap = 0; teken(); }
  });

  $('kh-open').addEventListener('click', function () {
    antw = {}; stap = 0; teken();
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', '');
    document.body.classList.add('dialoog-open');
  });
  function sluit() { if (dlg.close) dlg.close(); else dlg.removeAttribute('open'); }
  $('kh-sluit').addEventListener('click', sluit);
  dlg.addEventListener('close', function () { document.body.classList.remove('dialoog-open'); $('kh-open').focus({ preventScroll: true }); });
  // klik naast het venster sluit het
  dlg.addEventListener('click', function (e) { if (e.target === dlg) sluit(); });
  document.addEventListener('taal', function () { if (dlg.open) teken(); });
})();
