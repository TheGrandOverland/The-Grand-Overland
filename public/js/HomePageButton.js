$(window).load(function() {
        $(".post-module").hover(function() {
            $(this).find(".description").stop().animate({
                height: "toggle",
                opacity: "toggle"
            }, 300)
        })
    }),
    function() {
        var a;
        a = '<a href="index.html" class="at-button"><i style="position: absolute; top: 10px;" class="fa fa-home fa-2x" aria-hidden="true"></i></a>', document.body.innerHTML += a
    }.call(this);