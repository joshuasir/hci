var curr = 1;

function prev() {
    if (curr === 1) {
        $('.slides', '#slider').css('margin-left', -7100);
    }
    $('.slides', '#slider').animate({
        'margin-left': '+=' + 1420
    }, 1200, function() {
        if (--curr <= 0) {
            curr = $('.slide', '#slider').length - 1;
        }
    });
}

function next() {
    $('.slides', '#slider').animate({
        'margin-left': '-=' + 1420
    }, 1200, function() {
        if (++curr >= $('.slide', '#slider').length) {
            $('.slides', '#slider').css('margin-left', 0);
            curr = 1;
        }
    });
}
$(function() {

    var interval;

    var $wrapper = $('.slides', '#slider');

    function init() {
        interval = setInterval(function() {
            next();
        }, 4000);

    }

    function stop() {
        clearInterval(interval);
    }
    $wrapper
        .on('mouseenter', stop)
        .on('mouseleave', init);

    init();
});