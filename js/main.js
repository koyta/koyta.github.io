$(document).ready(function () {

    //Check viewport size
    var body = $('body');
    var viewportWidth = window.innerWidth;
    var viewportHeight = window.innerHeight;

    // window.addEventListener('resize', function() {
    //     console.log(window.innerWidth, window.innerHeight);
    // });


    // if (window.innerHeight < 600 || window.innerWidth < 1280) {
    //     $('aside').hide();
    //     $('main').hide();
    //     $('header').hide();
    //     $('footer').hide();
    //     $('.warning').removeClass('hidden');
    // } else {
    //     $('aside').show();
    //     $('main').show();
    //     $('header').show();
    //     $('footer').show();
    //     $('.warning').addClass('hidden');
    // }
    //
    // window.addEventListener('resize', function() {
    //     if (window.innerHeight < 600 || window.innerWidth < 1280) {
    //         $('aside').hide();
    //         $('main').hide();
    //         $('header').hide();
    //         $('footer').hide();
    //         $('.warning').removeClass('hidden');
    //     } else {
    //         $('aside').show();
    //         $('main').show();
    //         $('header').show();
    //         $('footer').show();
    //         $('.warning').addClass('hidden');
    //     }
    // });

    $(".asideTrigger").click(function () {
        $("body").toggleClass('showAside');
    })
});
