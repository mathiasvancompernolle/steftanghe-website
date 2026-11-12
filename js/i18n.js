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
    'meta.home.title': { nl: 'Stef Tanghe – Tuin- en reinigingsmachines in Izegem en Meulebeke', en: 'Stef Tanghe – Garden and cleaning machinery in Izegem and Meulebeke', fr: 'Stef Tanghe – Machines de jardin et de nettoyage à Izegem et Meulebeke', de: 'Stef Tanghe – Garten- und Reinigungsmaschinen in Izegem und Meulebeke' },
    'meta.home.desc': { nl: 'Verhuur, verkoop en herstel van tuin- en reinigingsmachines in Izegem en Meulebeke. Onderhoud ook voor Honda, Husqvarna en elders gekochte machines.', en: 'Rental, sales and repair of garden and cleaning machinery in Izegem and Meulebeke. Servicing also for Honda, Husqvarna and machines bought elsewhere.', fr: 'Location, vente et réparation de machines de jardin et de nettoyage à Izegem et Meulebeke. Entretien aussi pour Honda, Husqvarna et les machines achetées ailleurs.', de: 'Vermietung, Verkauf und Reparatur von Garten- und Reinigungsmaschinen in Izegem und Meulebeke. Wartung auch für Honda, Husqvarna und anderswo gekaufte Maschinen.' },
    'meta.verhuur.title': { nl: 'Kubota huren in Izegem – Stef Tanghe', en: 'Rent a Kubota in Izegem – Stef Tanghe', fr: 'Louer un Kubota à Izegem – Stef Tanghe', de: 'Kubota mieten in Izegem – Stef Tanghe' },
    'meta.verhuur.desc': { nl: 'Huur een Kubota B1820 met frontlader in Izegem, met frees, klepelmaaier of hakselaar. Per dag, weekend of week.', en: 'Rent a Kubota B1820 with front loader in Izegem, with rotary tiller, flail mower or wood chipper. By the day, weekend or week.', fr: 'Louez un Kubota B1820 avec chargeur frontal à Izegem, avec fraise rotative, broyeur à fléaux ou broyeur de branches. À la journée, au week-end ou à la semaine.', de: 'Mieten Sie einen Kubota B1820 mit Frontlader in Izegem, mit Bodenfräse, Schlegelmäher oder Häcksler. Pro Tag, Wochenende oder Woche.' },
    'taal.kiezen': { nl: 'Taal kiezen', en: 'Choose language', fr: 'Choisir la langue', de: 'Sprache wählen' },
    'menu.open': { nl: 'Menu openen', en: 'Open menu', fr: 'Ouvrir le menu', de: 'Menü öffnen' },
    'menu.sluiten': { nl: 'Menu sluiten', en: 'Close menu', fr: 'Fermer le menu', de: 'Menü schließen' },
    'nav.diensten': { nl: 'Diensten', en: 'Services', fr: 'Services', de: 'Leistungen' },
    'nav.verkoop': { nl: 'Verkoop', en: 'Sales', fr: 'Vente', de: 'Verkauf' },
    'nav.verkoop.sub': { nl: 'Tuin- en reinigingsmachines', en: 'Garden and cleaning machinery', fr: 'Machines de jardin et de nettoyage', de: 'Garten- und Reinigungsmaschinen' },
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
    'voet.sub': { nl: 'Tuin- en reinigingsmachines', en: 'Garden and cleaning machinery', fr: 'Machines de jardin et de nettoyage', de: 'Garten- und Reinigungsmaschinen' },
    'alt.logo': { nl: 'Stef Tanghe, land- en tuinbouwmachines', en: 'Stef Tanghe, agricultural and garden machinery', fr: 'Stef Tanghe, machines agricoles et de jardin', de: 'Stef Tanghe, Land- und Gartenbaumaschinen' },

    'voet.voorwaarden': { nl: 'Huurvoorwaarden', en: 'Rental terms', fr: 'Conditions de location', de: 'Mietbedingungen' },
    'voet.privacy': { nl: 'Privacybeleid', en: 'Privacy policy', fr: 'Politique de confidentialité', de: 'Datenschutz' },
    'meta.privacy': { nl: 'Privacybeleid – Stef Tanghe', en: 'Privacy policy – Stef Tanghe', fr: 'Politique de confidentialité – Stef Tanghe', de: 'Datenschutz – Stef Tanghe' },
    'meta.voorwaarden': { nl: 'Huurvoorwaarden – Stef Tanghe', en: 'Rental terms – Stef Tanghe', fr: 'Conditions de location – Stef Tanghe', de: 'Mietbedingungen – Stef Tanghe' },

    // Homepage
    'hero.h1': { nl: 'Tuin- en reinigings&shy;machines', en: 'Garden &amp; cleaning machinery', fr: 'Machines de jardin et de nettoyage', de: 'Garten- und Reinigungsmaschinen' },
    'hero.p': { nl: 'Verkoop, verhuur en herstel in Izegem en Meulebeke. Voor de doe-het-zelver én de vakman.', en: 'Sales, rental and repair in Izegem and Meulebeke. For DIY gardeners and professionals alike.', fr: 'Vente, location et réparation à Izegem et Meulebeke. Pour les bricoleurs comme pour les professionnels.', de: 'Verkauf, Vermietung und Reparatur in Izegem und Meulebeke. Für Heimwerker und Profis.' },
    'hero.herstel': { nl: 'Herstelling aanvragen', en: 'Request a repair', fr: 'Demander une réparation', de: 'Reparatur anfragen' },
    'diensten.titel': { nl: 'Wat Stef voor je doet', en: 'What Stef does for you', fr: 'Ce que Stef fait pour vous', de: 'Was Stef für Sie tut' },
    'dienst.verkoop': { nl: 'Hoogwaardige tuin- en reinigingsmachines, met advies en service na aankoop.', en: 'High-quality garden and cleaning machinery, with advice and after-sales service.', fr: 'Machines de jardin et de nettoyage de qualité, avec conseils et service après-vente.', de: 'Hochwertige Garten- und Reinigungsmaschinen, mit Beratung und Kundendienst.' },
    'dienst.verhuur': { nl: 'Een machine nodig voor een dag of een seizoen? Huur ze uit onze verhuurvloot.', en: 'Need a machine for a day or a season? Rent it from our rental fleet.', fr: 'Besoin d’une machine pour un jour ou une saison ? Louez-la dans notre parc de location.', de: 'Brauchen Sie eine Maschine für einen Tag oder eine Saison? Mieten Sie sie aus unserem Mietpark.' },
    'dienst.onderhoud': { nl: 'Een vaste beurt, zodat je machine klaar is als het seizoen begint.', en: 'A regular service, so your machine is ready when the season starts.', fr: 'Un entretien régulier, pour que votre machine soit prête au début de la saison.', de: 'Regelmäßige Wartung, damit Ihre Maschine zum Saisonstart bereit ist.' },
    'dienst.herstel': { nl: 'Ook voor Honda, Husqvarna en machines die je elders kocht. Ruime voorraad wisselstukken.', en: 'Also for Honda, Husqvarna and machines bought elsewhere. Large stock of spare parts.', fr: 'Aussi pour Honda, Husqvarna et les machines achetées ailleurs. Large stock de pièces de rechange.', de: 'Auch für Honda, Husqvarna und anderswo gekaufte Maschinen. Großer Ersatzteilvorrat.' },
    'huur.titel': { nl: 'Kubota te huur', en: 'Kubota for rent', fr: 'Kubota à louer', de: 'Kubota zu mieten' },
    'huur.p': { nl: 'Met frontlader, en naar keuze een frees, klepelmaaier of hakselaar. Per dag, weekend of week, vanaf € 110.', en: 'With front loader, plus a rotary tiller, flail mower or wood chipper of your choice. By the day, weekend or week, from € 110.', fr: 'Avec chargeur frontal et, au choix, une fraise rotative, un broyeur à fléaux ou un broyeur de branches. À la journée, au week-end ou à la semaine, à partir de 110 €.', de: 'Mit Frontlader und wahlweise Bodenfräse, Schlegelmäher oder Häcksler. Pro Tag, Wochenende oder Woche, ab 110 €.' },
    'huur.knop': { nl: 'Stel uw huur samen', en: 'Build your rental', fr: 'Composez votre location', de: 'Miete zusammenstellen' },
    'alt.kubota.hakselaar': { nl: 'Kubota met hakselaar aangekoppeld', en: 'Kubota with wood chipper attached', fr: 'Kubota avec broyeur de branches attelé', de: 'Kubota mit angebautem Häcksler' },
    'aanbod.titel': { nl: 'Wat Stef verkoopt', en: 'What Stef sells', fr: 'Ce que Stef vend', de: 'Was Stef verkauft' },
    'over.titel': { nl: 'Welkom bij Stef Tanghe', en: 'Welcome to Stef Tanghe', fr: 'Bienvenue chez Stef Tanghe', de: 'Willkommen bei Stef Tanghe' },
    'alt.stef': { nl: 'Stef Tanghe aan het werk met zijn gereedschapskoffer in de bestelwagen', en: 'Stef Tanghe at work with the toolbox in his van', fr: 'Stef Tanghe au travail avec sa caisse à outils dans sa camionnette', de: 'Stef Tanghe bei der Arbeit mit dem Werkzeugkasten im Transporter' },
    'alt.bord': { nl: 'Het bord van Stef Tanghe langs een veldweg', en: 'The Stef Tanghe sign along a farm road', fr: 'Le panneau Stef Tanghe le long d’un chemin de campagne', de: 'Das Schild von Stef Tanghe an einem Feldweg' },
    'contact.home': { nl: 'Machine stil?<br>Bel Stef.', en: 'Machine down?<br>Call Stef.', fr: 'Machine à l’arrêt ?<br>Appelez Stef.', de: 'Maschine steht still?<br>Rufen Sie Stef an.' },

    'over.p1': { nl: 'Stef Tanghe staat bekend om zijn hoogwaardige tuin- en reinigingsapparatuur. Daarnaast bieden we uitstekende service na aankoop en hebben we een interessante verhuurvloot beschikbaar. Of je nu een doe-het-zelver bent of een specialist in tuin- en parkaanleg, we zijn er om aan jouw behoeften te voldoen.', en: 'Stef Tanghe is known for high-quality garden and cleaning equipment. We also offer excellent after-sales service and an attractive rental fleet. Whether you are a keen DIY gardener or a landscaping professional, we are here to meet your needs.', fr: 'Stef Tanghe est réputé pour son matériel de jardin et de nettoyage de qualité. Nous offrons aussi un excellent service après-vente et un parc de location intéressant. Que vous soyez bricoleur ou spécialiste de l’aménagement de parcs et jardins, nous répondons à vos besoins.', de: 'Stef Tanghe steht für hochwertige Garten- und Reinigungsgeräte. Außerdem bieten wir einen ausgezeichneten Kundendienst und einen interessanten Mietpark. Ob Heimwerker oder Profi im Garten- und Landschaftsbau: Wir sind für Sie da.' },
    'over.p2': { nl: 'In onze werkplaats kan je terecht voor onderhoud en reparaties van al je toestellen. Dat geldt voor de merken die wij aanbieden, maar ook voor grote spelers zoals Honda en Husqvarna. We hebben steeds een ruime voorraad wisselstukken. Ook voor machines die je elders kocht, kan je bij ons terecht.', en: 'In our workshop we service and repair all your equipment: the brands we sell, but also big names such as Honda and Husqvarna. We always keep a large stock of spare parts, and we are happy to help with machines you bought elsewhere.', fr: 'Dans notre atelier, nous entretenons et réparons tous vos appareils : les marques que nous proposons, mais aussi de grands noms comme Honda et Husqvarna. Nous disposons toujours d’un large stock de pièces de rechange, et nous aidons aussi pour les machines achetées ailleurs.', de: 'In unserer Werkstatt warten und reparieren wir alle Ihre Geräte: die Marken, die wir anbieten, aber auch große Namen wie Honda und Husqvarna. Wir haben stets einen großen Ersatzteilvorrat und helfen auch bei Maschinen, die Sie anderswo gekauft haben.' },
    'aanbod.intro': { nl: 'Op zoek naar een machine? Bel of stuur een bericht: Stef zoekt mee wat bij jouw werk past.', en: 'Looking for a machine? Call or send a message and Stef will help you find what suits your work.', fr: 'Vous cherchez une machine ? Appelez ou envoyez un message : Stef vous aide à trouver ce qui convient à votre travail.', de: 'Sie suchen eine Maschine? Rufen Sie an oder schreiben Sie: Stef hilft Ihnen, das Passende zu finden.' },
    'aanbod.wa': { nl: 'Stuur een WhatsApp', en: 'Send a WhatsApp', fr: 'Envoyer un WhatsApp', de: 'WhatsApp senden' },
    'contact.uren': { nl: 'Geen vaste openingsuren: bel of stuur even een bericht, we zijn flexibel.', en: 'No fixed opening hours: just call or send a message, we are flexible.', fr: 'Pas d’horaires fixes : appelez ou envoyez un message, nous sommes flexibles.', de: 'Keine festen Öffnungszeiten: einfach anrufen oder schreiben, wir sind flexibel.' },
    'cat.tuin': { nl: 'Tuin', en: 'Garden', fr: 'Jardin', de: 'Garten' },
    'cat.reiniging': { nl: 'Reiniging', en: 'Cleaning', fr: 'Nettoyage', de: 'Reinigung' },
    'cat.aanbouw': { nl: 'Aanbouwdelen voor compacte tractoren', en: 'Implements for compact tractors', fr: 'Outils pour tracteurs compacts', de: 'Anbaugeräte für Kompakttraktoren' },
    'cat.grasmaaiers': { nl: 'Grasmaaiers op benzine en accu', en: 'Petrol and battery lawn mowers', fr: 'Tondeuses thermiques et à batterie', de: 'Benzin- und Akku-Rasenmäher' },
    'cat.zitmaaiers': { nl: 'Zitmaaiers', en: 'Ride-on mowers', fr: 'Tondeuses autoportées', de: 'Aufsitzmäher' },
    'cat.robotmaaiers': { nl: 'Robotmaaiers', en: 'Robotic mowers', fr: 'Robots tondeuses', de: 'Mähroboter' },
    'cat.tractoren': { nl: 'Compacte tractoren', en: 'Compact tractors', fr: 'Tracteurs compacts', de: 'Kompakttraktoren' },
    'cat.hakselaars': { nl: 'Hakselaars', en: 'Wood chippers', fr: 'Broyeurs de branches', de: 'Häcksler' },
    'cat.verticuteer': { nl: 'Verticuteermachines', en: 'Scarifiers', fr: 'Scarificateurs', de: 'Vertikutierer' },
    'cat.frezen': { nl: 'Motoculteurs en hakfrezen', en: 'Tillers and cultivators', fr: 'Motoculteurs et motobineuses', de: 'Motorhacken und Bodenfräsen' },
    'cat.kettingzagen': { nl: 'Kettingzagen', en: 'Chainsaws', fr: 'Tronçonneuses', de: 'Kettensägen' },
    'cat.heggenscharen': { nl: 'Heggenscharen', en: 'Hedge trimmers', fr: 'Taille-haies', de: 'Heckenscheren' },
    'cat.bladblazers': { nl: 'Bladblazers en bladzuigers', en: 'Leaf blowers and vacuums', fr: 'Souffleurs et aspirateurs de feuilles', de: 'Laubbläser und Laubsauger' },
    'cat.bosmaaiers': { nl: 'Bosmaaiers en trimmers', en: 'Brush cutters and trimmers', fr: 'Débroussailleuses et coupe-bordures', de: 'Freischneider und Trimmer' },
    'cat.hogedruk': { nl: 'Hogedrukreinigers', en: 'Pressure washers', fr: 'Nettoyeurs haute pression', de: 'Hochdruckreiniger' },
    'cat.veeg': { nl: 'Veegmachines', en: 'Sweepers', fr: 'Balayeuses', de: 'Kehrmaschinen' },
    'cat.zuigers': { nl: 'Nat- en droogzuigers', en: 'Wet and dry vacuums', fr: 'Aspirateurs eau et poussière', de: 'Nass- und Trockensauger' },
    'cat.a.frezen': { nl: 'Frezen', en: 'Rotary tillers', fr: 'Fraises rotatives', de: 'Bodenfräsen' },
    'cat.a.klepel': { nl: 'Klepelmaaiers', en: 'Flail mowers', fr: 'Broyeurs à fléaux', de: 'Schlegelmäher' },
    'cat.a.hakselaar': { nl: 'Hakselaars', en: 'Wood chippers', fr: 'Broyeurs de branches', de: 'Häcksler' },
    'cat.a.lader': { nl: 'Frontladers en bakken', en: 'Front loaders and buckets', fr: 'Chargeurs frontaux et godets', de: 'Frontlader und Schaufeln' },

    // Verkooppagina
    'meta.verkoop.title': { nl: 'Verkoop tuin- en reinigingsmachines – Stef Tanghe', en: 'Garden and cleaning machinery for sale – Stef Tanghe', fr: 'Vente de machines de jardin et de nettoyage – Stef Tanghe', de: 'Garten- und Reinigungsmaschinen kaufen – Stef Tanghe' },
    'meta.verkoop.desc': { nl: 'Tuin- en reinigingsmachines kopen bij Stef Tanghe in Izegem: maaiers, robotmaaiers, hakselaars, kettingzagen, hogedrukreinigers en aanbouwdelen voor compacte tractoren.', en: 'Buy garden and cleaning machinery from Stef Tanghe in Izegem: mowers, robotic mowers, chippers, chainsaws, pressure washers and compact tractor implements.', fr: 'Achetez vos machines de jardin et de nettoyage chez Stef Tanghe à Izegem : tondeuses, robots, broyeurs, tronçonneuses, nettoyeurs haute pression et outils pour tracteurs compacts.', de: 'Garten- und Reinigungsmaschinen bei Stef Tanghe in Izegem: Mäher, Mähroboter, Häcksler, Kettensägen, Hochdruckreiniger und Anbaugeräte für Kompakttraktoren.' },
    'vk.h1': { nl: 'Verkoop', en: 'For sale', fr: 'Vente', de: 'Verkauf' },
    'vk.onder': { nl: 'Tuin- en reinigingsmachines, met service na aankoop', en: 'Garden and cleaning machinery, with after-sales service', fr: 'Machines de jardin et de nettoyage, avec service après-vente', de: 'Garten- und Reinigungsmaschinen, mit Kundendienst' },
    'vk.intro': { nl: 'Doe-het-zelver of vakman: Stef helpt je kiezen en blijft je machine onderhouden in eigen werkplaats.', en: 'DIY gardener or professional: Stef helps you choose and keeps servicing your machine in his own workshop.', fr: 'Bricoleur ou professionnel : Stef vous aide à choisir et entretient votre machine dans son propre atelier.', de: 'Heimwerker oder Profi: Stef hilft bei der Auswahl und wartet Ihre Maschine in der eigenen Werkstatt.' },
    'vk.alle': { nl: 'Alles', en: 'All', fr: 'Tout', de: 'Alle' },
    'vk.type': { nl: 'type machine', en: 'type of machine', fr: 'type de machine', de: 'Maschinentyp' },
    'vk.types': { nl: 'types machines', en: 'types of machines', fr: 'types de machines', de: 'Maschinentypen' },
    'vk.info': { nl: 'Info vragen', en: 'Ask for info', fr: 'Demander des infos', de: 'Info anfragen' },
    'vk.bel': { nl: 'Bellen', en: 'Call', fr: 'Appeler', de: 'Anrufen' },
    'vk.msg': { nl: 'Hallo Stef, ik heb interesse in:', en: 'Hello Stef, I am interested in:', fr: 'Bonjour Stef, je suis intéressé(e) par :', de: 'Hallo Stef, ich interessiere mich für:' },
    'vk.msg2': { nl: 'Kan je me meer info geven?', en: 'Could you give me more information?', fr: 'Pouvez-vous m’en dire plus ?', de: 'Kannst du mir mehr Infos geben?' },
    'contact.verkoop': { nl: 'Op zoek naar een machine?<br>Bel Stef.', en: 'Looking for a machine?<br>Call Stef.', fr: 'Vous cherchez une machine ?<br>Appelez Stef.', de: 'Sie suchen eine Maschine?<br>Rufen Sie Stef an.' },
    'aanbod.alles': { nl: 'Bekijk het volledige aanbod', en: 'See the full range', fr: 'Voir toute l’offre', de: 'Gesamtes Angebot ansehen' },

    'kr.home': { nl: 'Home', en: 'Home', fr: 'Accueil', de: 'Startseite' },
    'vk.filter': { nl: 'Filter', en: 'Filter', fr: 'Filtrer', de: 'Filter' },
    'vk.wis': { nl: 'Verwijder alle filters', en: 'Clear all filters', fr: 'Supprimer tous les filtres', de: 'Alle Filter entfernen' },
    'vk.zoek': { nl: 'Zoeken', en: 'Search', fr: 'Rechercher', de: 'Suchen' },
    'vk.percat': { nl: 'Volgens categorie', en: 'By category', fr: 'Par catégorie', de: 'Nach Kategorie' },
    'vk.permerk': { nl: 'Volgens merk', en: 'By brand', fr: 'Par marque', de: 'Nach Marke' },
    'vk.geen': { nl: 'Geen machines gevonden. Pas je filters aan of bel Stef: hij zoekt het voor je uit.', en: 'No machines found. Adjust your filters or call Stef: he will look into it for you.', fr: 'Aucune machine trouvée. Modifiez vos filtres ou appelez Stef : il cherche pour vous.', de: 'Keine Maschinen gefunden. Passen Sie die Filter an oder rufen Sie Stef an.' },
    'vk.resultaat': { nl: 'resultaat', en: 'result', fr: 'résultat', de: 'Ergebnis' },
    'vk.resultaten': { nl: 'resultaten', en: 'results', fr: 'résultats', de: 'Ergebnisse' },
    'vk.meerinfo': { nl: 'Meer info', en: 'More info', fr: 'Plus d’infos', de: 'Mehr Infos' },
    'vk.kopen': { nl: 'Kopen', en: 'Buy', fr: 'Acheter', de: 'Kaufen' },
    'vd.merken': { nl: 'Merken', en: 'Brands', fr: 'Marques', de: 'Marken' },
    'vd.h.advies': { nl: 'Advies op maat', en: 'Tailored advice', fr: 'Conseils sur mesure', de: 'Persönliche Beratung' },
    'vd.advies': { nl: 'Elke tuin en elk werk is anders. Stef bekijkt samen met jou welk model past bij je oppervlakte, terrein en gebruik, en laat je waar mogelijk eerst proberen.', en: 'Every garden and every job is different. Stef helps you choose the model that fits your area, terrain and use, and where possible lets you try it first.', fr: 'Chaque jardin et chaque travail est différent. Stef vous aide à choisir le modèle adapté à votre surface, votre terrain et votre usage, et vous laisse l’essayer si possible.', de: 'Jeder Garten und jede Arbeit ist anders. Stef hilft Ihnen, das passende Modell für Fläche, Gelände und Einsatz zu finden, und lässt Sie wenn möglich vorher testen.' },
    'vd.h.service': { nl: 'Onderhoud en herstellingen', en: 'Servicing and repairs', fr: 'Entretien et réparations', de: 'Wartung und Reparaturen' },
    'vd.service': { nl: 'Na aankoop blijf je welkom in onze werkplaats voor onderhoud en herstellingen. We hebben steeds een ruime voorraad wisselstukken, ook voor andere merken zoals Honda en Husqvarna.', en: 'After purchase you remain welcome in our workshop for servicing and repairs. We always keep a large stock of spare parts, also for other brands such as Honda and Husqvarna.', fr: 'Après l’achat, notre atelier reste à votre service pour l’entretien et les réparations. Nous avons toujours un large stock de pièces, aussi pour d’autres marques comme Honda et Husqvarna.', de: 'Nach dem Kauf sind Sie in unserer Werkstatt für Wartung und Reparatur willkommen. Wir haben stets einen großen Ersatzteilvorrat, auch für andere Marken wie Honda und Husqvarna.' },
    'vd.h.regio': { nl: '{x} kopen in Izegem en omgeving', en: '{x} in Izegem and the surrounding area', fr: '{x} à Izegem et environs', de: '{x} in Izegem und Umgebung' },
    'vd.regio': { nl: 'Je vindt ons in Izegem, vlak bij Meulebeke, Ingelmunster, Lendelede, Emelgem en Kachtem. Geen vaste openingsuren: bel of stuur even een bericht en we spreken af.', en: 'You will find us in Izegem, close to Meulebeke, Ingelmunster, Lendelede, Emelgem and Kachtem. No fixed opening hours: call or send a message and we will arrange a time.', fr: 'Vous nous trouvez à Izegem, près de Meulebeke, Ingelmunster, Lendelede, Emelgem et Kachtem. Pas d’horaires fixes : appelez ou envoyez un message pour convenir d’un moment.', de: 'Sie finden uns in Izegem, nahe Meulebeke, Ingelmunster, Lendelede, Emelgem und Kachtem. Keine festen Öffnungszeiten: rufen Sie an oder schreiben Sie, dann vereinbaren wir einen Termin.' },
    'vd.terug': { nl: 'Naar overzicht verkoop', en: 'Back to all products', fr: 'Retour à l’aperçu', de: 'Zur Verkaufsübersicht' },
    'vd.offerte': { nl: 'Vraag offerte aan', en: 'Request a quote', fr: 'Demander un devis', de: 'Angebot anfragen' },
    'vd.naam': { nl: 'Naam', en: 'Name', fr: 'Nom', de: 'Name' },
    'vd.tel': { nl: 'Telefoon', en: 'Phone', fr: 'Téléphone', de: 'Telefon' },
    'vd.bericht': { nl: 'Bericht', en: 'Message', fr: 'Message', de: 'Nachricht' },
    'vd.verstuur': { nl: 'Verstuur via WhatsApp', en: 'Send via WhatsApp', fr: 'Envoyer via WhatsApp', de: 'Per WhatsApp senden' },
    'vd.msg.offerte': { nl: 'Graag een offerte.', en: 'I would like a quote.', fr: 'Je souhaite recevoir un devis.', de: 'Ich hätte gerne ein Angebot.' },
    'vd.meta': { nl: 'Te koop bij Stef Tanghe in Izegem, met onderhoud in eigen werkplaats.', en: 'For sale at Stef Tanghe in Izegem, with servicing in our own workshop.', fr: 'En vente chez Stef Tanghe à Izegem, avec entretien dans notre atelier.', de: 'Erhältlich bei Stef Tanghe in Izegem, mit Wartung in eigener Werkstatt.' },
    'aanbod.machine': { nl: 'machine', en: 'machine', fr: 'machine', de: 'Maschine' },
    'aanbod.machines': { nl: 'machines', en: 'machines', fr: 'machines', de: 'Maschinen' },

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

  function link(h) {
    if (huidig === 'nl') return h;
    var hash = '', i = h.indexOf('#');
    if (i > -1) { hash = h.slice(i); h = h.slice(0, i); }
    return h + (h.indexOf('?') > -1 ? '&' : '?') + 'lang=' + huidig + hash;
  }

  window.ST = { link: link, t: t, taal: function () { return huidig; }, locale: function () { return TALEN[huidig].locale; }, zet: zet };
  pasToe();
})();
