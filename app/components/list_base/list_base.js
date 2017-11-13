
//$("#detail").css({"height":$(window).height()-500});

$("#record>ul>li").click(function(){
  ix=$(this).index();
  console.log(ix+1);
  $(this).addClass("active"+(ix+1)).siblings().removeClass();
})
$(".drbto").click(function(){
  if($(this).hasClass("glyphicon-chevron-down")){
    $(this).removeClass("glyphicon-chevron-down");
    $(this).addClass("glyphicon-chevron-up");
    $("#operat").css("height","0px")
  }else if($(this).hasClass("glyphicon-chevron-up")) {
    $(this).removeClass("glyphicon-chevron-up");
    $(this).addClass("glyphicon-chevron-down");
    $("#operat").removeAttr("style");
  }
})
$("#mid-bs").css({"height":$(window).height()-200})
window.onresize = function(){
  //$("#detail").css({"height":$(window).height()-500});
  $("#mid-bs").css({"height":$(window).height()-200})

};
