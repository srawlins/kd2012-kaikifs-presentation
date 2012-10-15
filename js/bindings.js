var step4State  = 0;
var step18State = 0;
var step40State = 0;
var step7State = 0;
var step9State = 0;
var step13State = 0;
var step14State = 0;

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


var step18KeyPressedHandler = function (event) {
  if (event.which == 106) {  /* j */
    if (step18State < 4) {
      step18State++;
      event.stopPropagation();
    }
  } else if (event.which == 107) {  /* k */
    if (step18State > 0) {
      step18State--;
      event.stopPropagation();
    }
  } else { return; }
  switch (step18State) {
    case 1:
      $('#step-18 h3').animate({
        marginTop: 0,
        fontSize: "1.6em"
      }, 1000, function () {
        $('#step-18 .gherkin-1').fadeIn(400);
        $('#step-18 .gherkin-2').fadeIn(400);
        $('#step-18 .gherkin-3').fadeIn(400);
      });
      break;
    case 2:
      $('#step-18 .gherkin-1').fadeOut(300, function () {
        $('#step-18 .ruby-1').fadeIn(400);
      });
      break;
    case 3:
      $('#step-18 .gherkin-2').fadeOut(300, function () {
        $('#step-18 .ruby-2').fadeIn(400);
      });
      break;
    case 4:
      $('#step-18 .gherkin-3').fadeOut(300, function () {
        $('#step-18 .ruby-3').fadeIn(400);
      });
      break;
  }
}

var step18binder = function () {
  $('body').bind('keypress', step18KeyPressedHandler);
}

$('#step-18 .gherkin-1').hide();
$('#step-18 .ruby-1').hide();
$('#step-18 .gherkin-2').hide();
$('#step-18 .ruby-2').hide();
$('#step-18 .gherkin-3').hide();
$('#step-18 .ruby-3').hide();

$('#step-18').bind('impress:stepenter', function() {
  $('body').bind('keypress', step18KeyPressedHandler);
});

$('#step-18').bind('impress:stepleave', function () {
  step18State = 0;
  $('body').unbind('keypress', step18KeyPressedHandler);

  $('#step-18 h3').attr('style', '');
  $('#step-18 .gherkin-1').hide();
  $('#step-18 .ruby-1').hide();
  $('#step-18 .gherkin-2').hide();
  $('#step-18 .ruby-2').hide();
  $('#step-18 .gherkin-3').hide();
  $('#step-18 .ruby-3').hide();
});


