$(document).ready(function pageLoadFunction() {

    var x = 0;
    var s = "";

    console.log("Hello Pluralsight");

    var theForm = $("#theForm");
    theForm.hide();

    var button = $("#buyButton");
    button.on("click", function buyFunction() {
        console.log("Buying Item");
    });

    var productInfo = $(".product-props li");
    productInfo.on("click", function productFunction() {
        console.log("You clicked on " + $(this).text());
    });


    var $loginToggle = $("#loginToggle");
    var $popupForm = $(".popup-form");

    $loginToggle.on("click", function unhide() {
        $popupForm.fadeToggle(500);
    })


});

