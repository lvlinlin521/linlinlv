/**
 * Created by Administrator on 2017/3/22 0022.
 */
$(function () {
    $('#fen').get(0).addEventListener('touchstart', fn, false);
    $('.box').get(0).addEventListener('touchstart', start, false);
    $('.box').get(0).addEventListener('touchmove', move, false);
    $('.box').get(0).addEventListener('touchend', end, false);
    function fn(e) {
        e.stopPropagation();
        $(this).hide();
    }

    var ogn = 0;
    var y = 0;
    var num = 0;
    var span = null;
    var p = null;
    var img = null;

    function xuan() {
        span = $('.box>div').eq(num).children('span').eq(0);
        p = $('.box>div').eq(num).children('p').eq(0);
        img = $('.box>div').eq(num).children('img').eq(0);
    }

    function start(e) {
    	e.preventDefault()
        ogn = e.targetTouches[0].clientY;
    }

    function move(e) {
    	e.preventDefault()
        y = e.targetTouches[0].clientY;
    }

    function slide(num) {
        $('.box>div').eq(num).children('span').eq(0).css('left', '100%');
        $('.box>div').eq(num).children('p').eq(0).css('left', '100%');
        $('.box>div').eq(num).children('img').eq(0).css('left', '-100%');
    }

    function slide1() {
        img.animate({'left': '1rem'}, function () {
            img.animate({'left': 0})
        });
        span.animate({'left': '-1rem'}, function () {
            span.animate({'left': 0})
        });
        p.animate({'left': '-1rem'}, function () {
            p.animate({'left': 0})
        });
    }

    function end(e) {
    	e.preventDefault()
        if (y - ogn < 0) {
            if (num >= $('.box>div').length - 1) {
                return;
            }
            slide(num + 1);
            $('.box>div').eq(num).slideUp(400, function () {
                xuan();
                slide1()
            })
            num++;
        } else if (y - ogn > 0) {
            num--;
            if (num < 0) {
                num = 0;
                return;
            }
            slide(num);
            $('.box>div').eq(num).slideDown(400, function () {
                xuan();
                slide1()
            })
        }
    }
    var d = 0;
    var a = null;

    function rotate() {
        a = setInterval(function () {
            d++;
            d == 360 ? d = 0 : null;
            $('#yin').css({'transform': 'rotateZ(' + d + 'deg)'});
        }, 1)
    }

    $('#vdo').get(0).addEventListener('play', function () {
        rotate()
    }, false)
    $('#vdo').get(0).addEventListener('pause', function () {
        clearInterval(a);
    }, false)
    $('#yin').get(0).addEventListener('touchstart',function (e) {
        e.stopPropagation();
        if ($('#vdo').get(0).paused) {
            $('#vdo').get(0).play();
        } else {
            $('#vdo').get(0).pause();
        }
    },false)
})