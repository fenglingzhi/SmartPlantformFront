$(function(){
  /* ====================================================================================== */
  $(".video_table_2").css({"width":68+"%"});
  $(".video_table_3").css("display","none");
  $(".back").css("display","none");
  $(".video_table_list_1_else").css("display","none");
  $(".video_table_list_2_else").css("display","none");
  $(".template_1").css("width","100%");
  $(".template_2").css("width","100%");
  $(".template_3").css("width","100%");
  $(".template_4").css("width","100%");
  $(".template_5").css("width","100%");
  $(".template_6").css("width","100%");
  $(".template_7").css("width","100%");
  $(".template_1 object").css({'height':$('.template').height()-23+"px",'width':$('.template').width()-30 + 'px'});
  $(".template_1 .video_wrap").css({'height':$('.template').height()+"px",'width':$(".video_table_2_main").width()+'px'})
  $(".template_2 object").css({'height':$('.template').height()/2-22+"px",'width':$('.template').width()/2 -30+ 'px'})
  $(".template_2 .video_wrap").css({'height':$('.template').height()/2+"px",'width':$(".video_table_2_main").width()/2+'px'})
  $(".template_3 object").css({'height':$('.template').height()/3-22+"px",'width':$('.template').width()/3 -30+ 'px'})
  $(".template_3 .video_wrap").css({'height':$('.template').height()/3+"px",'width':$(".video_table_2_main").width()/3+'px'})
  $(".template_4 object").css({'height':$('.template').height()/4-22+"px",'width':$('.template').width()/4 -30+ 'px'})
  $(".template_4 .video_wrap").css({'height':$('.template').height()/4+"px",'width':$(".video_table_2_main").width()/4+'px'})
  $("#treeDemos").css("display","none")
  $("#dw_d").css("display","none")
  /* =========================================================================================== */
  var tree_list_2=$("#browser").height()/2;
  $("#browser_1").css({"height":tree_list_2+"px"})
  function getMousePos(event) {
    var e = event || window.event;
    x=e.clientX,y=e.clientY;
    return {'x':x,'y':y}
  }
  document.oncontextmenu = function(){
    return false;
  }
  $("#browser>li>ul>li>ul>li").mousedown(function(e) {
    if (e.button == 2) {
      //alert("你点了右键");
      getMousePos();
      console.log(x, y);
      $("#self-dw").css("display", "block");
      $("#self-dw").css({"left": x - 40 + "px"});
      $("#self-dw").css({"top": y - 150 + "px"});
      $('#self-dw').bind("mouseleave", function () {
        $("#self-dw").css("display", "none");
      })
    }
  })
  $("#browser_1>li>ul>li>ul>li").mousedown(function(e) {
    if (e.button == 2) {
      //alert("你点了右键");
      getMousePos();
      console.log(x, y);
      $("#self-dw").css("display", "block");
      $("#self-dw").css({"left": x - 40 + "px"});
      $("#self-dw").css({"top": y - 150 + "px"});
      $('#self-dw').bind("mouseleave", function () {
        $("#self-dw").css("display", "none");
      })
    }
  })
  $(".list_1>#browser_1 li").css("backgroundImage","")
  var back_left_1=$(".video_table_1").width()+$(".video_table_2").width();
  var back_left_2=parseFloat($(".video_table_1").css("marginLeft"));
  var back_left_3=parseFloat($(".video_table_2").css("marginLeft"));
  var back_left_4=parseFloat($(".video_2").css("left"));
  var back_left_5=parseFloat($(".video_table_3").css("marginLeft"))/2;
  var back_left_6=parseFloat($(".video_table_3").css("width"));
  var back_left=back_left_1+back_left_2+back_left_3+back_left_4+back_left_5-back_left_6-26;
  var back_top=$(".video_2").height()/2;
  console.log(back_top)

  $(".back").css({"left":back_left+"px","top":back_top+"px"})

  if(parseFloat($(".true_false").width())>16.3) {
    $(".true_false_arrow").css("borderLeftWidth","17px")
  }
  else{
    $(".true_false_arrow").css("borderLeftWidth","16px")
  }


  var video_wrap_height = $(".video_table_2_main").height()-28+ "px";
  var video_wrap_width = $(".video_table_2_main").width() + 'px';
  page_init()

  function page_init()
  {
    $("#gezi .video_wrap").css({'height':video_wrap_height,'width':video_wrap_width})
    $(".template").css({'height':($(".video_table_2_main").height()-28)+"px",'width':$(".video_table_2_main").width()+ 'px'})
    $(".template_1 object").css({'height':$('.template').height()-23 +"px",'width':$('.template').width()- 30 + 'px'})
    $('.template_5,.template_6,.template_7').css('display','none')
    }
  })
  function select_template (index,time) {
    event.preventDefault();

    var video_emp=function(index,time){
      for(var i = 1; i<time+1; i++){
        var template2 = '<div class="video_wrap video_wrap2">'
          +'<object id="plugin'+i+'" type="application/x-mediacuplugin">'
          +'<param name="onload" value="pluginLoaded" />'
          +'</object>'
          +'</div>';
        $(".template_"+(index+1)).append(template2);
      }
    }

  switch (index) {
    case 0:
      $('.template_1').empty()
      video_emp(index,time);
      $(".template_1 .video_wrap").css({'height':$('.template').height()/(index+1)+"px",'width':$(".video_table_2_main").width()/(index+1)+'px'})
      $(".template_1 object").css({'height':$('.template').height()/(index+1)-23+"px",'width':$('.template').width()/(index+1) -30 + 'px'})
      $('.template_1').css('display','block')
      $('.template_2,.template_3,.template_4,.template_5,.template_6,.template_7').css('display','none')
      break;
    case 1:
      $('.template_2').empty()
      video_emp(index,time);
      $(".template_2 .video_wrap").css({'height':$('.template').height()/(index+1)+"px",'width':$(".video_table_2_main").width()/(index+1)+'px'})
      $(".template_2 object").css({'height':$('.template').height()/(index+1)-22+"px",'width':$('.template').width()/(index+1) -30+ 'px'})
      $('.template_2').css('display','block')
      $('.template_1,.template_3,.template_4,.template_5,.template_6,.template_7').css('display','none')
      break;
    case 2:
      $('.template_3').empty()
      video_emp(index,time);
      $(".template_3 .video_wrap").css({'height':$('.template').height()/(index+1) +"px",'width':$(".video_table_2_main").width()/(index+1)+'px'})
      $(".template_3 object").css({'height':$('.template').height()/(index+1)-23+"px",'width':$('.template').width()/(index+1) - 30 + 'px'})
      $('.template_3').css('display','block')
      $('.template_1,.template_2,.template_4,.template_5,.template_6,.template_7').css('display','none')
      break;
    case 3:
      $('.template_4').empty()
      video_emp(index,time);
      $(".template_4 .video_wrap").css({'height':$('.template').height()/(index+1) +"px",'width':$(".video_table_2_main").width()/(index+1)+'px'})
      $(".template_4 object").css({'height':$('.template').height()/(index+1)-23+"px",'width':$('.template').width()/(index+1) - 30 + 'px'})
      $('.template_4').css('display','block')
      $('.template_1,.template_2,.template_3,.template_5,.template_6,.template_7').css('display','none')
      break;
    default:
      $("#gezi .video_wrap").css({'height':video_wrap_height,'width':video_wrap_width})
      $("#gezi object").css({'height':($(".video_table_2_main").height()-23)+"px",'width':$(".video_table_2_main").width() - 30 + 'px'})
      $('.template_1').css('display','block')
      $('.template_2,.template_3,.template_4,.template_5,.template_6,.template_7').css('display','none')
  }

}

