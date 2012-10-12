var step4State  = 0;
var step8State  = 0;
var step34State = 0;
var step36State = 0;
var step40State = 0;
var step41State = 0;

$(document).keypress(function(event) {
  if (event.which == 106) {
    impress().next();
  } else if (event.which == 107) {
    impress().prev();
  }
});

var step4KeyPressedHandler = function (event) {
  if (event.which == 106) {  /* j */
    if (step4State < 2) {
      step4State++;
      event.stopPropagation();
    }
  } else if (event.which == 107) {  /* k */
    if (step4State > 0) {
      step4State--;
      event.stopPropagation();
    }
  } else { return; }
  switch (step4State) {
    case 1:
      $('#step-4 h2').fadeOut(200, function () {
        $('#step-4 video').fadeIn(800);
      });
      break;
    case 2:
      $('#step-4 video').trigger('play');
      break;
//    case 3:
  //    $('#step-4 video').trigger('stop');
    //  break;
  }
}

$('#step-4 video').hide();

$('#step-4').bind('impress:stepenter', function() {
  $('body').bind('keypress', step4KeyPressedHandler);
});

$('#step-4').bind('impress:stepleave', function () {
  step4State = 0;
  $('body').unbind('keypress', step4KeyPressedHandler);

  $('#step-4 video').trigger('pause');
  $('#step-4 video').attr('currentTime', 0);
  $('#step-4 video').hide();
  $('#step-4 h2').show();
});


var step8KeyPressedHandler = function (event) {
  if (event.which == 106) {  /* j */
    if (step8State < 4) {
      step8State++;
      event.stopPropagation();
    }
  } else if (event.which == 107) {  /* k */
    if (step8State > 0) {
      step8State--;
      event.stopPropagation();
    }
  } else { return; }
  switch (step8State) {
    case 1:
      $('#step-8 h3').animate({
        marginTop: 0,
        fontSize: "1.6em"
      }, 1000, function () {
        $('#step-8 .gherkin-1').fadeIn(400);
        $('#step-8 .gherkin-2').fadeIn(400);
        $('#step-8 .gherkin-3').fadeIn(400);
      });
      break;
    case 2:
      $('#step-8 .gherkin-1').fadeOut(300, function () {
        $('#step-8 .ruby-1').fadeIn(400);
      });
      break;
    case 3:
      $('#step-8 .gherkin-2').fadeOut(300, function () {
        $('#step-8 .ruby-2').fadeIn(400);
      });
      break;
    case 4:
      $('#step-8 .gherkin-3').fadeOut(300, function () {
        $('#step-8 .ruby-3').fadeIn(400);
      });
      break;
  }
}

var step8binder = function () {
  $('body').bind('keypress', step8KeyPressedHandler);
}

$('#step-8 .gherkin-1').hide();
$('#step-8 .ruby-1').hide();
$('#step-8 .gherkin-2').hide();
$('#step-8 .ruby-2').hide();
$('#step-8 .gherkin-3').hide();
$('#step-8 .ruby-3').hide();

$('#step-8').bind('impress:stepenter', function() {
  $('body').bind('keypress', step8KeyPressedHandler);
});

$('#step-8').bind('impress:stepleave', function () {
  step8State = 0;
  $('body').unbind('keypress', step8KeyPressedHandler);

  $('#step-8 h3').attr('style', '');
  $('#step-8 .gherkin-1').hide();
  $('#step-8 .ruby-1').hide();
  $('#step-8 .gherkin-2').hide();
  $('#step-8 .ruby-2').hide();
  $('#step-8 .gherkin-3').hide();
  $('#step-8 .ruby-3').hide();
});


var step34KeyPressedHandler = function (event) {
  if (event.which == 106) {  /* j */
    if (step34State < 3) {
      step34State++;
      event.stopPropagation();
    }
  } else if (event.which == 107) {  /* k */
    if (step34State > 0) {
      step34State--;
      event.stopPropagation();
    }
  } else { return; }
  switch (step34State) {
    case 1:
      $('#step-34 .giant:eq(0)').fadeIn(200);
      break;
    case 2:
      $('#step-34 .giant:eq(1)').fadeTo(800, 1.0);
      break;
    case 3:
      $('#step-34 .small').fadeIn(800);
      break;
  }
}

$('#step-34 .giant:eq(0)').hide();
$('#step-34 .giant:eq(1)').css('opacity', 0.01);
$('#step-34 .small').hide();

$('#step-34').bind('impress:stepenter', function() {
  $('body').bind('keypress', step34KeyPressedHandler);
});

$('#step-34').bind('impress:stepleave', function () {
  step34State = 0;
  $('body').unbind('keypress', step34KeyPressedHandler);

  $('#step-34 .giant:eq(0)').hide();
  $('#step-34 .giant:eq(1)').css('opacity', 0.01);
  $('#step-34 .small').hide();
});


var step36KeyPressedHandler = function (event) {
  if (event.which == 106) {  /* j */
    if (step36State < 7) {
      step36State++;
      event.stopPropagation();
    }
  } else if (event.which == 107) {  /* k */
    if (step36State > 0) {
      step36State--;
      event.stopPropagation();
    }
  } else { return; }
  switch (step36State) {
    case 1:
      $('#sgkd-1').fadeTo("slow", 1.0);
      break;
    case 2:
      $('#sgkd-2').fadeTo("slow", 1.0);
      break;
    case 3:
      $('#sgkd-3').fadeTo("slow", 1.0);
      break;
    case 4:
      $('#sgkd-4').fadeTo("slow", 1.0);
      break;
    case 5:
      $('#sgkd-5').fadeTo("slow", 1.0);
      break;
    case 6:
      $('#sgkd-6').fadeTo("slow", 1.0);
      break;
    case 7:
      $('#sgkd-7').fadeTo("slow", 1.0);
      break;
  }
}

