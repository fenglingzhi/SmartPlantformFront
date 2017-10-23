$(function () {
  //if($("#button1").hasClass('turn')==false){
  //  $("#button1").click(function(){
  //    console.log(2)
  //    $("#button1").css("top","110px");
  //    $(this).addClass("turn");
  //    console.log($("#button1").hasClass('turn'));
  //  })
  //}else if($("#button1").hasClass('turn')==true){
  //  $("#button1").click(function(){
  //    console.log(1)
  //    $("#button1").css("top","10px");
  //  })
  //}

  $("#button1").click(function(){
    if($("#button1").hasClass('turn')==false){
      $("#button1").css("top","110px");
      $(this).addClass("turn");
      $(".menus").css("height","100px")
    }else if($("#button1").hasClass('turn')==true){
      $("#button1").css("top","10px");
      $(this).removeClass("turn");
      $(".menus").css("height","0")
    }

  })

////  function goto(path){
////    $('#content').load(path)
////  }
//  $(function(){
//    $("#date_1").addClass("hide_date");
//    $("#date_2").addClass("hide_date");
//  });
//$("#date_1>ul li:first-child").mouseover(function(){
//  $("#date_2").css("transform","translate(185%,-255%)");
//});
//$("#date_1>ul li:nth-child(2)").mouseover(function(){
//  $("#date_2").css("transform","translate(185%,-245%)")
//})
//$("#date_1>ul li:nth-child(3)").mouseover(function(){
//  $("#date_2").css("transform","translate(185%,-230%)")
//})
//$("#date_1>ul li:nth-child(4)").mouseover(function(){
//  $("#date_2").css("transform","translate(185%,-268%)")
//})
//$("#date_1>ul li:nth-child(5)").mouseover(function(){
//  $("#date_2").css("transform","translate(185%,-255%)")
//})
//
//$("#big_date").click(function(){
//    if($("#date_1").css("display")==="block"){
//      $("#date_1").addClass("hide_date");
//      $("#date_2").addClass("hide_date");
//      $("#big_date").css("backgroundColor","rgba(1, 76, 143, 0.6)");
//    }
//    else
//    {$("#date_1").removeClass("hide_date");
//    }
//  }
//);
//
//$("#big_date").mouseout(function(){
//  $("#date_1").addClass("hide_date");
//  $("#date_2").addClass("hide_date");
//});
//
//$(".menus>ul li").mouseout(function(){
//  $(this).not("#big_date").css("backgroundColor","")
//});
//
//$("#date_1 li").mouseover(function(){
//  $("#date_1").removeClass("hide_date");
//  $("#date_2").addClass("hide_date");
//});
//
//$("#date_2 li").mouseover(function(){
//  $("#date_1").removeClass("hide_date");
//  $("#date_2").removeClass("hide_date");
//});
//
//$("#date_1>ul li").click(function(){
//    $(this).css("background","#014C8F");
//    $(this).siblings().css("backgroundColor","");
//    $("#date_2").removeClass("hide_date");
//    $("#date_2").removeClass("hide_date");
//  }
//);
//
//$("#date_2>ul li").click(function(){
//    $("#date_2").addClass("hide_date");
//    $("#date_1").addClass("hide_date");
//    $("#big_date").css("backgroundColor","")
//  }
//);
//
//$("#date_2>ul li").mouseover(function(){
//    $(this).css("background","#014C8F");
//    $(this).siblings().css("backgroundColor","");
//  }
//);
//
//$("#menu li").mouseover(function(){
//  $(this).css("backgroundColor","rgba(1,76,143,.6)");
//  console.log($(this).css("backgroundColor"));
//  $(this).siblings().css("backgroundColor","");
//})
})
function change_home_page(home_name) {
  switch (home_name){
    /*全市风险*/
    case 'QSFX':
      $('#content').load('app/components/home/home.html');
      break;
    /*基础风险*/
    case 'JCFX':
      $('#content').load('app/components/base_rank/base_rank.html');
      break;
    /*风险人员*/
    case 'FXRY':
      $('#content').load('app/components/risk_people/risk_people.html');
      break;
    /*全市押量*/
    case 'QSYL':
      $('#content').load('app/components/violating/violating.html');
      break;
    /*工作提醒*/
    case 'GZTX':
      $('#content').load('app/components/work_remind/work_remind.html');
      break;
  }
}
