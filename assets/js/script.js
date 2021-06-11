$(".accordion_tab").click(function(){
    $(".accordion_tab").each(function(){
      $(this).parent().removeClass("active");
      $(this).removeClass("active");
    });
    $(this).parent().addClass("active");
    $(this).addClass("active");
});

var dictionary = {
  'scion': 
  {
      'na': 'scion',
      'jp': 'successor',
  },
  'translate': 
  {
      'na': 'Switch to JP terms',
      'jp': 'Switch to NA terms',
  },
  'Weak Bullet':
  {
      'na': 'Blight Rounds',
      'jp': 'Weak Bullet',
  },
  'Weak Bullet Reinforce':
  {
      'na': 'Blight Rounds Reinforce',
      'jp': 'Weak Bullet Reinforce',
  },
  'Spread Shot':
  {
      'na': 'Spread Shot',
      'jp': 'Spread Shot',
  },
  'Spread Shot Quick Escape':
  {
      'na': 'Spread Shot Quick Getaway',
      'jp': 'Spread Shot Quick Escape',
  },
  'Rifle Grenadier':
  {
      'na': 'Rifle Grenadier',
      'jp': 'Rifle Grenadier',
  },
  'Rifle Slide Shot Advance':
  {
      'na': 'Rifle Slide Shot Advance',
      'jp': 'Rifle Slide Shot Advance',
  },
  'Slow Landing Attack':
  {
      'na': 'Slow Landing Attack',
      'jp': 'Slow Landing Attack',
  },
  'Slow Landing Charge':
  {
      'na': 'Slow Landing Charge',
      'jp': 'Slow Landing Charge',
  },
  'Cluster Bomb Advanced':
  {
      'na': 'Cluster Bomb Advanced',
      'jp': 'Cluster Bomb Advanced',
  },
  'Launcher Charge Grouping':
  {
      'na': 'Launcher Charge Grouping',
      'jp': 'Launcher Charge Grouping',
  },
  'Bad Condition Ward':
  {
      'na': 'Bad Condition Ward',
      'jp': 'Bad Condition Ward',
  },
  'Bad Condition Ward Reduction':
  {
      'na': 'Bad Condition Ward Reduction',
      'jp': 'Bad Condition Ward Reduction',
  }

};
var langs = ['jp', 'na'];
var current_lang_index = 0;
var current_lang = langs[current_lang_index];

window.change_lang = function() {
current_lang_index = ++current_lang_index % 2;
current_lang = langs[current_lang_index];
translate();
}

function translate() {
try 
{
  var LastEntry = "";
  $("[data-translate]").each(function(){
      LastEntry = $(this).data('translate');
      var key = $(this).data('translate');
      $(this).html(dictionary[key][current_lang] || "N/A");
  });
}
catch(err)
{
  window.alert("Translation script failed! Couldn't find an entry for " + LastEntry);
}
}

translate();