var step8State  = 0;
var step33State = 0;
var step35State = 0;
var step3xState = 0;
var step40State = 0;

$(document).keypress(function(event) {
  if (event.which == 106) {
    impress().next();
  } else if (event.which == 107) {
    impress().prev();
  }
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


var step33KeyPressedHandler = function (event) {
  if (event.which == 106) {  /* j */
    if (step33State < 3) {
      step33State++;
      event.stopPropagation();
    }
  } else if (event.which == 107) {  /* k */
    if (step33State > 0) {
      step33State--;
      event.stopPropagation();
    }
  } else { return; }
  switch (step33State) {
    case 1:
      $('#step-33 .giant:eq(0)').fadeIn(200);
      break;
    case 2:
      $('#step-33 .giant:eq(1)').fadeTo(800, 1.0);
      break;
    case 3:
      $('#step-33 .small').fadeIn(800);
      break;
  }
}

$('#step-33 .giant:eq(0)').hide();
$('#step-33 .giant:eq(1)').css('opacity', 0.01);
$('#step-33 .small').hide();

$('#step-33').bind('impress:stepenter', function() {
  $('body').bind('keypress', step33KeyPressedHandler);
});

$('#step-33').bind('impress:stepleave', function () {
  step33State = 0;
  $('body').unbind('keypress', step33KeyPressedHandler);

  $('#step-33 .giant:eq(0)').hide();
  $('#step-33 .giant:eq(1)').css('opacity', 0.01);
  $('#step-33 .small').hide();
});


var step35KeyPressedHandler = function (event) {
  if (event.which == 106) {  /* j */
    if (step35State < 7) {
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

$('#step-35').bind('impress:stepenter', function() {
  $('body').bind('keypress', step35KeyPressedHandler);
});

$('#step-35').bind('impress:stepleave', function () {
  step35State = 0;
  $('body').unbind('keypress', step35KeyPressedHandler);

  $('#sgkd-1').css('opacity', 0.01);
  $('#sgkd-2').css('opacity', 0.01);
  $('#sgkd-3').css('opacity', 0.01);
  $('#sgkd-4').css('opacity', 0.01);
  $('#sgkd-5').css('opacity', 0.01);
  $('#sgkd-6').css('opacity', 0.01);
  $('#sgkd-7').css('opacity', 0.01);
});


var step3xKeyPressedHandler = function (event) {
  if (event.which == 106) {  /* j */
    if (step3xState < 6) {
      step3xState++;
      event.stopPropagation();
    }
  } else if (event.which == 107) {  /* k */
    if (step3xState > 0) {
      step3xState--;
      event.stopPropagation();
    }
  } else { return; }
  switch (step3xState) {
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

$('#step-39').bind('impress:stepenter', function() {
  $('body').bind('keypress', step3xKeyPressedHandler);
});

$('#step-39').bind('impress:stepleave', function () {
  step3xState = 0;
  $('body').unbind('keypress', step3xKeyPressedHandler);

  $('#sgkd-c1').css('opacity', 0.01);
  $('#sgkd-c2').css('opacity', 0.01);
  $('#sgkd-c3').css('opacity', 0.01);
  $('#sgkd-c4').css('opacity', 0.01);
  $('#sgkd-c5').css('opacity', 0.01);
  $('#sgkd-c6').css('opacity', 0.01);
});


var step40KeyPressedHandler = function (event) {
  if (event.which == 106) {  /* j */
    if (step40State < 7) {
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

$('#step-40').bind('impress:stepenter', function() {
  $('body').bind('keypress', step40KeyPressedHandler);
});

$('#step-40').bind('impress:stepleave', function () {
  step40State = 0;
  $('body').unbind('keypress', step40KeyPressedHandler);

  $('#dsl-1').css('opacity', 0.01);
  $('#dsl-2').css('opacity', 0.01);
  $('#dsl-3').css('opacity', 0.01);
  $('#dsl-4').css('opacity', 0.01);
  $('#dsl-5').css('opacity', 0.01);
  $('#dsl-6').css('opacity', 0.01);
  $('#dsl-7').css('opacity', 0.01);
});
