$(window).scroll(function () {
    var st = $(this).scrollTop();
    $(".bg").css({"transform" :"translate(0%, " + st/50 + "%"});
    $(".clbg").css({"transform" :"translate(0%, " + st/50 + "%"});
})