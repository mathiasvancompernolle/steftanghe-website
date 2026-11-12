// Verkoopaanbod: categorieën en machines.
// Machine toevoegen of schrappen? Pas enkel de lijst AANBOD hieronder aan.
// merken: vul in zodra Stef bevestigt welke merken hij verkoopt, bv. ['Stiga', 'Honda'].
(function () {
  var CATS = {
    tuin:      { nl: 'Tuin', en: 'Garden', fr: 'Jardin', de: 'Garten' },
    reiniging: { nl: 'Reiniging', en: 'Cleaning', fr: 'Nettoyage', de: 'Reinigung' },
    aanbouw:   { nl: 'Aanbouwdelen', en: 'Implements', fr: 'Outils attelés', de: 'Anbaugeräte' }
  };

  var AANBOD = [
    // Tuin
    { cat: 'tuin', merken: [], naam: { nl: 'Compacte tractoren', en: 'Compact tractors', fr: 'Tracteurs compacts', de: 'Kompakttraktoren' },
      tekst: { nl: 'Wendbaar en sterk, voor grote tuinen, weides en kleine landbouw.', en: 'Agile and strong, for large gardens, paddocks and small farms.', fr: 'Maniables et robustes, pour grands jardins, prairies et petite agriculture.', de: 'Wendig und stark, für große Gärten, Weiden und kleine Landwirtschaft.' } },
    { cat: 'tuin', merken: [], naam: { nl: 'Zitmaaiers', en: 'Ride-on mowers', fr: 'Tondeuses autoportées', de: 'Aufsitzmäher' },
      tekst: { nl: 'Comfortabel grote gazons maaien, met of zonder opvangbak.', en: 'Mow large lawns in comfort, with or without a grass collector.', fr: 'Tondre confortablement de grandes pelouses, avec ou sans bac.', de: 'Große Rasenflächen bequem mähen, mit oder ohne Fangkorb.' } },
    { cat: 'tuin', merken: [], naam: { nl: 'Zero-turn zitmaaiers', en: 'Zero-turn mowers', fr: 'Tondeuses zero-turn', de: 'Zero-Turn-Mäher' },
      tekst: { nl: 'Draaien op hun plaats: snel en precies rond bomen en borders.', en: 'Turn on the spot: fast and precise around trees and borders.', fr: 'Tournent sur place : rapides et précises autour des arbres et massifs.', de: 'Drehen auf der Stelle: schnell und präzise um Bäume und Beete.' } },
    { cat: 'tuin', merken: [], naam: { nl: 'Frontmaaiers', en: 'Front mowers', fr: 'Tondeuses frontales', de: 'Frontmäher' },
      tekst: { nl: 'Maaidek vooraan, ideaal om onder struiken en tot tegen randen te maaien.', en: 'Deck at the front, ideal for mowing under shrubs and right up to edges.', fr: 'Plateau à l’avant, idéal sous les arbustes et le long des bordures.', de: 'Mähwerk vorne, ideal unter Sträuchern und bis an Kanten.' } },
    { cat: 'tuin', merken: [], naam: { nl: 'Robotmaaiers', en: 'Robotic mowers', fr: 'Robots tondeuses', de: 'Mähroboter' },
      tekst: { nl: 'Maait zelfstandig en stil. Stef helpt bij plaatsing en installatie.', en: 'Mows on its own, quietly. Stef helps with setup and installation.', fr: 'Tond seul et en silence. Stef aide à l’installation.', de: 'Mäht selbstständig und leise. Stef hilft bei der Installation.' } },
    { cat: 'tuin', merken: [], naam: { nl: 'Loopmaaiers op benzine', en: 'Petrol lawn mowers', fr: 'Tondeuses thermiques', de: 'Benzin-Rasenmäher' },
      tekst: { nl: 'Krachtig en betrouwbaar, ook voor hoog of nat gras.', en: 'Powerful and reliable, even in long or wet grass.', fr: 'Puissantes et fiables, même dans l’herbe haute ou humide.', de: 'Kraftvoll und zuverlässig, auch bei hohem oder nassem Gras.' } },
    { cat: 'tuin', merken: [], naam: { nl: 'Loopmaaiers op accu', en: 'Battery lawn mowers', fr: 'Tondeuses à batterie', de: 'Akku-Rasenmäher' },
      tekst: { nl: 'Stil, licht en zonder uitlaatgassen. Eén accu voor meerdere toestellen.', en: 'Quiet, light and emission-free. One battery for several tools.', fr: 'Silencieuses, légères et sans émissions. Une batterie pour plusieurs outils.', de: 'Leise, leicht und abgasfrei. Ein Akku für mehrere Geräte.' } },
    { cat: 'tuin', merken: [], naam: { nl: 'Hakselaars', en: 'Wood chippers', fr: 'Broyeurs de branches', de: 'Häcksler' },
      tekst: { nl: 'Snoeihout en takken snel omzetten in bruikbare houtsnippers.', en: 'Turn prunings and branches into useful wood chips.', fr: 'Transformez branches et tailles en copeaux utiles.', de: 'Schnittholz und Äste schnell zu Hackschnitzeln verarbeiten.' } },
    { cat: 'tuin', merken: [], naam: { nl: 'Verticuteermachines', en: 'Scarifiers', fr: 'Scarificateurs', de: 'Vertikutierer' },
      tekst: { nl: 'Mos en vilt uit het gazon halen voor een gezond grasveld.', en: 'Remove moss and thatch for a healthy lawn.', fr: 'Retirer mousse et feutre pour une pelouse saine.', de: 'Moos und Filz entfernen für einen gesunden Rasen.' } },
    { cat: 'tuin', merken: [], naam: { nl: 'Motoculteurs en hakfrezen', en: 'Tillers and cultivators', fr: 'Motoculteurs et motobineuses', de: 'Motorhacken und Einachser' },
      tekst: { nl: 'Grond losmaken en de moestuin klaarleggen.', en: 'Loosen soil and prepare the vegetable garden.', fr: 'Ameublir le sol et préparer le potager.', de: 'Boden lockern und den Gemüsegarten vorbereiten.' } },
    { cat: 'tuin', merken: [], naam: { nl: 'Stronkenfrezen', en: 'Stump grinders', fr: 'Rogneuses de souches', de: 'Stubbenfräsen' },
      tekst: { nl: 'Boomstronken tot onder het maaiveld wegfrezen.', en: 'Grind tree stumps away below ground level.', fr: 'Éliminer les souches sous le niveau du sol.', de: 'Baumstümpfe bis unter Bodenniveau wegfräsen.' } },
    { cat: 'tuin', merken: [], naam: { nl: 'Kettingzagen', en: 'Chainsaws', fr: 'Tronçonneuses', de: 'Kettensägen' },
      tekst: { nl: 'Op benzine of accu, voor brandhout, snoeiwerk en vellen.', en: 'Petrol or battery, for firewood, pruning and felling.', fr: 'Thermiques ou à batterie, pour le bois de chauffage, l’élagage et l’abattage.', de: 'Benzin oder Akku, für Brennholz, Schnitt und Fällung.' } },
    { cat: 'tuin', merken: [], naam: { nl: 'Houtklievers', en: 'Log splitters', fr: 'Fendeuses de bûches', de: 'Holzspalter' },
      tekst: { nl: 'Zonder moeite stammen klieven tot haardhout.', en: 'Split logs into firewood without the effort.', fr: 'Fendre les bûches sans effort.', de: 'Stämme mühelos zu Kaminholz spalten.' } },
    { cat: 'tuin', merken: [], naam: { nl: 'Heggenscharen', en: 'Hedge trimmers', fr: 'Taille-haies', de: 'Heckenscheren' },
      tekst: { nl: 'Strakke hagen, op benzine of accu, ook met verlengsteel.', en: 'Neat hedges, petrol or battery, also with extension pole.', fr: 'Des haies nettes, thermiques ou à batterie, aussi sur perche.', de: 'Saubere Hecken, Benzin oder Akku, auch mit Verlängerung.' } },
    { cat: 'tuin', merken: [], naam: { nl: 'Snoeizagen en snoeischaren', en: 'Pruning saws and shears', fr: 'Scies et sécateurs d’élagage', de: 'Astsägen und Gartenscheren' },
      tekst: { nl: 'Handgereedschap van kwaliteit voor nauwkeurig snoeiwerk.', en: 'Quality hand tools for precise pruning.', fr: 'Outils manuels de qualité pour une taille précise.', de: 'Hochwertiges Handwerkzeug für präzisen Schnitt.' } },
    { cat: 'tuin', merken: [], naam: { nl: 'Bladblazers en bladzuigers', en: 'Leaf blowers and vacuums', fr: 'Souffleurs et aspirateurs de feuilles', de: 'Laubbläser und Laubsauger' },
      tekst: { nl: 'Paden en gazons snel bladvrij, op benzine of accu.', en: 'Clear paths and lawns of leaves quickly, petrol or battery.', fr: 'Allées et pelouses vite dégagées, thermiques ou à batterie.', de: 'Wege und Rasen schnell laubfrei, Benzin oder Akku.' } },
    { cat: 'tuin', merken: [], naam: { nl: 'Bosmaaiers en trimmers', en: 'Brush cutters and trimmers', fr: 'Débroussailleuses et coupe-bordures', de: 'Freischneider und Trimmer' },
      tekst: { nl: 'Voor randen, taluds en ruigte waar de maaier niet komt.', en: 'For edges, banks and rough ground the mower can’t reach.', fr: 'Pour bordures, talus et friches inaccessibles à la tondeuse.', de: 'Für Kanten, Böschungen und Gestrüpp, wo der Mäher nicht hinkommt.' } },
    { cat: 'tuin', merken: [], naam: { nl: 'Sproeitoestellen', en: 'Sprayers', fr: 'Pulvérisateurs', de: 'Sprühgeräte' },
      tekst: { nl: 'Rugspuiten en sproeiers voor tuin, boomgaard en paden.', en: 'Backpack and hand sprayers for garden, orchard and paths.', fr: 'Pulvérisateurs à dos et à main pour jardin, verger et allées.', de: 'Rücken- und Handsprühgeräte für Garten, Obstgarten und Wege.' } },

    // Reiniging
    { cat: 'reiniging', merken: [], naam: { nl: 'Hogedrukreinigers', en: 'Pressure washers', fr: 'Nettoyeurs haute pression', de: 'Hochdruckreiniger' },
      tekst: { nl: 'Koud- en warmwater, voor terras, oprit, voertuigen en machines.', en: 'Cold and hot water, for patios, driveways, vehicles and machines.', fr: 'Eau froide et chaude, pour terrasses, allées, véhicules et machines.', de: 'Kalt- und Heißwasser, für Terrasse, Einfahrt, Fahrzeuge und Maschinen.' } },
    { cat: 'reiniging', merken: [], naam: { nl: 'Veegmachines', en: 'Sweepers', fr: 'Balayeuses', de: 'Kehrmaschinen' },
      tekst: { nl: 'Buitenterreinen, erven en werkplaatsen snel proper.', en: 'Clean yards, farmyards and workshops in no time.', fr: 'Cours, extérieurs et ateliers propres en un rien de temps.', de: 'Hofflächen, Außenbereiche und Werkstätten schnell sauber.' } },
    { cat: 'reiniging', merken: [], naam: { nl: 'Nat- en droogzuigers', en: 'Wet and dry vacuums', fr: 'Aspirateurs eau et poussière', de: 'Nass- und Trockensauger' },
      tekst: { nl: 'Voor werkplaats, garage en bouwwerf: stof, vuil en water.', en: 'For workshop, garage and site: dust, dirt and water.', fr: 'Pour atelier, garage et chantier : poussière, saleté et eau.', de: 'Für Werkstatt, Garage und Baustelle: Staub, Schmutz und Wasser.' } },

    // Aanbouwdelen
    { cat: 'aanbouw', merken: [], naam: { nl: 'Frezen', en: 'Rotary tillers', fr: 'Fraises rotatives', de: 'Bodenfräsen' },
      tekst: { nl: 'Grond zaaiklaar leggen achter de compacte tractor.', en: 'Prepare a seedbed behind the compact tractor.', fr: 'Préparer le lit de semence derrière le tracteur compact.', de: 'Saatfertiger Boden hinter dem Kompakttraktor.' } },
    { cat: 'aanbouw', merken: [], naam: { nl: 'Klepelmaaiers', en: 'Flail mowers', fr: 'Broyeurs à fléaux', de: 'Schlegelmäher' },
      tekst: { nl: 'Hoog gras, ruigte en bermen in één werkgang.', en: 'Tall grass, rough ground and verges in one pass.', fr: 'Herbes hautes, friches et accotements en un passage.', de: 'Hohes Gras, Brachen und Böschungen in einem Arbeitsgang.' } },
    { cat: 'aanbouw', merken: [], naam: { nl: 'Hakselaars (aftakas)', en: 'PTO wood chippers', fr: 'Broyeurs sur prise de force', de: 'Zapfwellen-Häcksler' },
      tekst: { nl: 'Grote hoeveelheden snoeihout, aangedreven door de tractor.', en: 'Large volumes of prunings, driven by the tractor.', fr: 'Grandes quantités de branches, entraîné par le tracteur.', de: 'Große Mengen Schnittholz, vom Traktor angetrieben.' } },
    { cat: 'aanbouw', merken: [], naam: { nl: 'Gazonmaaiers en maaidekken', en: 'Lawn mower decks', fr: 'Plateaux de coupe', de: 'Mähwerke' },
      tekst: { nl: 'Een mooi gazon maaien met de compacte tractor.', en: 'Mow a fine lawn with the compact tractor.', fr: 'Une belle pelouse avec le tracteur compact.', de: 'Schöner Rasen mit dem Kompakttraktor.' } },
    { cat: 'aanbouw', merken: [], naam: { nl: 'Bermmaaiers en maaiarmen', en: 'Verge mowers and reach arms', fr: 'Faucheuses d’accotement et bras', de: 'Böschungsmäher und Ausleger' },
      tekst: { nl: 'Bermen, sloten en taluds veilig onderhouden.', en: 'Maintain verges, ditches and banks safely.', fr: 'Entretenir accotements, fossés et talus en sécurité.', de: 'Böschungen, Gräben und Ränder sicher pflegen.' } },
    { cat: 'aanbouw', merken: [], naam: { nl: 'Houtklievers (aftakas)', en: 'PTO log splitters', fr: 'Fendeuses sur prise de force', de: 'Zapfwellen-Holzspalter' },
      tekst: { nl: 'Krachtig klieven met de hydrauliek van de tractor.', en: 'Powerful splitting with the tractor’s hydraulics.', fr: 'Fendre puissamment avec l’hydraulique du tracteur.', de: 'Kraftvoll spalten mit der Traktorhydraulik.' } },
    { cat: 'aanbouw', merken: [], naam: { nl: 'Strooiers en sproeimachines', en: 'Spreaders and sprayers', fr: 'Épandeurs et pulvérisateurs', de: 'Streuer und Spritzen' },
      tekst: { nl: 'Kunstmest, zout of sproeimiddel gelijkmatig verdelen.', en: 'Spread fertiliser, salt or spray evenly.', fr: 'Répartir engrais, sel ou produit de manière uniforme.', de: 'Dünger, Salz oder Spritzmittel gleichmäßig verteilen.' } }
  ];

  var t = window.ST.t;
  var lijst = document.getElementById('producten');
  var filters = document.getElementById('filters');
  var teller = document.getElementById('teller');
  var gekozen = (location.hash || '').replace('#', '');
  if (!CATS[gekozen]) gekozen = 'alle';

  function tal() { return window.ST.taal(); }

  function tekenFilters() {
    filters.innerHTML = '';
    ['alle'].concat(Object.keys(CATS)).forEach(function (c) {
      var aantal = c === 'alle' ? AANBOD.length : AANBOD.filter(function (a) { return a.cat === c; }).length;
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'filter'; b.dataset.cat = c;
      b.setAttribute('aria-pressed', c === gekozen ? 'true' : 'false');
      b.innerHTML = (c === 'alle' ? t('vk.alle') : CATS[c][tal()]) + ' <span>' + aantal + '</span>';
      b.addEventListener('click', function () {
        gekozen = c;
        history.replaceState(null, '', c === 'alle' ? location.pathname + location.search : '#' + c);
        teken();
      });
      filters.appendChild(b);
    });
  }

  function waLink(naam) {
    var tekst = t('vk.msg') + ' ' + naam.toLowerCase() + '. ' + t('vk.msg2');
    return 'https://wa.me/32473235755?text=' + encodeURIComponent(tekst);
  }

  function tekenProducten() {
    var items = AANBOD.filter(function (a) { return gekozen === 'alle' || a.cat === gekozen; });
    teller.textContent = items.length + ' ' + t(items.length === 1 ? 'vk.type' : 'vk.types');
    lijst.innerHTML = items.map(function (a) {
      var naam = a.naam[tal()];
      var merken = a.merken.length
        ? '<p class="product-merken">' + a.merken.join(' | ') + '</p>'
        : '<p class="product-merken todo">Merken: nog toe te voegen</p>';
      return '<article class="product product-' + a.cat + '">' +
        '<span class="product-cat">' + CATS[a.cat][tal()] + '</span>' +
        '<h2>' + naam + '</h2>' +
        '<p class="product-tekst">' + a.tekst[tal()] + '</p>' +
        merken +
        '<div class="product-knoppen">' +
          '<a class="btn btn-groen" href="' + waLink(naam) + '" target="_blank" rel="noopener">' + t('vk.info') + '</a>' +
          '<a class="btn btn-rand" href="tel:+32473235755">' + t('vk.bel') + '</a>' +
        '</div></article>';
    }).join('');
  }

  function teken() { tekenFilters(); tekenProducten(); }
  document.addEventListener('taal', teken);
  window.addEventListener('hashchange', function () {
    var h = location.hash.replace('#', ''); gekozen = CATS[h] ? h : 'alle'; teken();
  });
  teken();
})();