$(".button1").click(function(){
    $(".button1>img").attr("src","app/img/video_2/1_2.png")
    $(".button2>img").attr("src","app/img/video_2/2.png")
    $(".button3>img").attr("src","app/img/video_2/3.png")
    $(".button4>img").attr("src","app/img/video_2/4.png")
    $(".button5>img").attr("src","app/img/video_2/10.png")
    $(".button6>img").attr("src","app/img/video_2/15.png")
    $(".button7>img").attr("src","app/img/video_2/6.png")
  }
)

$(".button2").click(function(){
    $(".button2>img").attr("src","app/img/video_2/2_2.png")
    $(".button1>img").attr("src","app/img/video_2/1.png")
    $(".button3>img").attr("src","app/img/video_2/3.png")
    $(".button4>img").attr("src","app/img/video_2/4.png")
    $(".button5>img").attr("src","app/img/video_2/10.png")
    $(".button6>img").attr("src","app/img/video_2/15.png")
    $(".button7>img").attr("src","app/img/video_2/6.png")
  }
)

$(".button3").click(function(){
    $(".button3>img").attr("src","app/img/video_2/3_2.png")
    $(".button2>img").attr("src","app/img/video_2/2.png")
    $(".button1>img").attr("src","app/img/video_2/1.png")
    $(".button4>img").attr("src","app/img/video_2/4.png")
    $(".button5>img").attr("src","app/img/video_2/10.png")
    $(".button6>img").attr("src","app/img/video_2/15.png")
    $(".button7>img").attr("src","app/img/video_2/6.png")
  }
)

