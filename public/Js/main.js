$(document).ready(function() {
    // $(".header-name").click(function(){
        $(".stripes").animate({
            height:'100%'
        },
        'slow');
    // });

    $("#projects-button").click(function() {
        $('html,body').animate({
            scrollTop: $("#placeholder").offset().top
          },
          'slow');
      });
});