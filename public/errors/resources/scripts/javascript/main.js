"use strict";
console.info("OggyP Suite Error Page v3 | Created by kElnaDev");
$('#go-back-btn').attr("href", window.location.protocol + "//" + window.location.hostname);
var moreInfoOpen = false;
$('#more-info-open').click(function () {
    if (!moreInfoOpen) {
        $('#more-info').fadeIn(250);
        moreInfoOpen = true;
    }
});
$('#more-info-close').click(function () {
    if (moreInfoOpen) {
        $('#more-info').fadeOut(250);
        moreInfoOpen = false;
    }
});
