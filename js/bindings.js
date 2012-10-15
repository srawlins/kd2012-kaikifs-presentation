var step4State  = 0;
var step8State  = 0;
var step30State = 0;
var step35State = 0;
var step37State = 0;
var step41State = 0;
var step42State = 0;

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


var step30KeyPressedHandler = function (event) {
  if (event.which == 106) {  /* j */
    if (step30State < 4) {
      step30State++;
      event.stopPropagation();
    }
  } else if (event.which == 107) {  /* k */
    if (step30State > 0) {
      step30State--;
      event.stopPropagation();
    }
  } else { return; }
  switch (step30State) {
    case 1:
      $('#step-30 h3').animate({
        marginTop: 0,
        fontSize: "1.6em"
      }, 1000, function () {
        $('#step-30 .gherkin-1').fadeIn(400);
      });
      break;
    case 2:
      $('#step-30 .ruby-1').fadeIn(400);
      break;
    case 3:
      $('#step-30 .gherkin-2').fadeOut(300, function () {
        $('#step-30 .ruby-2').fadeIn(400);
      });
      break;
    case 4:
      $('#step-30 .gherkin-3').fadeOut(300, function () {
        $('#step-30 .ruby-3').fadeIn(400);
      });
      break;
  }
}

var step30binder = function () {
  $('body').bind('keypress', step30KeyPressedHandler);
}

$('#step-30 .gherkin-1').hide();
$('#step-30 .ruby-1').hide();

$('#step-30').bind('impress:stepenter', function() {
  $('body').bind('keypress', step30KeyPressedHandler);
});

$('#step-30').bind('impress:stepleave', function () {
  step30State = 0;
  $('body').unbind('keypress', step30KeyPressedHandler);

  $('#step-30 h3').attr('style', '');
  $('#step-30 .gherkin-1').hide();
  $('#step-30 .ruby-1').hide();
  $('#step-30 .gherkin-2').hide();
  $('#step-30 .ruby-2').hide();
  $('#step-30 .gherkin-3').hide();
  $('#step-30 .ruby-3').hide();
});


var step35KeyPressedHandler = function (event) {
  if (event.which == 106) {  /* j */
    if (step35State < 3) {
      step35State++;
      event.stopPropagation();
    }
  } else if (event.which == 107) {  /* k */
    if (step35State > 0) {
      step35State--;
      event.stopPropagation();
    }
  } else { return; }
  switch (step35State) {
    case 1:
      $('#step-35 .giant:eq(0)').fadeIn(200);
      break;
    case 2:
      $('#step-35 .giant:eq(1)').fadeTo(800, 1.0);
      break;
    case 3:
      $('#step-35 .small').fadeIn(800);
      break;
  }
}

$('#step-35 .giant:eq(0)').hide();
$('#step-35 .giant:eq(1)').css('opacity', 0.01);
$('#step-35 .small').hide();

$('#step-35').bind('impress:stepenter', function() {
  $('body').bind('keypress', step35KeyPressedHandler);
});

$('#step-35').bind('impress:stepleave', function () {
  step35State = 0;
  $('body').unbind('keypress', step35KeyPressedHandler);

  $('#step-35 .giant:eq(0)').hide();
  $('#step-35 .giant:eq(1)').css('opacity', 0.01);
  $('#step-35 .small').hide();
});


var step37KeyPressedHandler = function (event) {
  if (event.which == 106) {  /* j */
    if (step37State < 7) {
      step37State++;
      event.stopPropagation();
    }
  } else if (event.which == 107) {  /* k */
    if (step37State > 0) {
      step37State--;
      event.stopPropagation();
    }
  } else { return; }
  switch (step37State) {
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

$('#step-37').bind('impress:stepenter', function() {
  $('body').bind('keypress', step37KeyPressedHandler);
});

$('#step-37').bind('impress:stepleave', function () {
  step37State = 0;
  $('body').unbind('keypress', step37KeyPressedHandler);

  $('#sgkd-1').css('opacity', 0.01);
  $('#sgkd-2').css('opacity', 0.01);
  $('#sgkd-3').css('opacity', 0.01);
  $('#sgkd-4').css('opacity', 0.01);
  $('#sgkd-5').css('opacity', 0.01);
  $('#sgkd-6').css('opacity', 0.01);
  $('#sgkd-7').css('opacity', 0.01);
});


var step41KeyPressedHandler = function (event) {
  if (event.which == 106) {  /* j */
    if (step41State < 6) {
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

$('#step-41').bind('impress:stepenter', function() {
  $('body').bind('keypress', step41KeyPressedHandler);
});

$('#step-41').bind('impress:stepleave', function () {
  step41State = 0;
  $('body').unbind('keypress', step41KeyPressedHandler);

  $('#sgkd-c1').css('opacity', 0.01);
  $('#sgkd-c2').css('opacity', 0.01);
  $('#sgkd-c3').css('opacity', 0.01);
  $('#sgkd-c4').css('opacity', 0.01);
  $('#sgkd-c5').css('opacity', 0.01);
  $('#sgkd-c6').css('opacity', 0.01);
});


var step42KeyPressedHandler = function (event) {
  if (event.which == 106) {  /* j */
    if (step42State < 7) {
      step42State++;
      event.stopPropagation();
    }
  } else if (event.which == 107) {  /* k */
    if (step42State > 0) {
      step42State--;
      event.stopPropagation();
    }
  } else { return; }
  switch (step42State) {
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

$('#step-42').bind('impress:stepenter', function() {
  $('body').bind('keypress', step42KeyPressedHandler);
});

$('#step-42').bind('impress:stepleave', function () {
  step42State = 0;
  $('body').unbind('keypress', step42KeyPressedHandler);

  $('#dsl-1').css('opacity', 0.01);
  $('#dsl-2').css('opacity', 0.01);
  $('#dsl-3').css('opacity', 0.01);
  $('#dsl-4').css('opacity', 0.01);
  $('#dsl-5').css('opacity', 0.01);
  $('#dsl-6').css('opacity', 0.01);
  $('#dsl-7').css('opacity', 0.01);
});