var step40KeyPressedHandler = function (event) {
  if (event.which == 106) {  /* j */
    if (step40State < 4) {
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
      $('#step-40 h3').animate({
        marginTop: 0,
        fontSize: "1.6em"
      }, 1000, function () {
        $('#step-40 .gherkin-1').fadeIn(400);
      });
      break;
    case 2:
      $('#step-40 .ruby-1').fadeIn(400);
      break;
    case 3:
      $('#step-40 .gherkin-2').fadeOut(300, function () {
        $('#step-40 .ruby-2').fadeIn(400);
      });
      break;
    case 4:
      $('#step-40 .gherkin-3').fadeOut(300, function () {
        $('#step-40 .ruby-3').fadeIn(400);
      });
      break;
  }
}

var step40binder = function () {
  $('body').bind('keypress', step40KeyPressedHandler);
}

$('#step-40 .gherkin-1').hide();
$('#step-40 .ruby-1').hide();

$('#step-40').bind('impress:stepenter', function() {
  $('body').bind('keypress', step40KeyPressedHandler);
});

$('#step-40').bind('impress:stepleave', function () {
  step40State = 0;
  $('body').unbind('keypress', step40KeyPressedHandler);

  $('#step-40 h3').attr('style', '');
  $('#step-40 .gherkin-1').hide();
  $('#step-40 .ruby-1').hide();
  $('#step-40 .gherkin-2').hide();
  $('#step-40 .ruby-2').hide();
  $('#step-40 .gherkin-3').hide();
  $('#step-40 .ruby-3').hide();
});


var step7KeyPressedHandler = function (event) {
  if (event.which == 106) {  /* j */
    if (step7State < 3) {
      step7State++;
      event.stopPropagation();
    }
  } else if (event.which == 107) {  /* k */
    if (step7State > 0) {
      step7State--;
      event.stopPropagation();
    }
  } else { return; }
  switch (step7State) {
    case 1:
      $('#step-7 .giant:eq(0)').fadeIn(200);
      break;
    case 2:
      $('#step-7 .giant:eq(1)').fadeTo(800, 1.0);
      break;
    case 3:
      $('#step-7 .small').fadeIn(800);
      break;
  }
}

$('#step-7 .giant:eq(0)').hide();
$('#step-7 .giant:eq(1)').css('opacity', 0.01);
$('#step-7 .small').hide();

$('#step-7').bind('impress:stepenter', function() {
  $('body').bind('keypress', step7KeyPressedHandler);
});

$('#step-7').bind('impress:stepleave', function () {
  step7State = 0;
  $('body').unbind('keypress', step7KeyPressedHandler);

  $('#step-7 .giant:eq(0)').hide();
  $('#step-7 .giant:eq(1)').css('opacity', 0.01);
  $('#step-7 .small').hide();
});


var step9KeyPressedHandler = function (event) {
  if (event.which == 106) {  /* j */
    if (step9State < 7) {
      step9State++;
      event.stopPropagation();
    }
  } else if (event.which == 107) {  /* k */
    if (step9State > 0) {
      step9State--;
      event.stopPropagation();
    }
  } else { return; }
  switch (step9State) {
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

$('#step-9').bind('impress:stepenter', function() {
  $('body').bind('keypress', step9KeyPressedHandler);
});

$('#step-9').bind('impress:stepleave', function () {
  step9State = 0;
  $('body').unbind('keypress', step9KeyPressedHandler);

  $('#sgkd-1').css('opacity', 0.01);
  $('#sgkd-2').css('opacity', 0.01);
  $('#sgkd-3').css('opacity', 0.01);
  $('#sgkd-4').css('opacity', 0.01);
  $('#sgkd-5').css('opacity', 0.01);
  $('#sgkd-6').css('opacity', 0.01);
  $('#sgkd-7').css('opacity', 0.01);
});


var step13KeyPressedHandler = function (event) {
  if (event.which == 106) {  /* j */
    if (step13State < 6) {
      step13State++;
      event.stopPropagation();
    }
  } else if (event.which == 107) {  /* k */
    if (step13State > 0) {
      step13State--;
      event.stopPropagation();
    }
  } else { return; }
  switch (step13State) {
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

$('#step-13').bind('impress:stepenter', function() {
  $('body').bind('keypress', step13KeyPressedHandler);
});

$('#step-13').bind('impress:stepleave', function () {
  step13State = 0;
  $('body').unbind('keypress', step13KeyPressedHandler);

  $('#sgkd-c1').css('opacity', 0.01);
  $('#sgkd-c2').css('opacity', 0.01);
  $('#sgkd-c3').css('opacity', 0.01);
  $('#sgkd-c4').css('opacity', 0.01);
  $('#sgkd-c5').css('opacity', 0.01);
  $('#sgkd-c6').css('opacity', 0.01);
});


var step14KeyPressedHandler = function (event) {
  if (event.which == 106) {  /* j */
    if (step14State < 7) {
      step14State++;
      event.stopPropagation();
    }
  } else if (event.which == 107) {  /* k */
    if (step14State > 0) {
      step14State--;
      event.stopPropagation();
    }
  } else { return; }
  switch (step14State) {
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

$('#step-14').bind('impress:stepenter', function() {
  $('body').bind('keypress', step14KeyPressedHandler);
});

$('#step-14').bind('impress:stepleave', function () {
  step14State = 0;
  $('body').unbind('keypress', step14KeyPressedHandler);

  $('#dsl-1').css('opacity', 0.01);
  $('#dsl-2').css('opacity', 0.01);
  $('#dsl-3').css('opacity', 0.01);
  $('#dsl-4').css('opacity', 0.01);
  $('#dsl-5').css('opacity', 0.01);
  $('#dsl-6').css('opacity', 0.01);
  $('#dsl-7').css('opacity', 0.01);
});