$(".button4").click(function(){
    $(".button4>img").attr("src","app/img/video_2/4_2.png")
    $(".button2>img").attr("src","app/img/video_2/2.png")
    $(".button3>img").attr("src","app/img/video_2/3.png")
    $(".button1>img").attr("src","app/img/video_2/1.png")
    $(".button5>img").attr("src","app/img/video_2/10.png")
    $(".button6>img").attr("src","app/img/video_2/15.png")
    $(".button7>img").attr("src","app/img/video_2/6.png")
  }
)


$(".button5").click(function(){
  $('.template_1,.template_2,.template_3,.template_4,.template_6,.template_7').css('display','none')
  $('.template_5').css('display','block')
  $(".button2>img").attr("src","app/img/video_2/2.png")
  $(".button3>img").attr("src","app/img/video_2/3.png")
  $(".button4>img").attr("src","app/img/video_2/4.png")
  $(".button1>img").attr("src","app/img/video_2/1.png")
  $(".button5>img").attr("src","app/img/video_2/10_2.png")
  $(".button6>img").attr("src","app/img/video_2/15.png")
  $(".button7>img").attr("src","app/img/video_2/6.png")
})

$(".button6").click(function(){
  $('.template_1,.template_2,.template_3,.template_4,.template_5,.template_7').css('display','none')
  $('.template_6').css('display','block')
  $(".button6>img").attr("src","app/img/video_2/15_2.png")
  $(".button2>img").attr("src","app/img/video_2/2.png")
  $(".button3>img").attr("src","app/img/video_2/3.png")
  $(".button4>img").attr("src","app/img/video_2/4.png")
  $(".button1>img").attr("src","app/img/video_2/1.png")
  $(".button5>img").attr("src","app/img/video_2/10.png")
  $(".button7>img").attr("src","app/img/video_2/6.png")
})

$(".button7").click(function(){
  $('.template_1,.template_2,.template_3,.template_4,.template_5,.template_6').css('display','none')
  $('.template_7').css('display','block')
  $(".button7>img").attr("src","app/img/video_2/6_2.png")
  $(".button2>img").attr("src","app/img/video_2/2.png")
  $(".button3>img").attr("src","app/img/video_2/3.png")
  $(".button4>img").attr("src","app/img/video_2/4.png")
  $(".button1>img").attr("src","app/img/video_2/1.png")
  $(".button5>img").attr("src","app/img/video_2/10.png")
  $(".button6>img").attr("src","app/img/video_2/15.png")
})