$('#sgkd-1').css('opacity', 0.01);
$('#sgkd-2').css('opacity', 0.01);
$('#sgkd-3').css('opacity', 0.01);
$('#sgkd-4').css('opacity', 0.01);
$('#sgkd-5').css('opacity', 0.01);
$('#sgkd-6').css('opacity', 0.01);
$('#sgkd-7').css('opacity', 0.01);

$('#step-36').bind('impress:stepenter', function() {
  $('body').bind('keypress', step36KeyPressedHandler);
});

$('#step-36').bind('impress:stepleave', function () {
  step36State = 0;
  $('body').unbind('keypress', step36KeyPressedHandler);

  $('#sgkd-1').css('opacity', 0.01);
  $('#sgkd-2').css('opacity', 0.01);
  $('#sgkd-3').css('opacity', 0.01);
  $('#sgkd-4').css('opacity', 0.01);
  $('#sgkd-5').css('opacity', 0.01);
  $('#sgkd-6').css('opacity', 0.01);
  $('#sgkd-7').css('opacity', 0.01);
});


var step40KeyPressedHandler = function (event) {
  if (event.which == 106) {  /* j */
    if (step40State < 6) {
      step40State++;
      event.stopPropagation();
    }
  } else if (event.which == 107) {  /* k */
    if (step40State > 0) {
      step40State--;
      event.stopPropagation();
    }
  } else { return; }
  switch (step40State) {
    case 1:
      $('#sgkd-c1').fadeTo("slow", 1.0);
      break;
    case 2:
      $('#sgkd-c2').fadeTo("slow", 1.0);
      break;
    case 3:
      $('#sgkd-c3').fadeTo("slow", 1.0);
      break;
    case 4:
      $('#sgkd-c4').fadeTo("slow", 1.0);
      break;
    case 5:
      $('#sgkd-c5').fadeTo("slow", 1.0);
      break;
    case 6:
      $('#sgkd-c6').fadeTo("slow", 1.0);
      break;
  }
}

$('#sgkd-c1').css('opacity', 0.01);
$('#sgkd-c2').css('opacity', 0.01);
$('#sgkd-c3').css('opacity', 0.01);
$('#sgkd-c4').css('opacity', 0.01);
$('#sgkd-c5').css('opacity', 0.01);
$('#sgkd-c6').css('opacity', 0.01);

$('#step-40').bind('impress:stepenter', function() {
  $('body').bind('keypress', step40KeyPressedHandler);
});

$('#step-40').bind('impress:stepleave', function () {
  step40State = 0;
  $('body').unbind('keypress', step40KeyPressedHandler);

  $('#sgkd-c1').css('opacity', 0.01);
  $('#sgkd-c2').css('opacity', 0.01);
  $('#sgkd-c3').css('opacity', 0.01);
  $('#sgkd-c4').css('opacity', 0.01);
  $('#sgkd-c5').css('opacity', 0.01);
  $('#sgkd-c6').css('opacity', 0.01);
});


var step41KeyPressedHandler = function (event) {
  if (event.which == 106) {  /* j */
    if (step41State < 7) {
      step41State++;
      event.stopPropagation();
    }
  } else if (event.which == 107) {  /* k */
    if (step41State > 0) {
      step41State--;
      event.stopPropagation();
    }
  } else { return; }
  switch (step41State) {
    case 1:
      $('#dsl-1').fadeTo("slow", 1.0);
      break;
    case 2:
      $('#dsl-2').fadeTo("slow", 1.0);
      break;
    case 3:
      $('#dsl-3').fadeTo("slow", 1.0);
      break;
    case 4:
      $('#dsl-4').fadeTo("slow", 1.0);
      break;
    case 5:
      $('#dsl-5').fadeTo("slow", 1.0);
      break;
    case 6:
      $('#dsl-6').fadeTo("slow", 1.0);
      break;
    case 7:
      $('#dsl-7').fadeTo("slow", 1.0);
      break;
  }
}

$('#dsl-1').css('opacity', 0.01);
$('#dsl-2').css('opacity', 0.01);
$('#dsl-3').css('opacity', 0.01);
$('#dsl-4').css('opacity', 0.01);
$('#dsl-5').css('opacity', 0.01);
$('#dsl-6').css('opacity', 0.01);
$('#dsl-7').css('opacity', 0.01);

$('#step-41').bind('impress:stepenter', function() {
  $('body').bind('keypress', step41KeyPressedHandler);
});

$('#step-41').bind('impress:stepleave', function () {
  step41State = 0;
  $('body').unbind('keypress', step41KeyPressedHandler);

  $('#dsl-1').css('opacity', 0.01);
  $('#dsl-2').css('opacity', 0.01);
  $('#dsl-3').css('opacity', 0.01);
  $('#dsl-4').css('opacity', 0.01);
  $('#dsl-5').css('opacity', 0.01);
  $('#dsl-6').css('opacity', 0.01);
  $('#dsl-7').css('opacity', 0.01);
});
