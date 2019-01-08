$(document).ready(function () {

    $("#UserImage").on("mouseover", function () {
        $("#dropdown-menu").show();
    });
    $("#dropdown-menu").on("mouseover", function () {
        $("#dropdown-menu").show();
    });
    $("#dropdown-menu").on("mouseleave", function () {
        $("#dropdown-menu").hide();
    });
    $("#UserImage").on("mouseleave", function () {
        $("#dropdown-menu").hide();
    });
    $(".navbar-nav > .nav-item > .nav-link").click(function () {
        $(this).parent().parent().find("li").removeClass("active");
        $(this).parent().addClass("active");
    });

});