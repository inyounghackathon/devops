// $(window).load(function() {
//   $("body").removeClass("preload");
// });


$(".transitionOverlayPage").transition({
    delay: 2000,
    y: '-120%'
}, 'slow', 'in', function () { $(this).remove(); });
