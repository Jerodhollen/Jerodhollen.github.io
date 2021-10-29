$(document).ready(function() {
  
  
    $("#left-brain").click(function() {
      $("#h4-left").show();
      $("#coding").show();
      $("#csa").show();
    });
    
    $("#csa").click(function() {
        $("#csa-text").show();
    });

    $("#csa-text").click(function() {
        $("#csa-img").show();
        $("#wwu").show();
    });
    
    $("#wwu").click(function() {
       $("#wwu-text").show();
    });
    
    $("#wwu-text").click(function() {
        $("#h4-left").hide();
        $("#coding").hide();
        $("#csa").hide();
        $("#csa-text").hide();
        $("#csa-img").hide();
        $("#wwu").hide();
        $("#wwu-text").hide();
    });

    $("#right-brain").click(function() {
        $("#h4-right").show();
        $("#music").show();
    });

    $("#music").click(function() {
        $("#guitar").show();
    });

    $("#guitar").click(function() {
        $("#guitar-text").show();
    });

    $("#guitar-text").click(function() {
        $("#guitar-vid").show();
        $("#drums").show();
    });

    $("#drums").click(function() {
        $("#drums-text").show();
    });

    $("#drums-text").click(function() {
        $("#drum-vid").show();
        $("#skating").show();
    });

    $("#skating").click(function() {
        $("#skate-text").show();
    });

    $("#skate-text").click(function() {
        $("#skateboard-vid").show();
    });

    $("#skateboard-vid").click(function() {
        $("#h4-right").hide();
        $("#music").hide();
        $("#guitar").hide();
        $("#guitar-text").hide();
        $("#drums").hide();
        $("#drums-text").hide();
        $("#drum-vid").hide();
        $("#skating").hide();
        $("#skate-text").hide();
        $("#skateboard-vid").hide();
    });
  });