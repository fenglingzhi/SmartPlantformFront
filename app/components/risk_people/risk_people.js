$(function () {
//内容尺寸计算
  var total_model=$(".total_1").width();
  var total_model2=$("#imp_person_per1").width();
  var total_model3=$(".total_1_2").width();
  $("#imp_person_row2").css({"width":total_model-(total_model2+total_model3)-5+"px"});
  $('.contents_two').css({ 'height': $(window).height() - 90 + "px" });
  $(".contents_two div.row:nth-child(2)").css({ 'height': $(window).height() - $("#imp_person").height() - 186 + "px" });
  var trans=$(".contents_two div.row:nth-child(2)").css("height");
  var trans_new=parseInt(trans);
  var fixed=2;
  var trans_new2=-(trans_new/fixed+46);
  $("#d111").css({'top':trans_new2+'px'});
//内容尺寸计算


  //3D轮播
  len=$(" #slider>span>span").length;
//  console.log(len);
  $(" #slider>span").css("width",(len-1)*247+25+"px");
  $(" #slider>span>span").click(function(){
    inx=$(this).index();
//    console.log(inx);
    if(inx!==0){
      $(this).addClass("one").siblings().removeClass("one");
      $(" #slider>span>span").eq(inx-1).addClass("two").siblings().removeClass("two");
//    console.log(0);
      $(" #slider>span>span").eq(inx+1).addClass("twos").siblings().removeClass("twos");
//    console.log(1);
//    inx-3
      $(" #slider>span").css("left",-(inx-3)*257+"px");
    }
  })
  //3D轮播



  //左上角圆饼图
  per_1 = echarts.init(document.getElementById("imp_person_per1"));
  option_left ={
    backgroundColor:"rgba(34, 142, 186, .41)",
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    title: {
      textStyle: {
        fontSize: 20,
        color: 'white'
      },
      left: '2%',
      top:'2%'
    },
    series: [{
      name: '重大风险人员占比',
      type: 'pie',
      selectedMode: 'single',
      radius: [0, '65%'],
      center: ['40%', '55%'],
      label: {
        normal: {
          position: 'inner'
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: [
        { value: '39', name: '重大风险' },
        { value: '61', name: '非重大风险' },
      ]
    }, ]
  };
  per_1.setOption(option_left);
  per_3 = echarts.init(document.getElementById("imp_person_per3"));
  option_right ={
    backgroundColor:"rgba(34, 142, 186, 0.41)",
    series: [{
      name: '访问来源',
      type: 'pie',
      selectedMode: 'single',
      radius: [0, '60%'],
      center: ['15%', '55%'],
      label: {
        normal: {}
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: [{
        value: '300',
        name: '一级风险人员',
        label: {
          normal: {
            fontSize: 20
          }
        },
        itemStyle: {
          normal: {
            color: 'orange'
          }
        }
      },
        {
          value: '400',
          name: '二级风险人员',
          label: {
            normal: {
              fontSize: 20
            }
          },
          itemStyle: {
            normal: {
              color: 'yellow'
            }
          }
        },
        {
          value: '500',
          name: '三级风险人员',
          label: {
            normal: {
              fontSize: 20
            }
          },
          itemStyle: {
            normal: {
              color: 'green'
            }
          }
        },
        {
          value: 1485.89,
          itemStyle: {
            normal: {
              opacity: 0
            }
          }
        },
      ]
    }]
  };
  per_3.setOption(option_right);
  //左上角圆饼图

  //右上角折线图
  per_4 = echarts.init(document.getElementById("imp_person_per4"));
  option_part2 ={
    backgroundColor:"transparent",
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '8%',
      containLabel: true
    },
    xAxis: [{
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#3F668A'
        }
      },
      axisLabel: {
        textStyle: {
          fontSize: 14,
          color: "white"
        }
      },
      type: 'category',
      data: ['2017-05','2017-06','2017-07','2017-08','2017-09']
    }],
    yAxis: [{
      axisLabel: {
        textStyle: {
          fontSize: 14,
          color: "white"
        }
      },
      splitLine: {
        lineStyle: {
          color: ['#46708B']
        }
      },
      axisLine: {
        show: false
      },
      type: 'value'
    }],
    series: [{
      name: '一级风险人员',
      type: 'bar',
      data: ['44','55','43','39','44'],
      itemStyle: {
        normal: {
          color: 'orange'
        }
      }
    },
      {
        name: '二级风险人员',
        type: 'bar',
        data: ['99','88','76','87','76'],
        itemStyle: {
          normal: {
            color: 'yellow'
          }
        }
      },
      {
        name: '三级风险人员',
        type: 'bar',
        data: ['44','65','55','45','47'],
        itemStyle: {
          normal: {
            color: 'green'
          }
        }
      },
      {
        name: '总体',
        type: 'line',
        data: ['123','122','140','134','160'],
        itemStyle: {
          normal: {
            color: '#B65910'
          }
        }
      }

    ]
  };
  per_4.setOption(option_part2);
  //右上角折线图

  var trans=$(".contents_two div.row:nth-child(2)").css("height");
  var trans_new=parseInt(trans);
  var fixed=2;
  var trans_new2=-(trans_new/fixed+46);
  $("#d111").css({'top':trans_new2+'px'});

$(".imp_person_toggle>span:nth-child(2)").click(function(){
  $(".img-holder>div p:nth-child(4)").text("风险等级：一级");
  $(this).css("backgroundColor","#1C4564");
  $(this).siblings().css("backgroundColor","");
});

$(".imp_person_toggle>span:nth-child(3)").click(function(){
  $(".img-holder>div p:nth-child(4)").text("风险等级：二级");
  $(this).css("backgroundColor","#1C4564");
  $(this).siblings().css("backgroundColor","");
});

$(".imp_person_toggle>span:nth-child(4)").click(function(){
  $(".img-holder>div p:nth-child(4)").text("风险等级：三级");
  $(this).css("backgroundColor","#1C4564");
  $(this).siblings().css("backgroundColor","");
});

  //echarts自适应
  per_1.resize();
  per_3.resize();
  per_4.resize();
  //echarts自适应
})


//页面刷新
  window.onresize = function() {
    $('.contents_two').css({ 'height': $(window).height() - 90 + "px" });
    $(".contents_two div.row:nth-child(2)").css({ 'height': $(window).height() - $("#imp_person").height() - 186 + "px" })
    per_1.resize();
    per_3.resize();
    per_4.resize();
    var trans=$(".contents_two div.row:nth-child(2)").css("height");
    var trans_new=parseInt(trans);
    var fixed=2;
    var trans_new2=-(trans_new/fixed+46);
    $("#d111").css({'top':trans_new2+'px'});
  }
//页面刷新
