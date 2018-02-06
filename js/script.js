$(document).ready(function() {

    // Animate nav icon
    var navIcon = $(".nav-icon");
    $(".mobile-toggle").on("hide.bs.collapse", function () {
        navIcon.removeClass("open");
    })
    $(".mobile-toggle").on("show.bs.collapse", function () {
        navIcon.addClass("open");
    })


    // Hack to work around Hugos quirks
    var pathArray = window.location.pathname.split("/");
    var watch = [   {name: "plugins", index: 1},
                    {name: "downloads", index: 2},
                    {name: "support", index: 5},
                    {name: "articles", index: 5}];

    for(var i=0; i < watch.length; i++) {
        if(pathArray[1] == watch[i].name) {
            $(".nav-item").eq(watch[i].index).addClass("active");
            break;
        }
    }

});
