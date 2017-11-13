$(function()
  {
    $(".dropdown-menu>li").click(function()
    {
      var new_text=$(this).text();
      $(this).parent().prev().children(":first-child").text(new_text);
    })
    var height_1=parseFloat($(".header_nav").css("height"));

    var height_2=parseFloat($(".title_1").css("height"));
    var height_3=parseFloat($(".section_right_main").css("height"));
    var height_4=$(window).height()-(height_1+height_2+height_3)
    //var height_5=$(window).height()
    //console.log(height_5)
    $(".ul_overflow").css({"height":height_4-90+"px"})
  })
