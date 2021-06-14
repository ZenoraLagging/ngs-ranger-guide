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
  },
  'Raging Shot':
  {
      'na':'Razing Shot',
      'jp':'Raging Shot'
  },
  'Homing Dart':
  {
      'na':'Homing Darts',
      'jp':"Homing Dart"
  },
  'Blaze Shot':
  {
      'na':'Blaze Shot',
      'jp':'Blaze Shot'
  },
  'Fallen Impact':
  {
      'na':'Fallen Impact',
      'jp':'Fallen Impact'
  },
  'Fear Eraser':
  {
      'na':'Fear Eraser',
      'jp':'Fear Eraser'
  },
  'Multiple Launch':
  {
      'na':'Multi-launch',
      'jp':'Multiple Launch'
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

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .not('[href="#recommended"]')
  .not('[href="#optional"]')
  .not('[href="#situational"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  $('.collapse').collapse({
    toggle: false
  })

  $("#rifle-button").click(function(){
    $(this).hasClass("active") == false ? $(this).addClass("active") : $(this).removeClass("active");
  });

  $("#launcher-button").click(function(){
    $(this).hasClass("active") == false ? $(this).addClass("active") : $(this).removeClass("active");
  });