var curr = 1;
var $wrapper = $('.slides', '#slider');
var $slider = $('.slide', '#slider');

function next() {
    $wrapper.animate({
        'margin-left': '-=' + 1420
    }, 1000, function() {
        if (++curr === $slider.length) {
            curr = 1;
            $wrapper.css('margin-left', 0);
        }
    });
}

function prev() {
    $wrapper.animate({
        'margin-left': '+=' + 1420
    }, 1000, function() {
        if (++curr === $slider.length) {
            curr = 1;
            $wrapper.css('margin-left', 0);
        }
    });
}
$(function() {

    var interval;

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