$("#play1_1").click(function(){
  if(document.getElementById("d1_1_video").paused){
    document.getElementById("d1_1_video").play();
    document.getElementById("play1_1").style.opacity=0
  }
  else{
    document.getElementById("d1_1_video").pause();
    document.getElementById("play1_1").style.opacity=1
  }
})


$("#play1_2").click(function(){
  if(document.getElementById("d1_2_video").paused){
    document.getElementById("d1_2_video").play();
    document.getElementById("play1_2").style.opacity=0
  }
  else{
    document.getElementById("d1_2_video").pause();
    document.getElementById("play1_2").style.opacity=1
  }
})

$(".video_table_3>ul>li").click(function(){
  if($(this).hasClass("active_this")==true){
    $(this).removeClass("active_this");
    $(this).children("img.close_img").css("opacity","0");
  }
  else{
    $(this).addClass("active_this");
    $(this).children("img.close_img").css("opacity","1");
    $(this).siblings().removeClass("active_this");
    $(this).siblings().children("img.close_img").css("opacity","0");
  }
})



$(".video_table_list_2").click(function(){
  $(".video_table_2").css({"width":50+"%"});
  $(".back").css("display","block");
  $(".video_table_3").css("display","block");
  $(".video_table_3>header").css("display","none");
  $(".video_table_3>section").css("display","none");
  $(".video_table_3>footer").css("display","none");
  $(".video_table_3>div").css("display","block");
  $(".video_table_3>ul").css("display","block");
  $(".video_table_list_2_else").css("display","block");
  $(".video_table_list_1_else").css("display","none");
  $(".video_table_list_2").css("backgroundColor","#075BA3");
  $(".video_table_list_1").css("backgroundColor","#023B66");
  $(".video_table_list_2_div").css("backgroundColor","#075BA3");
  $(".video_table_list_1_div").css("backgroundColor","#023B66");
  $(".template_1 object").css({'height':$('.template').height()-23+"px",'width':$('.template').width()-30 + 'px'})
  $(".template_1 .video_wrap").css({'height':$('.template').height()+"px",'width':$(".video_table_2_main").width()+'px'})
  $(".template_2 object").css({'height':$('.template').height()/2-22+"px",'width':$('.template').width()/2 -30+ 'px'})
  $(".template_2 .video_wrap").css({'height':$('.template').height()/2+"px",'width':$(".video_table_2_main").width()/2+'px'})
  $(".template_3 object").css({'height':$('.template').height()/3-22+"px",'width':$('.template').width()/3 -30+ 'px'})
  $(".template_3 .video_wrap").css({'height':$('.template').height()/3+"px",'width':$(".video_table_2_main").width()/3+'px'})
  $(".template_4 object").css({'height':$('.template').height()/4-22+"px",'width':$('.template').width()/4 -30+ 'px'})
  $(".template_4 .video_wrap").css({'height':$('.template').height()/4+"px",'width':$(".video_table_2_main").width()/4+'px'})

  $(".template_1").css("width","100%");
  $(".template_2").css("width","100%");
  $(".template_3").css("width","100%");
  $(".template_4").css("width","100%");
  $(".template_5").css("width","100%");
  $(".template_6").css("width","100%");
  $(".template_7").css("width","100%");
  $(".template_1 object").css({'height':$('.template').height()-23+"px",'width':$('.template').width()-30 + 'px'});
  $(".template_1 .video_wrap").css({'height':$('.template').height()+"px",'width':$(".video_table_2_main").width()+'px'})
  $(".template_2 object").css({'height':$('.template').height()/2-22+"px",'width':$('.template').width()/2 -30+ 'px'})
  $(".template_2 .video_wrap").css({'height':$('.template').height()/2+"px",'width':$(".video_table_2_main").width()/2+'px'})
  $(".template_3 object").css({'height':$('.template').height()/3-22+"px",'width':$('.template').width()/3 -30+ 'px'})
  $(".template_3 .video_wrap").css({'height':$('.template').height()/3+"px",'width':$(".video_table_2_main").width()/3+'px'})
  $(".template_4 object").css({'height':$('.template').height()/4-22+"px",'width':$('.template').width()/4 -30+ 'px'})
  $(".template_4 .video_wrap").css({'height':$('.template').height()/4+"px",'width':$(".video_table_2_main").width()/4+'px'})
})

