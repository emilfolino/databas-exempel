"use strict";

(function () {
    var button = document.getElementById('change-color');
    var zeroToF = "0123456789abcdef";

    button.addEventListener("click", function () {
        var colorString = "#";
        for (var i = 0; i < 6; i++) {
            colorString += zeroToF.charAt(Math.floor((Math.random() * 16)));
        }

        document.body.style.backgroundColor = colorString;
    });
})();
