
  $(".section").css({"height":$(window).height()-250});
  $(".dbul").css({"height":$(window).height()-300});


  $(".add").click(function(){
    event.preventDefault();
    $(this).css("display","none");
    $(this).next().css("display","block");
    $(this).parent().next().css("display","block");
  })
  $(".btn-ad>button").click(function(){
    if(($(this).index()%2)!==0){
      $(this).parent().prev().children(":last-child").css("display","none");
      $(this).parent().css("display","none");
      $(this).parent().prev().children().eq(1).css("display","block");
    }
  })


  $("span.glyphicon").click(function(){
    if($(this).hasClass("glyphicon-chevron-down")){
      $(this).removeClass("glyphicon-chevron-down");
      $(this).addClass("glyphicon-chevron-up");
      $(this).parent().next("div").removeAttr("style");
      $(this).parent().next("div").css({"padding":"10px"});
      $(this).parent().parent().css("height","450px");
      ind2=$(this).parent().parent().index();
      $("#dolist>li").eq(ind2).css("height","450px");
    }else if($(this).hasClass("glyphicon-chevron-up")){
      $(this).removeClass("glyphicon-chevron-up");
      $(this).addClass("glyphicon-chevron-down");
      $(this).parent().next("div").css({"height":"0px"});
      $(this).parent().next("div").css({"padding":"0px"});
      $(this).parent().parent().css("height","90px");
      ind1=$(this).parent().parent().index();
      $("#dolist>li").eq(ind1).css("height","90px");
    }
  })

  $(".rtb").click(function(){
    $(this).parent().parent().parent().children(":first-child").css("display","block");
  })
  $(".dis").click(function(){
    $(this).parent().parent().css("display","none");
  })



  window.onresize = function(){
    $(".section").css({"height":$(window).height()-250});
    $(".dbul").css({"height":$(window).height()-300});
  };