$(".video_table_list_1").click(function(){
  $(".video_table_2").css({"width":50+"%"});
  $(".back").css("display","block");
  $(".video_table_2").removeClass("col-xs-8")
  $(".video_table_2").addClass("col-xs-6")
  $(".video_table_3").css("display","block")
  $(".video_table_3>header").css("display","block");
  $(".video_table_3>section").css("display","block");
  $(".video_table_3>footer").css("display","block");
  $(".video_table_3>div").css("display","none");
  $(".video_table_3>ul").css("display","none");
  $(".video_table_list_1_else").css("display","block");
  $(".video_table_list_2_else").css("display","none");
  $(".video_table_list_1").css("backgroundColor","#075BA3");
  $(".video_table_list_2").css("backgroundColor","#023B66");
  $(".video_table_list_1_div").css("backgroundColor","#075BA3");
  $(".video_table_list_2_div").css("backgroundColor","#023B66");
  $(".template_1 object").css({'height':$('.template').height()-23+"px",'width':$('.template').width()-30 + 'px'})
  $(".template_1 .video_wrap").css({'height':$('.template').height()+"px",'width':$(".video_table_2_main").width()+'px'})
  $(".template_2 object").css({'height':$('.template').height()/2-22+"px",'width':$('.template').width()/2 -30+ 'px'})
  $(".template_2 .video_wrap").css({'height':$('.template').height()/2+"px",'width':$(".video_table_2_main").width()/2+'px'})
  $(".template_3 object").css({'height':$('.template').height()/3-22+"px",'width':$('.template').width()/3 -30+ 'px'})
  $(".template_3 .video_wrap").css({'height':$('.template').height()/3+"px",'width':$(".video_table_2_main").width()/3+'px'})
  $(".template_4 object").css({'height':$('.template').height()/4-22+"px",'width':$('.template').width()/4 -30+ 'px'})
  $(".template_4 .video_wrap").css({'height':$('.template').height()/4+"px",'width':$(".video_table_2_main").width()/4+'px'})

  $(".template_1").css("width","100%");
  $(".template_2").css("width","100%");
  $(".template_3").css("width","100%");
  $(".template_4").css("width","100%");
  $(".template_5").css("width","100%");
  $(".template_6").css("width","100%");
  $(".template_7").css("width","100%");
  $(".template_1 object").css({'height':$('.template').height()-23+"px",'width':$('.template').width()-30 + 'px'});
  $(".template_1 .video_wrap").css({'height':$('.template').height()+"px",'width':$(".video_table_2_main").width()+'px'})
  $(".template_2 object").css({'height':$('.template').height()/2-22+"px",'width':$('.template').width()/2 -30+ 'px'})
  $(".template_2 .video_wrap").css({'height':$('.template').height()/2+"px",'width':$(".video_table_2_main").width()/2+'px'})
  $(".template_3 object").css({'height':$('.template').height()/3-22+"px",'width':$('.template').width()/3 -30+ 'px'})
  $(".template_3 .video_wrap").css({'height':$('.template').height()/3+"px",'width':$(".video_table_2_main").width()/3+'px'})
  $(".template_4 object").css({'height':$('.template').height()/4-22+"px",'width':$('.template').width()/4 -30+ 'px'})
  $(".template_4 .video_wrap").css({'height':$('.template').height()/4+"px",'width':$(".video_table_2_main").width()/4+'px'})

})

$(".video_table_3>div>input").click(function(){
  if($(".video_table_3>div>input").is(':checked')==true){
    $(".video_table_3>ul li").addClass("active_this");
    $(".close_img").css("opacity","1");
  }
  else{
    $(".video_table_3>ul li").removeClass("active_this");
    $(".close_img").css("opacity","0");
  }
})

