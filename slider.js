$(function() {

    var $wrap = $('#slider .slides')
    var $slide = $('#slider .slides .slide')
    var slideCount = $slide.length;
    var width = $slide.width();
    var height = $slide.height();
    var totalWidth = slideCount * width;
    var interval;

    $('#slider').css({
        width: width,
        height: height
    });

    $wrap.css({
        width: totalWidth,
        marginLeft: -width
    });

    $('#slider .slides .slide:last-child').prependTo('#slider .slides');

    function stop() {
        clearInterval(interval);
    }

    function init() {
        interval = setInterval(function() {
            next();
        }, 4000);
    }

    function prev() {
        stop();
        $wrap.animate({
            left: width
        }, 1000, function() {
            $('#slider .slides .slide:last-child').prependTo('#slider .slides');
            $wrap.css({
                left: ''
            });
        });
        init();
    }

    function next() {
        stop();
        $wrap.animate({
            left: -width
        }, 1000, function() {
            $('#slider .slides .slide:first-child').appendTo('#slider .slides');
            $wrap.css({
                left: ''
            });
        });
        init();
    }
    $('#button_prev').on('click', function(e) {
        if (e.detail == 0 || e.detail == 1) {
            prev();
        }
    })
    $('#button_next').on('click', function(e) {
        if (e.detail == 0 || e.detail == 1) {
            next();
        }
    });


    $('#slider')
        .on('mouseenter', stop)
        .on('mouseleave', init)


    init();
});