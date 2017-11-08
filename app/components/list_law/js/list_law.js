$(function(){
  $(".table_main>table>tbody>tr:not(:first-child)>td:first-child").html("<input type='checkbox'>" +
  "</input>");

  $(".table_main>table>tbody>tr:first-child>td:first-child>input").click(function(){
    if($(".table_main>table>tbody>tr:first-child>td:first-child>input").prop("checked")==true)
    {
      $(".table_main>table>tbody>tr:not(:first-child)>td:first-child>input").prop("checked",true)
    }
    else
    {
      $(".table_main>table>tbody>tr:not(:first-child)>td:first-child>input").prop("checked",false)
    }
  });


  $(".pagination_1>li:not(:first-child):not(:last-child)").click(function(){
    $(this).addClass("active_bgc");
    $(this).siblings().removeClass("active_bgc");
  });
  laydate.render({
    elem: '#starttime_law', //指定元素
    type: 'datetime',
    theme: '#2590dc'
  });
  laydate.render({
    elem: '#endtime_law', //指定元素
    type: 'datetime',
    theme: '#2590dc'
  });
  $(".dropdown-menu>li").click(function(){
    var new_text=$(this).text();
    $(this).parent().prev().children(":first-child").text(new_text);
  })

  $("#page").paging({
    pageNo:1,
    totalPage: 7,
    totalSize: 200
  })


});
