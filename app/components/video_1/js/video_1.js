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

$(function() {
  //初始化参数
  $('#ocx').initDecode();
  //设置窗口播放条数
  $('#ocx').setVideoNum(16);

  $("#one_click").click(function() {
    $('#ocx').setVideoNum(1);
    $(this).attr("src","app/img/video_1/1_1.png");
    $("#two_click").attr("src","app/img/video_1/4.png")
    $("#three_click").attr("src","app/img/video_1/9.png")
    $("#four_click").attr("src","app/img/video_1/16.png")
  })

  $("#two_click").click(function() {
    $('#ocx').setVideoNum(4);
    $(this).attr("src","app/img/video_1/4_1.png");
    $("#one_click").attr("src","app/img/video_1/1.png")
    $("#three_click").attr("src","app/img/video_1/9.png")
    $("#four_click").attr("src","app/img/video_1/16.png")
  })

  $("#three_click").click(function() {
    $('#ocx').setVideoNum(9);
    $(this).attr("src","app/img/video_1/9_1.png")
    $("#one_click").attr("src","app/img/video_1/1.png")
    $("#two_click").attr("src","app/img/video_1/4.png")
    $("#four_click").attr("src","app/img/video_1/16.png")
  })

  $("#four_click").click(function() {
    $('#ocx').setVideoNum(16);
    $(this).attr("src","app/img/video_1/16_1.png")
    $("#one_click").attr("src","app/img/video_1/1.png")
    $("#three_click").attr("src","app/img/video_1/9.png")
    $("#two_click").attr("src","app/img/video_1/4.png")
  })
  for(let i = 0; i <= 16; i++) {
    $('#ocx').videoAsyncMultPlay("", 433, "", "", "", "10.58.1.254", 8000, "admin", "12345", i, "", "", "1102011", 0, 1);
  }
})


$(".video_table_list_2").click(function(){
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
})

$(".video_table_list_1").click(function(){
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
$(".prison_dorm").on('click',function () {
  $('#content').load('app/components/crimal_dorm/crimal_dorm.html');
})
