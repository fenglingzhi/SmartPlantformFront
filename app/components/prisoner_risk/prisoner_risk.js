$(function(){

  //内容尺寸计算
  var total_height=$(".prisoner_risk").height();
  $("#right_top").css({"height":total_height/2+"px"});
  $("#right_bottom").css({"height":total_height/2+"px"});
  var table_height=$("#right_bottom").height();
  console.log(table_height);
  var table_height2=$("#right_bottom>div:first-child").height();
  console.log(table_height2);
  $(".table").css({"height":table_height-table_height2-50+"px"});
  //内容尺寸计算

  //左下连续违规
  $(".toggle_2").click(function(){
    $(".toggle_1").css({"height":10+"%"});
    $(".toggle_1").css("transition","height 2s");
    $(".toggle_2>span:nth-child(2)").removeClass("glyphicon-chevron-up");
    $(".toggle_2>span:nth-child(2)").addClass("glyphicon-chevron-down");
    $(".mid-midbt").css("opacity","0")
    $("#center_echarts").css("opacity","0")
    $(".mid-midbt").css("transition","opacity 180ms")
    $("#center_echarts").css("transition","opacity 180ms")
  })
  //左下连续违规

  //左上违规类型
  $(".toggle_1").click(function(){
    $(".toggle_1").css({"height":90+"%"});
    $(".toggle_1").css("transition","height 2s");
    $(".toggle_2>span:nth-child(2)").removeClass("glyphicon-chevron-down");
    $(".toggle_2>span:nth-child(2)").addClass("glyphicon-chevron-up");
    $(".mid-midbt").css("opacity","1")
    $("#center_echarts").css("opacity","1")
    $(".mid-midbt").css("transition","opacity 400ms")
    $("#center_echarts").css("transition","opacity 400ms")
  })
  //左上违规类型



  //圆饼图
  option_top= {
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series: [{
      name: '库存情况',
      type: 'pie',
      radius: '68%',
      center: ['50%', '53%'],
      clockwise: false,
      data: [{
        value: 15,
        name: '轻微'
      }, {
        value: 55,
        name: '一般'
      }, {
        value: 35,
        name: '严重'
      },
      ],
      label: {
        normal: {
          textStyle: {
            color: '#fff',
            fontSize: 17
          }
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      itemStyle: {
        normal: {
          borderWidth: 0,
          borderColor: 'transparent'
        },
        emphasis: {
          borderWidth: 0,
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }],
    color: [
      '#FF6634',
      '#C0232A',
      '#FCCE0F'
    ],
    backgroundColor: 'transparent'
  };
  center2=echarts.init(document.getElementById("center_echarts"));
  center2.setOption(option_top);
  //圆饼图

  //柱状图
  option_top_2= {
    backgroundColor: 'transparent',
    animation: false,
    tooltip : {
      trigger: 'axis',
      axisPointer : {
        type : 'shadow',
        shadowStyle: {
          // color: 'rgba(255, 109, 0, 0.8)'
        }
      }
    },
    grid: {
      top: 60,
      bottom: 40
    },
    xAxis: {
      splitNumber:25,
      type : 'category',
      axisLine: {
        lineStyle:{
          type:'solid',
          color:'#a8aab0'
        }
      },
      axisLabel: {
        show: true,
        rotate:0,
        textStyle: {
          color: '#a8aab0',
        }
      },

      axisTick: {show: false},
      splitLine: {
        lineStyle:{
          type:'solid',
          color: '#cfc3bd'
        }
      },
      data : ['事件', '事件','事件','事件','事件','事件','事件','事件','事件','事件']

    },
    yAxis: {
      type : 'value',
      // position: 'top',
      axisLabel: {
        textStyle: {
          color: '#a8aab0',
        }
      },
      axisLine:{
        show: false
      },
      axisTick:{
        show: false
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ['#fff'],
          opacity:0.06
        }
      }

    },
    series : [
      {
        name:'月开支',
        type:'bar',
        stack: '月份',
        label: {
          normal: {

            textStyle: {
              color: '#a8aab0',
            },
            position: 'top',
            show: true,
            formatter: '{c}'
          }
        },
        barCategoryGap: 0,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
              offset: 0,
              color: 'transparent'
            }, {
              offset: 0.5,
              color: 'transparent'
            }, {
              offset: 0.8,
              color: 'rgba(0, 0, 0, 0.05)'
            }, {
              offset: 0.92,
              color: 'rgba(0, 0, 0, 0.08)'
            }, {
              offset: 1,
              color: 'rgba(0, 0, 0, 0.2)'
            }])
          }
        },
        data:[1900, 1029, 1602, 2004, 1100, 1800, 2800, 1407, 2200, 900]
      },
      {
        type: 'bar',
        stack: '月份',
        silent: true,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        itemStyle: {
          normal: {
            color: '#ff5a00',
            shadowColor: 'rgba(0, 0, 0, 0.3)',
            shadowBlur: 10,
            shadowOffsetX: -4
          }
        },
        barMinHeight: 4
      }
    ]
  }
  center3=echarts.init(document.getElementById("center_echarts_2"));
  center3.setOption(option_top_2);
  //柱状图

  //折线图
  right_top = echarts.init(document.getElementById("right_top"));
  option_right_top= {
    tooltip : {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    grid: {
      top:'25%',
      left: '4%',
      right: '6%',
      bottom: '5%',
      containLabel: true
    },
    xAxis : [
      {
        axisTick: {
          show: false
        },
        type : 'category',
        axisLine:{
          lineStyle:{
            color:'rgba(255,255,255,.8)'
          }
        },
        boundaryGap : false,
        data : ['一月','二月','三月','四月','五月','六月',
          '七月','八月','九月','十月','十一月','十二月']
      }
    ],
    yAxis : [
      {
        type : 'value',
        axisLine:{
          show:false,
          lineStyle:{
            color:'rgba(255,255,255,.8)'
          }
        }
      }
    ],
    series : [
      {
        name:'重点犯数量3',
        type:'line',
        smooth: true,
        symbol: 'circle',
        showSymbol: false,
        itemStyle: {
          normal: {
            color: '#2DC7C9'
          }
        },
        stack: '总量',
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#68D4D5'
            }, {
              offset: 1,
              color: 'rgba(147,217,218,0.2)'
            }], false)
          }
        },
        data:[250, 232, 201, 254, 240, 230, 210,250, 232, 201, 254, 190]
      },
    ]
  };
  right_top.setOption(option_right_top);
  //折线图
})
