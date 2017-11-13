$(function(){
  $(".dropdown-menu>li").click(function(){
    var new_text=$(this).text();
    $(this).parent().prev().children(":first-child").text(new_text);
  })
  $("#page").paging({
    pageNo:1,
    totalPage: 7,
    totalSize: 200
  })
})