$(".back").click(function(){
  $(".video_table_2").css({"width":68+"%"});
  $(".video_table_3").css("display","none");
  $(".back").css("display","none");
  $(".video_table_list_1_else").css("display","none");
  $(".video_table_list_2_else").css("display","none");
  $(".template_1").css("width","100%");
  $(".template_2").css("width","100%");
  $(".template_3").css("width","100%");
  $(".template_4").css("width","100%");
  $(".template_5").css("width","100%");
  $(".template_6").css("width","100%");
  $(".template_7").css("width","100%");
  $(".template_1 object").css({'height':$('.template').height()-23+"px",'width':$('.template').width()-30 + 'px'});
  $(".template_1 .video_wrap").css({'height':$('.template').height()+"px",'width':$(".video_table_2_main").width()+'px'})
  $(".template_2 object").css({'height':$('.template').height()/2-22+"px",'width':$('.template').width()/2 -30+ 'px'})
  $(".template_2 .video_wrap").css({'height':$('.template').height()/2+"px",'width':$(".video_table_2_main").width()/2+'px'})
  $(".template_3 object").css({'height':$('.template').height()/3-22+"px",'width':$('.template').width()/3 -30+ 'px'})
  $(".template_3 .video_wrap").css({'height':$('.template').height()/3+"px",'width':$(".video_table_2_main").width()/3+'px'})
  $(".template_4 object").css({'height':$('.template').height()/4-22+"px",'width':$('.template').width()/4 -30+ 'px'})
  $(".template_4 .video_wrap").css({'height':$('.template').height()/4+"px",'width':$(".video_table_2_main").width()/4+'px'})
})


  $(".video_table>p:nth-child(2)").click(function(){
    if($("#treeDemo").css("display")=="none")
    {$(".list_1").css({"height":81+"%"})
      $(".list_2").css({"height":1+"%"})
      $("#treeDemos").css("display","none")
      $("#dw_d").css("display","none")
      $("#treeDemo").css("display","block")
      $("#dw_d_1").css("display","block")
      $(".video_table>p:nth-child(2)>span").css("backgroundImage","url('app/components/video_2/images/top_v.png')")
      $(".video_table>p:nth-child(4)>span").css("backgroundImage","url('app/components/video_2/images/bot_v.png')")
    }
    else{
      $(".list_1").css({"height":1+"%"})
      $(".list_2").css({"height":81+"%"})
      $("#treeDemos").css("display","block")
      $("#dw_d").css("display","block")
      $("#treeDemo").css("display","none")
      $("#dw_d_1").css("display","none")
      $(".video_table>p:nth-child(2)>span").css("backgroundImage","url('app/components/video_2/images/bot_v.png')")
      $(".video_table>p:nth-child(4)>span").css("backgroundImage","url('app/components/video_2/images/top_v.png')")
    }
  })


  $(".video_table>p:nth-child(4)").click(function(){
    if($("#treeDemos").css("display")=="none"){
      $(".list_2").css({"height":81+"%"})
      $("#treeDemos").css("display","block")
      $("#dw_d").css("display","block")
      $("#treeDemo").css("display","none")
      $("#dw_d_1").css("display","none")
      $(".list_1").css({"height":1+"%"})
      $(".video_table>p:nth-child(4)>span").css("backgroundImage","url('app/components/video_2/images/bot_v.png')")
      $(".video_table>p:nth-child(2)>span").css("backgroundImage","url('app/components/video_2/images/top_v.png')")
    }
    else{
      $(".list_2").css({"height":1+"%"})
      $("#treeDemos").css("display","none")
      $("#dw_d").css("display","none")
      $("#treeDemo").css("display","block")
      $("#dw_d_1").css("display","block")
      $(".list_1").css({"height":81+"%"})
      $(".video_table>p:nth-child(4)>span").css("backgroundImage","url('app/components/video_2/images/top_v.png')")
      $(".video_table>p:nth-child(2)>span").css("backgroundImage","url('app/components/video_2/images/bot_v.png')")
    }

  })
