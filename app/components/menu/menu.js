$(function () {


//  function goto(path){
//    $('#content').load(path)
//  }
  $(function(){
    $("#date_1").addClass("hide_date");
    $("#date_2").addClass("hide_date");
  });
$("#date_1>ul li:first-child").mouseover(function(){
  $("#date_2").css("transform","translate(185%,-255%)");
});
$("#date_1>ul li:nth-child(2)").mouseover(function(){
  $("#date_2").css("transform","translate(185%,-245%)")
})
$("#date_1>ul li:nth-child(3)").mouseover(function(){
  $("#date_2").css("transform","translate(185%,-230%)")
})
$("#date_1>ul li:nth-child(4)").mouseover(function(){
  $("#date_2").css("transform","translate(185%,-268%)")
})
$("#date_1>ul li:nth-child(5)").mouseover(function(){
  $("#date_2").css("transform","translate(185%,-255%)")
})

$("#big_date").click(function(){
    if($("#date_1").css("display")==="block"){
      $("#date_1").addClass("hide_date");
      $("#date_2").addClass("hide_date");
      $("#big_date").css("backgroundColor","rgba(1, 76, 143, 0.6)");
    }
    else
    {$("#date_1").removeClass("hide_date");
    }
  }
);

$("#big_date").mouseout(function(){
  $("#date_1").addClass("hide_date");
  $("#date_2").addClass("hide_date");
});

$(".menus>ul li").mouseout(function(){
  $(this).not("#big_date").css("backgroundColor","")
});

$("#date_1 li").mouseover(function(){
  $("#date_1").removeClass("hide_date");
  $("#date_2").addClass("hide_date");
});

$("#date_2 li").mouseover(function(){
  $("#date_1").removeClass("hide_date");
  $("#date_2").removeClass("hide_date");
});

$("#date_1>ul li").click(function(){
    $(this).css("background","#014C8F");
    $(this).siblings().css("backgroundColor","");
    $("#date_2").removeClass("hide_date");
    $("#date_2").removeClass("hide_date");
  }
);

$("#date_2>ul li").click(function(){
    $("#date_2").addClass("hide_date");
    $("#date_1").addClass("hide_date");
    $("#big_date").css("backgroundColor","")
  }
);

$("#date_2>ul li").mouseover(function(){
    $(this).css("background","#014C8F");
    $(this).siblings().css("backgroundColor","");
  }
);

$("#menu li").mouseover(function(){
  $(this).css("backgroundColor","rgba(1,76,143,.6)");
  console.log($(this).css("backgroundColor"));
  $(this).siblings().css("backgroundColor","");
})
})
