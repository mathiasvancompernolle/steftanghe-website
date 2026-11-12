// Detailpagina van één type machine: verkoop-detail.html?p=<slug>
(function () {
  var A = window.ASSORTIMENT, t = window.ST.t;
  var $ = function (id) { return document.getElementById(id); };
  var item = A.zoek(new URLSearchParams(location.search).get('p') || '');
  function taal() { return window.ST.taal(); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  if (!item) { location.replace(window.ST.link('verkoop.html')); return; }

  function bericht() {
    var naam = $('o-naam').value.trim(), tel = $('o-tel').value.trim(), extra = $('o-bericht').value.trim();
    return t('vk.msg') + ' ' + item.naam[taal()].toLowerCase() + '. ' + t('vd.msg.offerte') +
      (extra ? '\n\n' + extra : '') +
      (naam ? '\n\n' + naam : '') + (tel ? ' – ' + tel : '');
  }

  function teken() {
    var naam = item.naam[taal()], c = A.cat(item.cat);
    document.title = naam + ' – Stef Tanghe';
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.content = naam + ': ' + item.tekst[taal()] + ' ' + t('vd.meta');
    $('d-titel').textContent = naam;
    $('kruimel').innerHTML =
      '<a href="' + window.ST.link('./') + '">' + t('kr.home') + '</a> <span aria-hidden="true">»</span> ' +
      '<a href="' + window.ST.link('verkoop.html') + '">' + t('vk.h1') + '</a> <span aria-hidden="true">»</span> ' +
      '<a href="' + window.ST.link('verkoop.html?cat=' + item.cat) + '">' + esc(c.naam[taal()]) + '</a> <span aria-hidden="true">»</span> ' +
      '<span aria-current="page">' + esc(naam) + '</span>';
    $('d-beeld').innerHTML = item.foto
      ? '<img src="' + item.foto + '" alt="' + esc(naam) + '">'
      : '<span class="todo">Foto: nog toe te voegen</span>';
    $('d-tekst').textContent = item.tekst[taal()];
    $('d-merken').innerHTML = item.merken.map(esc).join(' <span aria-hidden="true">|</span> ');
    $('d-h-advies').textContent = t('vd.h.advies');
    $('d-h-regio').textContent = t('vd.h.regio').replace('{x}', naam);
    $('o-mail').href = 'mailto:info@steftanghe.be?subject=' + encodeURIComponent(t('vd.offerte') + ': ' + naam) + '&body=' + encodeURIComponent(bericht());
  }

  $('offerteform').addEventListener('submit', function (e) {
    e.preventDefault();
    window.open('https://wa.me/32473235755?text=' + encodeURIComponent(bericht()), '_blank', 'noopener');
  });
  $('offerteform').addEventListener('input', function () {
    $('o-mail').href = 'mailto:info@steftanghe.be?subject=' + encodeURIComponent(t('vd.offerte') + ': ' + item.naam[taal()]) + '&body=' + encodeURIComponent(bericht());
  });

  document.addEventListener('taal', teken);
  teken();
})();
