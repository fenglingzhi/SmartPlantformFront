$(function()
{
  $(".dropdown-menu>li").click(function()
  {
    var array=[]
    var new_text=$(this).text();
    array.unshift(new_text);
    console.log(array)
    $(this).parent().prev().children(":first-child").text(array[0]);
  })
  var height_1=parseFloat($(".header_nav").css("height"));

  var height_2=parseFloat($(".title_1").css("height"));
  var height_3=parseFloat($(".section_right_main").css("height"));
  var height_4=$(window).height()-(height_1+height_2+height_3)
  var height_5=$(window).height()-(height_1+height_2)
  //var height_5=$(window).height()
  //console.log(height_5)
  $(".ul_overflow").css({"height":height_4-90+"px"})

  $(".do_write>p>span.glyphicon-chevron-up").click(function(){
    if($(".do_write_div").css("height")=="280px")
    {$(".do_write_div").css("height", 0);
      $(".do_write>p>span.glyphicon").removeClass("glyphicon-chevron-up")
      $(".do_write>p>span.glyphicon").addClass("glyphicon-chevron-down")
    }
    else{
      $(".do_write_div").css("height","280px");
      $(".do_write>p>span.glyphicon").removeClass("glyphicon-chevron-down")
      $(".do_write>p>span.glyphicon").addClass("glyphicon-chevron-up")
    }
  })

  $(".basic_info_main").css({"height":height_5-50+"px"})

  laydate.render({
    elem: '#starttime_law', //指定元素
    type: 'datetime',
    theme: '#2590dc'
  });
})
