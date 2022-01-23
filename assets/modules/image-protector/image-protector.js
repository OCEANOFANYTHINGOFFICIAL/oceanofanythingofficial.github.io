// if you want to use this , then you have to include jQuery


let allImages = document.querySelectorAll("img");
allImages.forEach((value) => {
    value.oncontextmenu = (e) => {
        e.preventDefault();
    };
});
$('img').mousedown(function (e) {
    if (e.button == 2) {
        return false;
    }
});
$(document).ready(function () {
    $('img').bind('contextmenu', function () {
        return false;
    });
});
(function ($) {
    $(document).on('contextmenu', 'img', function () {
        return false;
    })
})(jQuery);
