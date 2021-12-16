$(".accordion_tab").click(function () {
  $(".accordion_tab").each(function () {
    $(this).parent().removeClass("active");
    $(this).removeClass("active");
  });
  $(this).parent().addClass("active");
  $(this).addClass("active");
});

var dictionary = {
  'scion': {
    'na': 'scion',
    'jp': 'successor',
  },
  'translate': {
    'na': 'Switch to JP terms',
    'jp': 'Switch to NA terms',
  },
  'Weak Bullet': {
    'na': 'Blight Rounds',
    'jp': 'Weak Bullet',
  },
  'Weak Bullet Reinforce': {
    'na': 'Blight Rounds Reinforce',
    'jp': 'Weak Bullet Reinforce',
  },
  'Spread Shot': {
    'na': 'Spread Shot',
    'jp': 'Spread Shot',
  },
  'Spread Shot Quick Escape': {
    'na': 'Spread Shot Quick Getaway',
    'jp': 'Spread Shot Quick Escape',
  },
  'Rifle Grenadier': {
    'na': 'Rifle Grenadier',
    'jp': 'Rifle Grenadier',
  },
  'Rifle Slide Shot Advance': {
    'na': 'Rifle Slide Shot Advance',
    'jp': 'Rifle Slide Shot Advance',
  },
  'Slow Landing Attack': {
    'na': 'Slow Landing Attack',
    'jp': 'Slow Landing Attack',
  },
  'Slow Landing Charge': {
    'na': 'Slow Landing Charge',
    'jp': 'Slow Landing Charge',
  },
  'Cluster Bomb Advanced': {
    'na': 'Cluster Bomb Advanced',
    'jp': 'Cluster Bomb Advanced',
  },
  'Launcher Charge Grouping': {
    'na': 'Launcher Charge Grouping',
    'jp': 'Launcher Charge Grouping',
  },
  'Bad Condition Ward': {
    'na': 'Bad Condition Ward',
    'jp': 'Bad Condition Ward',
  },
  'Bad Condition Ward Reduction': {
    'na': 'Bad Condition Ward Reduction',
    'jp': 'Bad Condition Ward Reduction',
  },
  'Raging Shot': {
    'na': 'Razing Shot',
    'jp': 'Raging Shot'
  },
  'Homing Dart': {
    'na': 'Homing Darts',
    'jp': "Homing Dart"
  },
  'Blaze Shot': {
    'na': 'Blaze Shot',
    'jp': 'Blaze Shot'
  },
  'Fallen Impact': {
    'na': 'Fallen Impact',
    'jp': 'Fallen Impact'
  },
  'Fear Eraser': {
    'na': 'Fear Eraser',
    'jp': 'Fear Eraser'
  },
  'Multiple Launch': {
    'na': 'Multi-launch',
    'jp': 'Multiple Launch'
  },
  'Massive Hunter': {
    'na': 'Hunter Physique',
    'jp': 'Massive Hunter'
  },
  'Cras Series': {
    'na': 'Lightweave Klauz Series',
    'jp': 'Lightweaver Cras Series'
  },
  'Resurge Series': {
    'na': 'Resurgir Series',
    'jp': 'Resurge Series'
  },
  'Terseus Series': {
    'na': 'Theseus Series',
    'jp': 'Terseus Series'
  },
  'Foursis Series': {
    'na': 'Forsis Series',
    'jp': 'Foursis Series'
  },
  'Vialto Series': {
    'na': 'Vialt Series',
    'jp': 'Vialto Series'
  },
  'Raising Pursuit': {
    'na': 'Escalating Pursuit',
    'jp': 'Raising Pursuit'
  },
  'Affixes': {
    'na': 'Augments',
    'jp': 'Affixes'
  },
  'Shoot': {
    'na': 'Precision',
    'jp': 'Shoot'
  },
  'Spirita': {
    'na': 'Spirit',
    'jp': 'Spirita'
  },
  'Pedas Soul': {
    'na': 'Pettas Soul',
    'jp': 'Pedas Soul'
  },
  'Air Domina': {
    'na': 'Ael Domina',
    'jp': 'Air Domina'
  },
  'Als Secrete': {
    'na': 'Alts Secreta',
    'jp': 'Als Secrete'
  },
  'Ability': {
    'na': 'Mastery',
    'jp': 'Ability'
  },
  'Dolls Soul': {
    'na': 'Dolz Soul',
    'jp': 'Dolls Soul'
  },
  'Laborata Note': {
    'na': 'Lab Note',
    'jp': 'Laborata Note'
  },
  'Gigas Shoot': {
    'na': 'Gigas Precision',
    'jp': 'Gigas Shoot'
  },
  'Zeont': {
    'na': 'Geant Armor',
    'jp': 'Zeont Armor'
  },
  'Stragga': {
    'na': 'Straga Series',
    'jp': 'Stragga Series'
  },
  'Greisen': {
    'na': 'Glissen Series',
    'jp': 'Greisen Series'
  },
  'Frostel': {
    'na': 'Frostel Series',
    'jp': 'Frostel Series'
  },
  'Flamel': {
    'na': 'Flamel Series',
    'jp': 'Flamel Series'
  },
  'Ragras Soul': {
    'na': 'Ragras Soul',
    'jp': 'Ragras Soul'
  },
  'Evolcoat': {
    'na': 'Evolcoat Series',
    'jp': 'Evolcoat Series'
  },
  'Launcher Blight Rounds': {
    'na': 'Launcher Blight Rounds',
    'jp': 'Launcher Weak Bullet'
  }

};
var langs = ['jp', 'na'];
var current_lang_index = 0;
var current_lang = langs[current_lang_index];

window.change_lang = function () {
  current_lang_index = ++current_lang_index % 2;
  current_lang = langs[current_lang_index];
  translate();
}

function translate() {
  try {
    var LastEntry = "";
    $("[data-translate]").each(function () {
      LastEntry = $(this).data('translate');
      var key = $(this).data('translate');
      $(this).html(dictionary[key][current_lang] || "N/A");
    });
  } catch (err) {
    window.alert("Translation script failed! Couldn't find an entry for " + LastEntry);
  }
}

translate();


$("#circle alt").click(function () {
  alert("Handler for .click() called.");
});