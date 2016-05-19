 /* Javascript for mobile optimizing the navigation bar  */

/* function that takes in a screen width and adjusts nav bar */
function checkScreen(screenWidth) {
    if (screenWidth < 768) {
        $(".navmobile").removeClass("hidden");
        $(".navdesktop").addClass("hidden");
    }
    else {
        $(".navmobile").addClass("hidden");
        $(".navdesktop").removeClass("hidden");
    }
}

$(document).ready(function() {
    checkScreen($(window).width()); 
    
    $(window).resize(function () {
        checkScreen($(window).width());
    });
    
});
