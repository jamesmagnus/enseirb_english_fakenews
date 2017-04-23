$(function(){
    $("#include-header").load("header.html");
    $("#include-nav").load("nav.html", active_nav);
    $("#include-footer").load("footer.html");
});

function active_nav() {
    var pgurl = window.location.href.substr(window.location.href
                                            .lastIndexOf("/")+1);

    $("nav ul li").each(function(){
        if($(this).children().attr("href") == pgurl || $(this).children().attr("href") == '' )
            $(this).addClass("active");
    })
        }

