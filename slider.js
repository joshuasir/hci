var curr = 1;
var interval;


function init() {
    interval = setInterval(function() {
        next();
    }, 4000);
}

function stop() {
    clearInterval(interval);
}

function disable() {
    right_button = $('#button_next');
    left_button = $('#button_prev');

    left_button.prop('disabled', true);
    right_button.prop('disabled', true);

    setTimeout(function() {
        left_button.prop('disabled', false);
        right_button.prop('disabled', false);
    }, 1500);
}

function prev() {
    stop();
    disable();
    if (curr === 1 || curr === 0) {
        $('.slides', '#slider').css('margin-left', -7100);
    }
    $('.slides', '#slider').animate({
        'margin-left': '+=' + 1420
    }, 1400, function() {
        if (--curr <= 0) {
            curr = $('.slide', '#slider').length - 1;
        }
    });
    init();
}

function next() {
    stop();
    disable();
    $('.slides', '#slider').animate({
        'margin-left': '-=' + 1420
    }, 1400, function() {
        if (++curr >= $('.slide', '#slider').length) {
            $(this).css('margin-left', 0);
            curr = 1;
        }
    });
    init();
}


$(function() {
    $('#button_next').on('click', function(e) {
        if (e.detail == 0 || e.detail == 1) {
            next();
        }
    });

    $('#button_prev').on('click', function(e) {
        if (e.detail == 0 || e.detail == 1) {
            prev();
        }
    });

    $('#slider')
        .on('mouseenter', stop)
        .on('mouseleave', init)


    init();
});