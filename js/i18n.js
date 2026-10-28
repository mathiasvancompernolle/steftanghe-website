// Meertaligheid: Nederlands (standaard), Engels, Frans, Duits.
// Tekst aanpassen? Wijzig enkel de woordenlijst T hieronder.
(function () {
  var TALEN = {
    nl: { naam: 'Nederlands', locale: 'nl-BE' },
    en: { naam: 'English', locale: 'en-GB' },
    fr: { naam: 'Français', locale: 'fr-BE' },
    de: { naam: 'Deutsch', locale: 'de-BE' }
  };

  var VLAG = {
    nl: '<rect width="60" height="20" fill="#AE1C28"/><rect y="20" width="60" height="20" fill="#fff"/><rect y="40" width="60" height="20" fill="#21468B"/>',
    en: '<rect width="60" height="60" fill="#012169"/><path d="M0 0L60 60M60 0L0 60" stroke="#fff" stroke-width="12"/><path d="M0 0L60 60M60 0L0 60" stroke="#C8102E" stroke-width="4"/><path d="M30 0V60M0 30H60" stroke="#fff" stroke-width="20"/><path d="M30 0V60M0 30H60" stroke="#C8102E" stroke-width="12"/>',
    fr: '<rect width="20" height="60" fill="#002654"/><rect x="20" width="20" height="60" fill="#fff"/><rect x="40" width="20" height="60" fill="#CE1126"/>',
    de: '<rect width="60" height="20" fill="#000"/><rect y="20" width="60" height="20" fill="#DD0000"/><rect y="40" width="60" height="20" fill="#FFCE00"/>'
  };
  function vlag(code, maat) {
    return '<svg class="vlag" width="' + maat + '" height="' + maat + '" viewBox="0 0 60 60" aria-hidden="true">' +
      '<clipPath id="c-' + code + '-' + maat + '"><circle cx="30" cy="30" r="30"/></clipPath>' +
      '<g clip-path="url(#c-' + code + '-' + maat + ')">' + VLAG[code] + '</g>' +
      '<circle cx="30" cy="30" r="29.25" fill="none" stroke="rgba(0,0,0,.15)" stroke-width="1.5"/></svg>';
  }

  var T = {
    // Algemeen
    'meta.home.title': { nl: 'Stef Tanghe – Land- en tuinbouwmachines in Izegem', en: 'Stef Tanghe – Agricultural and garden machinery in Izegem', fr: 'Stef Tanghe – Machines agricoles et de jardin à Izegem', de: 'Stef Tanghe – Land- und Gartenbaumaschinen in Izegem' },
    'meta.home.desc': { nl: 'Verkoop, verhuur, onderhoud en herstellingen van land- en tuinbouwmachines in Izegem. Kubota te huur met frees, klepelmaaier of hakselaar.', en: 'Sales, rental, maintenance and repairs of agricultural and garden machinery in Izegem. Kubota for rent with rotary tiller, flail mower or wood chipper.', fr: 'Vente, location, entretien et réparation de machines agricoles et de jardin à Izegem. Kubota à louer avec fraise rotative, broyeur à fléaux ou broyeur de branches.', de: 'Verkauf, Vermietung, Wartung und Reparatur von Land- und Gartenbaumaschinen in Izegem. Kubota zu mieten mit Bodenfräse, Schlegelmäher oder Häcksler.' },
    'meta.verhuur.title': { nl: 'Kubota huren in Izegem – Stef Tanghe', en: 'Rent a Kubota in Izegem – Stef Tanghe', fr: 'Louer un Kubota à Izegem – Stef Tanghe', de: 'Kubota mieten in Izegem – Stef Tanghe' },
    'meta.verhuur.desc': { nl: 'Huur een Kubota B1820 met frontlader in Izegem, met frees, klepelmaaier of hakselaar. Per dag, weekend of week.', en: 'Rent a Kubota B1820 with front loader in Izegem, with rotary tiller, flail mower or wood chipper. By the day, weekend or week.', fr: 'Louez un Kubota B1820 avec chargeur frontal à Izegem, avec fraise rotative, broyeur à fléaux ou broyeur de branches. À la journée, au week-end ou à la semaine.', de: 'Mieten Sie einen Kubota B1820 mit Frontlader in Izegem, mit Bodenfräse, Schlegelmäher oder Häcksler. Pro Tag, Wochenende oder Woche.' },
    'taal.kiezen': { nl: 'Taal kiezen', en: 'Choose language', fr: 'Choisir la langue', de: 'Sprache wählen' },
    'menu.open': { nl: 'Menu openen', en: 'Open menu', fr: 'Ouvrir le menu', de: 'Menü öffnen' },
    'menu.sluiten': { nl: 'Menu sluiten', en: 'Close menu', fr: 'Fermer le menu', de: 'Menü schließen' },
    'nav.diensten': { nl: 'Diensten', en: 'Services', fr: 'Services', de: 'Leistungen' },
    'nav.verkoop': { nl: 'Verkoop', en: 'Sales', fr: 'Vente', de: 'Verkauf' },
    'nav.verkoop.sub': { nl: 'Nieuwe en tweedehands machines', en: 'New and used machinery', fr: 'Machines neuves et d’occasion', de: 'Neue und gebrauchte Maschinen' },
    'nav.verhuur': { nl: 'Verhuur', en: 'Rental', fr: 'Location', de: 'Vermietung' },
    'nav.verhuur.sub': { nl: 'Kubota met werktuigen, per dag of week', en: 'Kubota with implements, by the day or week', fr: 'Kubota avec outils, à la journée ou à la semaine', de: 'Kubota mit Anbaugeräten, tage- oder wochenweise' },
    'nav.onderhoud': { nl: 'Onderhoud', en: 'Maintenance', fr: 'Entretien', de: 'Wartung' },
    'nav.onderhoud.sub': { nl: 'Een vaste beurt voor het seizoen', en: 'A regular service before the season', fr: 'Un entretien régulier avant la saison', de: 'Regelmäßige Wartung vor der Saison' },
    'nav.herstel': { nl: 'Herstellingen', en: 'Repairs', fr: 'Réparations', de: 'Reparaturen' },
    'nav.herstel.sub': { nl: 'Snel terug aan het werk na een panne', en: 'Back to work quickly after a breakdown', fr: 'Vite au travail après une panne', de: 'Nach einer Panne schnell wieder einsatzbereit' },
    'nav.huren': { nl: 'Tractor huren', en: 'Rent a tractor', fr: 'Louer un tracteur', de: 'Traktor mieten' },
    'nav.contact': { nl: 'Contact', en: 'Contact', fr: 'Contact', de: 'Kontakt' },
    'nav.bel': { nl: 'Bel 0473 23 57 55', en: 'Call 0473 23 57 55', fr: 'Appelez le 0473 23 57 55', de: 'Anrufen: 0473 23 57 55' },
    'bel.stef': { nl: 'Bel Stef: +32 473 23 57 55', en: 'Call Stef: +32 473 23 57 55', fr: 'Appelez Stef : +32 473 23 57 55', de: 'Stef anrufen: +32 473 23 57 55' },
    'voet.sub': { nl: 'Land- en tuinbouwmachines', en: 'Agricultural and garden machinery', fr: 'Machines agricoles et de jardin', de: 'Land- und Gartenbaumaschinen' },
    'alt.logo': { nl: 'Stef Tanghe, land- en tuinbouwmachines', en: 'Stef Tanghe, agricultural and garden machinery', fr: 'Stef Tanghe, machines agricoles et de jardin', de: 'Stef Tanghe, Land- und Gartenbaumaschinen' },

    'voet.voorwaarden': { nl: 'Huurvoorwaarden', en: 'Rental terms', fr: 'Conditions de location', de: 'Mietbedingungen' },
    'voet.privacy': { nl: 'Privacybeleid', en: 'Privacy policy', fr: 'Politique de confidentialité', de: 'Datenschutz' },
    'meta.privacy': { nl: 'Privacybeleid – Stef Tanghe', en: 'Privacy policy – Stef Tanghe', fr: 'Politique de confidentialité – Stef Tanghe', de: 'Datenschutz – Stef Tanghe' },
    'meta.voorwaarden': { nl: 'Huurvoorwaarden – Stef Tanghe', en: 'Rental terms – Stef Tanghe', fr: 'Conditions de location – Stef Tanghe', de: 'Mietbedingungen – Stef Tanghe' },

    // Homepage
    'hero.h1': { nl: 'Land- en tuinbouw&shy;machines', en: 'Agricultural &amp; garden machinery', fr: 'Machines agricoles et de jardin', de: 'Land- und Garten&shy;bau&shy;maschinen' },
    'hero.p': { nl: 'Verkoop, verhuur, onderhoud en herstellingen. Kwaliteit en service op maat, bij Stef Tanghe in Izegem.', en: 'Sales, rental, maintenance and repairs. Quality and tailored service from Stef Tanghe in Izegem.', fr: 'Vente, location, entretien et réparations. Qualité et service sur mesure, chez Stef Tanghe à Izegem.', de: 'Verkauf, Vermietung, Wartung und Reparaturen. Qualität und maßgeschneiderter Service bei Stef Tanghe in Izegem.' },
    'hero.herstel': { nl: 'Herstelling aanvragen', en: 'Request a repair', fr: 'Demander une réparation', de: 'Reparatur anfragen' },
    'diensten.titel': { nl: 'Wat Stef voor u doet', en: 'What Stef does for you', fr: 'Ce que Stef fait pour vous', de: 'Was Stef für Sie tut' },
    'dienst.verkoop': { nl: 'Nieuwe en tweedehands machines, gekozen voor uw werk en uw terrein.', en: 'New and used machines, chosen for your work and your land.', fr: 'Machines neuves et d’occasion, choisies pour votre travail et votre terrain.', de: 'Neue und gebrauchte Maschinen, passend zu Ihrer Arbeit und Ihrem Gelände.' },
    'dienst.verhuur': { nl: 'Een machine nodig voor een dag of een seizoen? Huur ze bij Stef.', en: 'Need a machine for a day or a season? Rent it from Stef.', fr: 'Besoin d’une machine pour un jour ou une saison ? Louez-la chez Stef.', de: 'Brauchen Sie eine Maschine für einen Tag oder eine Saison? Mieten Sie sie bei Stef.' },
    'dienst.onderhoud': { nl: 'Een vaste beurt, zodat uw machine klaar is als het seizoen begint.', en: 'A regular service, so your machine is ready when the season starts.', fr: 'Un entretien régulier, pour que votre machine soit prête au début de la saison.', de: 'Regelmäßige Wartung, damit Ihre Maschine zum Saisonstart bereit ist.' },
    'dienst.herstel': { nl: 'Panne? Stef zoekt de oorzaak en zet het snel en vakkundig recht.', en: 'Breakdown? Stef finds the cause and fixes it quickly and expertly.', fr: 'En panne ? Stef trouve la cause et répare rapidement et avec soin.', de: 'Panne? Stef findet die Ursache und behebt sie schnell und fachgerecht.' },
    'huur.titel': { nl: 'Kubota te huur', en: 'Kubota for rent', fr: 'Kubota à louer', de: 'Kubota zu mieten' },
    'huur.p': { nl: 'Met frontlader, en naar keuze een frees, klepelmaaier of hakselaar. Per dag, weekend of week, vanaf € 110.', en: 'With front loader, plus a rotary tiller, flail mower or wood chipper of your choice. By the day, weekend or week, from € 110.', fr: 'Avec chargeur frontal et, au choix, une fraise rotative, un broyeur à fléaux ou un broyeur de branches. À la journée, au week-end ou à la semaine, à partir de 110 €.', de: 'Mit Frontlader und wahlweise Bodenfräse, Schlegelmäher oder Häcksler. Pro Tag, Wochenende oder Woche, ab 110 €.' },
    'huur.knop': { nl: 'Stel uw huur samen', en: 'Build your rental', fr: 'Composez votre location', de: 'Miete zusammenstellen' },
    'alt.kubota.hakselaar': { nl: 'Kubota met hakselaar aangekoppeld', en: 'Kubota with wood chipper attached', fr: 'Kubota avec broyeur de branches attelé', de: 'Kubota mit angebautem Häcksler' },
    'aanbod.titel': { nl: 'Nu te koop', en: 'For sale now', fr: 'Actuellement en vente', de: 'Aktuell zu verkaufen' },
    'over.titel': { nl: 'Dit is Stef', en: 'Meet Stef', fr: 'Voici Stef', de: 'Das ist Stef' },
    'over.p': { nl: 'Machines voor land- en tuinbouw, reiniging en meer. Kwaliteit en service op maat.', en: 'Machines for agriculture, gardening, cleaning and more. Quality and tailored service.', fr: 'Machines pour l’agriculture, le jardinage, le nettoyage et plus encore. Qualité et service sur mesure.', de: 'Maschinen für Land- und Gartenbau, Reinigung und mehr. Qualität und maßgeschneiderter Service.' },
    'alt.bord': { nl: 'Het bord van Stef Tanghe langs een veldweg', en: 'The Stef Tanghe sign along a farm road', fr: 'Le panneau Stef Tanghe le long d’un chemin de campagne', de: 'Das Schild von Stef Tanghe an einem Feldweg' },
    'contact.home': { nl: 'Machine stil?<br>Bel Stef.', en: 'Machine down?<br>Call Stef.', fr: 'Machine à l’arrêt ?<br>Appelez Stef.', de: 'Maschine steht still?<br>Rufen Sie Stef an.' },

    // Verhuurpagina
    'v.h1': { nl: 'Huur de Kubota', en: 'Rent the Kubota', fr: 'Louez le Kubota', de: 'Mieten Sie den Kubota' },
    'v.onder': { nl: 'B1820 met frontlader, werktuigen naar keuze', en: 'B1820 with front loader, implements of your choice', fr: 'B1820 avec chargeur frontal, outils au choix', de: 'B1820 mit Frontlader, Anbaugeräte nach Wahl' },
    'v.intro': { nl: 'Compact genoeg voor de tuin, sterk genoeg voor de weide. Kies wat u wilt doen, Stef zet de juiste werktuigen klaar.', en: 'Compact enough for the garden, strong enough for the field. Choose your job and Stef gets the right implements ready.', fr: 'Assez compact pour le jardin, assez robuste pour la prairie. Choisissez votre travail, Stef prépare les bons outils.', de: 'Kompakt genug für den Garten, stark genug für die Weide. Wählen Sie Ihre Arbeit, Stef stellt die passenden Geräte bereit.' },
    'v.klus.titel': { nl: 'Wat wilt u doen?', en: 'What do you need to do?', fr: 'Que voulez-vous faire ?', de: 'Was möchten Sie tun?' },
    'v.klus.sub': { nl: 'Kies een klus, dan staan de juiste werktuigen al aangevinkt.', en: 'Pick a job and the right implements are selected for you.', fr: 'Choisissez un travail et les bons outils sont déjà cochés.', de: 'Wählen Sie eine Arbeit, dann sind die passenden Geräte schon ausgewählt.' },
    'v.stap1': { nl: '1. Hoe lang?', en: '1. How long?', fr: '1. Pour combien de temps ?', de: '1. Wie lange?' },
    'v.stap2': { nl: '2. Werktuigen erbij', en: '2. Add implements', fr: '2. Ajouter des outils', de: '2. Anbaugeräte dazu' },
    'v.stap2.sub': { nl: 'De frontlader zit altijd inbegrepen.', en: 'The front loader is always included.', fr: 'Le chargeur frontal est toujours inclus.', de: 'Der Frontlader ist immer inklusive.' },
    'v.stap3': { nl: '3. Vanaf wanneer?', en: '3. Starting when?', fr: '3. À partir de quand ?', de: '3. Ab wann?' },
    'v.uwhuur': { nl: 'Uw huur', en: 'Your rental', fr: 'Votre location', de: 'Ihre Miete' },
    'v.totaal': { nl: 'Totaal', en: 'Total', fr: 'Total', de: 'Gesamt' },
    'v.wa': { nl: 'Aanvraag sturen via WhatsApp', en: 'Send request via WhatsApp', fr: 'Envoyer la demande via WhatsApp', de: 'Anfrage per WhatsApp senden' },
    'v.mail': { nl: 'Mail uw aanvraag', en: 'Email your request', fr: 'Envoyer par e-mail', de: 'Anfrage per E-Mail' },
    'v.bevestigt': { nl: 'Stef bevestigt uw reservatie persoonlijk.', en: 'Stef confirms your booking personally.', fr: 'Stef confirme votre réservation personnellement.', de: 'Stef bestätigt Ihre Reservierung persönlich.' },
    'contact.verhuur': { nl: 'Vragen over de huur?<br>Bel Stef.', en: 'Questions about renting?<br>Call Stef.', fr: 'Des questions sur la location ?<br>Appelez Stef.', de: 'Fragen zur Miete?<br>Rufen Sie Stef an.' },

    // Verhuur: dynamische tekst (js/verhuur.js)
    'p.dag': { nl: 'Dag', en: 'Day', fr: 'Jour', de: 'Tag' },
    'p.weekend': { nl: 'Weekend', en: 'Weekend', fr: 'Week-end', de: 'Wochenende' },
    'p.week': { nl: 'Week', en: 'Week', fr: 'Semaine', de: 'Woche' },
    'pk.dag': { nl: 'dag', en: 'day', fr: 'jour', de: 'Tag' },
    'pk.weekend': { nl: 'weekend', en: 'weekend', fr: 'week-end', de: 'Wochenende' },
    'pk.week': { nl: 'week', en: 'week', fr: 'semaine', de: 'Woche' },
    'per': { nl: 'per', en: 'per', fr: 'par', de: 'pro' },
    'vanaf': { nl: 'vanaf', en: 'from', fr: 'à partir du', de: 'ab' },
    'en': { nl: 'en', en: 'and', fr: 'et', de: 'und' },
    'periode': { nl: 'Periode', en: 'Period', fr: 'Période', de: 'Zeitraum' },
    'lijn.kubota': { nl: 'Kubota B1820 + frontlader', en: 'Kubota B1820 + front loader', fr: 'Kubota B1820 + chargeur frontal', de: 'Kubota B1820 + Frontlader' },
    'w.frees': { nl: 'Frees', en: 'Rotary tiller', fr: 'Fraise rotative', de: 'Bodenfräse' },
    'w.frees.uitleg': { nl: 'Grond losmaken en zaaiklaar leggen.', en: 'Loosen the soil and prepare a seedbed.', fr: 'Ameublir le sol et préparer le semis.', de: 'Boden lockern und saatfertig machen.' },
    'w.klepelmaaier': { nl: 'Klepelmaaier', en: 'Flail mower', fr: 'Broyeur à fléaux', de: 'Schlegelmäher' },
    'w.klepelmaaier.uitleg': { nl: 'Hoog gras, ruigte en bermen maaien.', en: 'Mow tall grass, rough ground and verges.', fr: 'Faucher herbes hautes, friches et talus.', de: 'Hohes Gras, Brachflächen und Böschungen mähen.' },
    'w.hakselaar': { nl: 'Hakselaar', en: 'Wood chipper', fr: 'Broyeur de branches', de: 'Häcksler' },
    'w.hakselaar.uitleg': { nl: 'Snoeihout en takken versnipperen.', en: 'Shred prunings and branches.', fr: 'Broyer les branches et déchets de taille.', de: 'Schnittholz und Äste häckseln.' },
    'k.frezen': { nl: 'Grond frezen', en: 'Till the soil', fr: 'Fraiser le sol', de: 'Boden fräsen' },
    'k.hakselen': { nl: 'Snoeihout hakselen', en: 'Chip prunings', fr: 'Broyer des branches', de: 'Schnittholz häckseln' },
    'k.maaien': { nl: 'Weide of ruigte maaien', en: 'Mow a field or rough ground', fr: 'Faucher une prairie ou une friche', de: 'Weide oder Brache mähen' },
    'k.verzetten': { nl: 'Grond of zand verzetten', en: 'Move soil or sand', fr: 'Déplacer de la terre ou du sable', de: 'Erde oder Sand bewegen' },
    'k.lader': { nl: 'Kubota met frontlader', en: 'Kubota with front loader', fr: 'Kubota avec chargeur frontal', de: 'Kubota mit Frontlader' },
    'msg.start': { nl: 'Hallo Stef, ik wil graag de Kubota huren voor 1', en: 'Hello Stef, I would like to rent the Kubota for 1', fr: 'Bonjour Stef, je souhaite louer le Kubota pour 1', de: 'Hallo Stef, ich möchte den Kubota für 1' },
    'msg.met': { nl: 'met', en: 'with', fr: 'avec', de: 'mit' },
    'msg.eind': { nl: 'Totaal volgens de website:', en: 'Total according to the website:', fr: 'Total selon le site :', de: 'Gesamt laut Website:' },
    'msg.de.huren': { nl: '', en: '', fr: '', de: ' mieten' },
    'msg.onderwerp': { nl: 'Huuraanvraag Kubota', en: 'Kubota rental request', fr: 'Demande de location Kubota', de: 'Mietanfrage Kubota' }
  };

  function leesTaal() {
    var q = new URLSearchParams(location.search).get('lang');
    if (q && TALEN[q]) return q;
    try { var s = localStorage.getItem('taal'); if (s && TALEN[s]) return s; } catch (e) {}
    return 'nl';
  }

  var huidig = leesTaal();
  function t(key) { var r = T[key]; return r ? (r[huidig] != null ? r[huidig] : r.nl) : key; }

  function pasToe() {
    document.documentElement.lang = huidig === 'nl' ? 'nl-BE' : huidig;
    document.querySelectorAll('[data-i18n]').forEach(function (el) { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) { el.innerHTML = t(el.dataset.i18nHtml); });
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.dataset.i18nAttr.split(';').forEach(function (paar) {
        var p = paar.split(':'); el.setAttribute(p[0].trim(), t(p[1].trim()));
      });
    });
    var titel = document.querySelector('meta[name="i18n-title"]');
    if (titel) document.title = t(titel.content);
    var desc = document.querySelector('meta[name="description"][data-key]');
    if (desc) desc.content = t(desc.dataset.key);
    // Interne links behouden de gekozen taal
    document.querySelectorAll('a[data-intern]').forEach(function (a) {
      if (!a.dataset.basis) a.dataset.basis = a.getAttribute('href');
      var basis = a.dataset.basis, hash = '';
      var i = basis.indexOf('#'); if (i > -1) { hash = basis.slice(i); basis = basis.slice(0, i); }
      a.setAttribute('href', basis + (huidig === 'nl' ? '' : '?lang=' + huidig) + hash);
    });
    tekenKiezer();
    document.dispatchEvent(new CustomEvent('taal', { detail: huidig }));
  }

  // Taalkiezer rechtsboven
  var kiezer = document.getElementById('taalkiezer');
  function tekenKiezer() {
    if (!kiezer) return;
    var knop = kiezer.querySelector('.taal-knop');
    var lijst = kiezer.querySelector('.taal-lijst');
    knop.innerHTML = vlag(huidig, 36) + '<span class="sr-only">' + TALEN[huidig].naam + '</span>';
    knop.setAttribute('aria-label', t('taal.kiezen') + ': ' + TALEN[huidig].naam);
    lijst.innerHTML = '';
    Object.keys(TALEN).forEach(function (code) {
      if (code === huidig) return;
      var b = document.createElement('button');
      b.type = 'button'; b.lang = code; b.className = 'taal-optie';
      b.innerHTML = vlag(code, 30) + '<span>' + TALEN[code].naam + '</span>';
      b.addEventListener('click', function () { zet(code); sluit(); knop.focus(); });
      lijst.appendChild(b);
    });
  }
  function sluit() {
    if (!kiezer) return;
    kiezer.querySelector('.taal-knop').setAttribute('aria-expanded', 'false');
    kiezer.querySelector('.taal-lijst').classList.remove('open');
  }
  if (kiezer) {
    kiezer.querySelector('.taal-knop').addEventListener('click', function (e) {
      e.stopPropagation();
      var open = this.getAttribute('aria-expanded') !== 'true';
      this.setAttribute('aria-expanded', open ? 'true' : 'false');
      kiezer.querySelector('.taal-lijst').classList.toggle('open', open);
    });
    document.addEventListener('click', function (e) { if (!kiezer.contains(e.target)) sluit(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') sluit(); });
  }

  function zet(code) {
    if (!TALEN[code]) return;
    huidig = code;
    try { localStorage.setItem('taal', code); } catch (e) {}
    var url = new URL(location.href);
    if (code === 'nl') url.searchParams.delete('lang'); else url.searchParams.set('lang', code);
    history.replaceState(null, '', url);
    pasToe();
  }

  window.ST = { t: t, taal: function () { return huidig; }, locale: function () { return TALEN[huidig].locale; }, zet: zet };
  pasToe();
})();
