$(function(){
  var two_width=parseInt($(".mid-left>div:first-child>div:nth-child(2)").css("width"));
  var three_width=parseInt($(".mid-left").css("width"));
  var four_width=parseInt($(".right-right-1>div:first-child").css("width"));
  var five_width=parseInt($(".mid_left_1_3").css("width"));
  var height_model=parseInt($(".right-right-1_1").css("height"));
  var height_model_2=parseInt($(".right-right-1-1").css("height"));

  var right_model=parseInt($(".right-right-1-1").css("width"));
  var right_model2=parseInt($(".right-right-1_2").css("width"));


  var width_model=parseInt($(".right-right-1_1").css("width"));
  var width_model_2=parseInt($(".right-right-1-1").css("width"));
  var one_line=parseInt($(".mid_left_1_2").css("width"));
  var height_ema=$("#top_2").height();


  $(".right-right-1").css({"width":one_line});
  $(".right-right-2").css({"width":one_line});
  $(".right-right-3").css({"width":one_line});
  $(".right-right-1_1").css({"width":one_line});
  $(".right-right-2_1").css({"width":one_line});
  $(".right-right-3_1").css({"width":one_line});


  $(".right-right-1_2").css({"marginLeft":one_line});
  $(".right-right-2-2").css({"marginLeft":one_line});
  $(".right-right-3-2").css({"marginLeft":one_line});
  $(".right-right-1_1").next().css({"marginTop":-height_model});
  $(".right-right-1_1").next().css({"marginLeft":two_width/2+"px"});
  $(".right-right-2_1").next().css({"marginTop":-height_model});
  $(".right-right-2_1").next().css({"marginLeft":two_width/2+"px"});
  $(".right-right-3_1").next().css({"marginTop":-height_model});
  $(".right-right-3_1").next().css({"marginLeft":two_width/2+"px"});

  $(".imp_person_toggle2").css("opacity","0")
  $(".imp_person_toggle3").css("opacity","0")
  $(".imp_person_toggle1").css("opacity","1")


  $(".mid-left>div:first-child>div:first-child").mouseover(function(){
    $("#top_2").css("overflow","hidden");
    $("#mid_2").css("overflow","hidden");
    $("#bottom_2").css("overflow","hidden");

    $("#top_3").css("overflow","hidden");
    $("#mid_3").css("overflow","hidden");
    $("#bottom_3").css("overflow","hidden");

    $("#top_2").css({"top":-height_ema+"px"});
    $("#mid_2").css({"top":-height_ema+"px"});
    $("#bottom_2").css({"top":-height_ema+"px"});

    $(".imp_person_toggle3").css("opacity","0")
    $(".imp_person_toggle2").css("opacity","0")
    $(".imp_person_toggle1").css("opacity","1")


    $(".imp_person_toggle3").css("transition","0s")
    $(".imp_person_toggle2").css("transition","0s")
    $(".imp_person_toggle1").css("transition","8s")

    $(".mid-left>div:first-child>div:nth-child(2)").css({"width":two_width+"px"});
    $(".mid-left>div:first-child>div:nth-child(2)").css("transition","width 2s");
    $(".right-right-1>div:nth-child(2)").css("width","0");
    $(".right-right-2-2").css("width","0");
    $(".right-right-3-2").css("width","0");
    $(".mid_left_2_3").css({"width":two_width+"px"});
    $(".mid_left_3_3").css({"width":two_width+"px"});
    $(".mid_left_2_3").css("transition","width 2s");
    $(".mid_left_3_3").css("transition","width 2s");
    $(".right-right-1").css({"marginLeft":0+"px"});
    $(".right-right-2").css({"marginLeft":0+"px"});
    $(".right-right-3").css({"marginLeft":0+"px"});
    $(".right-right-1").addClass("trans_example");
    $(".right-right-2").addClass("trans_example");
    $(".right-right-3").addClass("trans_example");
    $(".right-right-1_1").css("marginLeft",0);
    $(".right-right-2_1").css("marginLeft",0);
    $(".right-right-3_1").css("marginLeft",0);
    $(".right-right-1_1").next().css("width","0");
    $(".right-right-1_1").next().css({"marginLeft":two_width/2+"px"});
    $(".right-right-2_1").next().css("width","0");
    $(".right-right-2_1").next().css({"marginLeft":two_width/2+"px"});

    $(".right-right-3_1").next().css("width","0");
    $(".right-right-3_1").next().css({"marginLeft":two_width/2+"px"});
  })

  $(".right-right-1").mouseover(function(){
    $("#top_2").css({"top":0+"px"});
    $("#mid_2").css({"top":0+"px"});
    $("#bottom_2").css({"top":0+"px"});


    $("#top_3").css("overflow","hidden");
    $("#mid_3").css("overflow","hidden");
    $("#bottom_3").css("overflow","hidden");

    $(".imp_person_toggle1").css("opacity","0")
    $(".imp_person_toggle3").css("opacity","0")
    $(".imp_person_toggle2").css("opacity","1")


    $(".imp_person_toggle1").css("transition","0s")
    $(".imp_person_toggle3").css("transition","0s")
    $(".imp_person_toggle2").css("transition","8s")

    $("#top_2").css("overflow","visible");
    $("#mid_2").css("overflow","visible");
    $("#bottom_2").css("overflow","visible");
    $(".right-right-1>div:nth-child(2)").css({"width":five_width+"px"});
    $(".right-right-2-2").css({"width":five_width+"px"});
    $(".right-right-3-2").css({"width":five_width+"px"});
    $(".right-right-1>div:nth-child(2)").css("transition","width 2s");
    $(".right-right-2-2").css("transition","width 2s");
    $(".right-right-3-2").css("transition","width 2s");
    $("right-right-2-2").css("transition","width 2s");
    $(".right-right-1_1").next().css("width","0");
    $(".right-right-1_1").next().css({"marginLeft":two_width/2+"px"});

    $(".right-right-2_1").next().css("width","0");
    $(".right-right-2_1").next().css({"marginLeft":two_width/2+"px"});

    $(".right-right-3_1").next().css("width","0");
    $(".right-right-3_1").next().css({"marginLeft":two_width/2+"px"});
    $(".mid_left_1_3").css("width","0");
    $(".mid_left_2_3").css("width","0");
    $(".mid_left_3_3").css("width","0");
    $(".mid_left_1_3").css("transition","2s");
    $(".mid_left_2_3").css("transition","2s");
    $(".mid_left_3_3").css("transition","2s");
    $(".right-right-1").css({"marginLeft":-two_width+"px"});
    $(".right-right-2").css({"marginLeft":-two_width+"px"});
    $(".right-right-3").css({"marginLeft":-two_width+"px"});
    $(".right-right-1").addClass("trans_example");
    $(".right-right-2").addClass("trans_example");
    $(".right-right-3").addClass("trans_example");
    $(".right-right-1_1").css("marginLeft",0);
    $(".right-right-2_1").css("marginLeft",0);
    $(".right-right-3_1").css("marginLeft",0);

    $(".last-right").css({"width":width_model+"px"});
    $(".last-right").css("marginLeft","-30px");


    per_1_1.resize();
    per_2_1.resize();
    per_3_1.resize();
  })


  $(".right-right-1_1").mouseover(function(){
    $(".last-right-next").css({"width":five_width+"px"});
    $(".right-right-2-2").css({"width":five_width+"px"});
    $(".right-right-3-2").css({"width":five_width+"px"});
    //$(".last-right-next").css("transition","2s");
    //$(".right-right-2-2").css("transition","2s");
    //$(".right-right-3-2").css("transition","2s");
    $(".right-right-1>div:nth-child(2)").css("width","0");
    $(".right-right-2-2").css("width","0");
    $(".right-right-3-2").css("width","0");

    $(".right-right-1_1").next().css({"width":five_width+"px"});
    $(".right-right-1_1").next().css({"marginLeft":-(two_width/2)+"px"});
    $(".right-right-1_1").next().css("transition","2s");

    $(".right-right-2_1").next().css({"width":five_width+"px"});
    $(".right-right-2_1").next().css({"marginLeft":-(two_width/2)+"px"});
    $(".right-right-2_1").next().css("transition","2s");

    $(".imp_person_toggle1").css("opacity","0")
    $(".imp_person_toggle2").css("opacity","0")
    $(".imp_person_toggle3").css("opacity","1")


    $(".imp_person_toggle1").css("transition","0s")
    $(".imp_person_toggle2").css("transition","0s")
    $(".imp_person_toggle3").css("transition","8s")

    $(".right-right-3_1").next().css({"width":five_width+"px"});
    $(".right-right-3_1").next().css({"marginLeft":-(two_width/2)+"px"});
    $(".right-right-3_1").next().css("transition","2s");


    $(".right-right-1").css({"marginLeft":-two_width+"px"});
    $(".right-right-2").css({"marginLeft":-two_width+"px"});
    $(".right-right-3").css({"marginLeft":-two_width+"px"});
    $(".right-right-1").addClass("trans_example");
    $(".right-right-2").addClass("trans_example");
    $(".right-right-3").addClass("trans_example");
    $(".right-right-1_1").css({"marginLeft":-two_width+"px"});
    $(".right-right-2_1").css({"marginLeft":-two_width+"px"});
    $(".right-right-3_1").css({"marginLeft":-two_width+"px"});
    $(".right-right-1_1").addClass("trans_example");
    $(".right-right-2_1").addClass("trans_example");
    $(".right-right-3_1").addClass("trans_example");
    $(".mid_left_1_3").css("width","0");
    $(".mid_left_2_3").css("width","0");
    $(".mid_left_3_3").css("width","0");
    $(".mid_left_1_3").css("transition","2s");
    $(".mid_left_2_3").css("transition","2s");
    $(".mid_left_3_3").css("transition","2s");

    $(".right-right-1>div:nth-child(2)").css("width","0");
    $(".right-right-2-2").css("width","0");
    $(".right-right-3-2").css("width","0");

    $("#top_2").css("overflow","hidden");
    $("#mid_2").css("overflow","hidden");
    $("#bottom_2").css("overflow","hidden");

    $("#top_2").css({"top":-height_ema+"px"});
    $("#mid_2").css({"top":-height_ema+"px"});
    $("#bottom_2").css({"top":-height_ema+"px"});
    per_1_2.resize();
    per_2_2.resize();
    per_3_2.resize();
  });
  $(".mid_left_1_2_img").css({"top":height_model/4,"left":width_model/7});
  $(".mid_right_1_2_img").css({"top":height_model_2/4,"left":width_model_2/7});


  //echarts

  per_1=echarts.init(document.getElementById("top_1"));
  option_top={
    title: {
      text: '',
      textStyle :{
        color : 'rgba(86,86,86,.8)',
        fontSize : 14,
        textAlign : 'center',
      }
    },

    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: '#fff'
        }
      }
    },
    legend: {
      icon: 'rect',
      itemWidth: 14,
      itemHeight: 5,
      itemGap: 13,
      // data: ['移动', '电信', '联通'],
      right: '4%',
      textStyle: {
        fontSize: 12,
        color: 'rgba(255,255,255,.6)'
      }
    },
    grid: {
      left: '3%',
      right: '6%',
      bottom: '3%',
      top:'25%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      boundaryGap: false,
      axisLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.6)'
        }
      },
      data: ['一月','二月','三月','四月','五月','六月','七月']
    }],
    yAxis: [{
      type: 'value',
      // name: '次',
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.6)'
        }
      },
      axisLabel: {
        margin: 10,
        textStyle: {
          fontSize: 14
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.2)'
        }
      }
    }],
    series: [
      {
        name: '民警履职',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            width: 2
          }
        },
        itemStyle: {
          normal: {
            color: 'rgb(255, 71, 1)',
            borderColor: 'rgba(255, 71, 1,0.2)',
            borderWidth: 20

          }
        },
        data: [120, 110, 125, 145, 122,  134, 150]
      },
    ]
  };
  per_1.setOption(option_top);

  per_1_1=echarts.init(document.getElementById("top_2"));
  option_top2={
    title: {
      text: '',
      textStyle :{
        color : 'rgba(86,86,86,.8)',
        fontSize : 14,
        textAlign : 'center',
      }
    },

    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: '#fff'
        }
      }
    },
    legend: {
      icon: 'rect',
      itemWidth: 14,
      itemHeight: 5,
      itemGap: 13,
      // data: ['移动', '电信', '联通'],
      right: '4%',
      textStyle: {
        fontSize: 12,
        color: 'rgba(255,255,255,.6)'
      }
    },
    grid: {
      left: '3%',
      right: '6%',
      bottom: '3%',
      top:'25%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      boundaryGap: false,
      axisLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.6)'
        }
      },
      data: ['一月','二月','三月','四月','五月','六月','七月']
    }],
    yAxis: [{
      type: 'value',
      // name: '次',
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.6)'
        }
      },
      axisLabel: {
        margin: 10,
        textStyle: {
          fontSize: 14
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.2)'
        }
      }
    }],
    series: [
      {
        name: '民警履职',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            width: 2
          }
        },
        itemStyle: {
          normal: {
            color: 'rgb(255, 71, 1)',
            borderColor: 'rgba(255, 71, 1,0.2)',
            borderWidth: 20

          }
        },
        data: [120, 110, 125, 145, 122,  134, 150]
      },
    ]
  };
  per_1_1.setOption(option_top2);

  per_1_2=echarts.init(document.getElementById("top_3"));
  option_top3={
    title: {
      text: '',
      textStyle :{
        color : 'rgba(86,86,86,.8)',
        fontSize : 14,
        textAlign : 'center',
      }
    },

    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: '#fff'
        }
      }
    },
    legend: {
      icon: 'rect',
      itemWidth: 14,
      itemHeight: 5,
      itemGap: 13,
      // data: ['移动', '电信', '联通'],
      right: '4%',
      textStyle: {
        fontSize: 12,
        color: 'rgba(255,255,255,.6)'
      }
    },
    grid: {
      left: '3%',
      right: '6%',
      bottom: '3%',
      top:'25%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      boundaryGap: false,
      axisLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.6)'
        }
      },
      data: ['一月','二月','三月','四月','五月','六月','七月']
    }],
    yAxis: [{
      type: 'value',
      // name: '次',
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.6)'
        }
      },
      axisLabel: {
        margin: 10,
        textStyle: {
          fontSize: 14
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.2)'
        }
      }
    }],
    series: [
      {
        name: '民警履职',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            width: 2
          }
        },
        itemStyle: {
          normal: {
            color: 'rgb(255, 71, 1)',
            borderColor: 'rgba(255, 71, 1,0.2)',
            borderWidth: 20

          }
        },
        data: [120, 110, 125, 145, 122,  134, 150]
      },
    ]
  };
  per_1_2.setOption(option_top3);


  per_2=echarts.init(document.getElementById("middle_1"));
  per_2_1=echarts.init(document.getElementById("mid_2"));
  per_2_2=echarts.init(document.getElementById("mid_3"));
  option_middle= {
    title: {
      text: '',
      textStyle :{
        color : 'rgba(86,86,86,.8)',
        fontSize : 14,
        textAlign : 'center',
      }
    },
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
        itemStyle: {
          normal: {
            color: '#2DC7C9'
          }
        },
        data:[250, 232, 201, 254, 240, 230, 210,250, 232, 201, 254, 190]
      },
    ]
  };
  option_middle2= {
    title: {
      text: '',
      textStyle :{
        color : 'rgba(86,86,86,.8)',
        fontSize : 14,
        textAlign : 'center',
      }
    },
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
        itemStyle: {
          normal: {
            color: '#2DC7C9'
          }
        },
        data:[250, 232, 201, 254, 240, 230, 210,250, 232, 201, 254, 190]
      },
    ]
  };
  option_middle3= {
    title: {
      text: '',
      textStyle :{
        color : 'rgba(86,86,86,.8)',
        fontSize : 14,
        textAlign : 'center',
      }
    },
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
        itemStyle: {
          normal: {
            color: '#2DC7C9'
          }
        },
        data:[250, 232, 201, 254, 240, 230, 210,250, 232, 201, 254, 190]
      },
    ]
  };
  per_2.setOption(option_middle);
  per_2_1.setOption(option_middle2);
  per_2_2.setOption(option_middle3);

  per_3=echarts.init(document.getElementById("bottom_1"));
  per_3_1=echarts.init(document.getElementById("bottom_2"));
  per_3_2=echarts.init(document.getElementById("bottom_3"));
  option_bottom= {
    title: {
      text: '',
      textStyle :{
        color : 'rgba(86,86,86,.8)',
        fontSize : 14,
        textAlign : 'center'
      }
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      // data:['邮件营销']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: '25%',
      containLabel: true
    },
    toolbox: {
      feature: {
        // saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1月','2月','3月','4月','5月','6月'],
      axisLine:{
        lineStyle:{
          color:'rgba(255,255,255,.8)',
        }
      },
    },
    yAxis: {
      type: 'value',
      axisLine:{
        lineStyle:{
          color:'rgba(255,255,255,.8)',
        }
      },
    },
    series: [
      {
        name:'重点犯数量',
        type:'line',
        stack: '总量',
        data:[120, 132, 101, 134, 90, 230, 210],
        itemStyle : {
          normal: {
            color:'#fff'
          }
        },
        lineStyle :{
          normal: {
            type : 'dotted'
          }
        }
      },
    ]
  };
  option_bottom2= {
    title: {
      text: '',
      textStyle :{
        color : 'rgba(86,86,86,.8)',
        fontSize : 14,
        textAlign : 'center'
      }
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      // data:['邮件营销']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: '25%',
      containLabel: true
    },
    toolbox: {
      feature: {
        // saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1月','2月','3月','4月','5月','6月'],
      axisLine:{
        lineStyle:{
          color:'rgba(255,255,255,.8)',
        }
      },
    },
    yAxis: {
      type: 'value',
      axisLine:{
        lineStyle:{
          color:'rgba(255,255,255,.8)',
        }
      },
    },
    series: [
      {
        name:'重点犯数量',
        type:'line',
        stack: '总量',
        data:[120, 132, 101, 134, 90, 230, 210],
        itemStyle : {
          normal: {
            color:'#fff'
          }
        },
        lineStyle :{
          normal: {
            type : 'dotted'
          }
        }
      },
    ]
  };
  option_bottom3= {
    title: {
      text: '',
      textStyle :{
        color : 'rgba(86,86,86,.8)',
        fontSize : 14,
        textAlign : 'center'
      }
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      // data:['邮件营销']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: '25%',
      containLabel: true
    },
    toolbox: {
      feature: {
        // saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1月','2月','3月','4月','5月','6月'],
      axisLine:{
        lineStyle:{
          color:'rgba(255,255,255,.8)',
        }
      },
    },
    yAxis: {
      type: 'value',
      axisLine:{
        lineStyle:{
          color:'rgba(255,255,255,.8)',
        }
      },
    },
    series: [
      {
        name:'重点犯数量',
        type:'line',
        stack: '总量',
        data:[120, 132, 101, 134, 90, 230, 210],
        itemStyle : {
          normal: {
            color:'#fff'
          }
        },
        lineStyle :{
          normal: {
            type : 'dotted'
          }
        }
      },
    ]
  };
  per_3.setOption(option_bottom);
  per_3_1.setOption(option_bottom2);
  per_3_2.setOption(option_bottom3);


  per_4=echarts.init(document.getElementById("title_1"));
  option_title1= {
    backgroundColor:"rgba(31, 56, 76, 0.63)",
    color: ['#3398DB'],
    tooltip : {
      trigger: 'axis',
      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '5%',
      bottom: '5%',
      top: '30%',
      containLabel: true
    },
    xAxis : [
      {
        type : 'category',
        data : ['市\n看', '戒\n毒', '拘\n留', '二\n看', '二\n拘', '玄\n武',
          '秦\n淮','栖\n霞','雨\n花','浦\n口','江\n宁','六\n合','溧\n水','高\n淳'],
        axisLabel: {
          show: false,
          textStyle: {
            fontSize:14,
            color: 'white'
          }
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        }
      }
    ],
    yAxis : [
      {
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        type : 'value',
        // show:false,
        axisLabel: {
          show: false,
          textStyle: {
            fontSize:10,
            color: 'white'
          }
        }
      }
    ],
    series : [
      {
        name: '分数',
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
              offset: 0,
              color: '#E7DA0A'
            },{
              offset: 1,
              color: '#9BEC09'
            }]),
            barBorderRadius: [20, 20, 0, 0]
          }
        },
        type:'bar',
        barWidth: '30%',
        z: 10,
        data:[77, 66, 55, 44, 99, 22, 11, 22, 33, 44, 55, 66, 77 , 88]
      }
    ]
  };
  per_4.setOption(option_title1);


  var dw=function(){
    imgFw=$("#left-df").width();
    imgFh=$("#left-df").height();
    imgW=$(".left-img").width();
    imgH=$(".left-img").height();
    fenW=$(".left-dw").width();
    fenH=$(".left-dw").height();
    $(".left-img").css({"left":imgFw/2-imgW/2+"px"});
    $(".left-img").css({"top":(imgFh/2-imgW/2)+"px"});
    $(".left-dw").css({"left":imgFw/2-fenW/2+"px"});
    $(".left-dw").css({"top":(imgFh/2-fenH/2)+"px"});
  }
  dw();


  dq=echarts.init(document.getElementById("d1"));
  option_dd = {
    tooltip: {
      trigger: 'item',
      formatter: "{d}%"
    },
    series: [

      {
        type:'pie',
        hoverAnimation: false,
        radius: ['50%', '60%'],
        label: {
          normal: {
            show: false,
            position: 'center'
          }

        },
        itemStyle:{
          normal:{
            color:'#01EBFA'
          }
        },
        data:[
          {
            value:2400,
            itemStyle:{
              normal:{
                color:'#01EBFA'
              }
            }

          },
          {
            value:600,itemStyle:{
            normal:{
              color:'#204E72'
            }
          }

          },
        ]
      }
    ]
  };
  dq.setOption(option_dd)

});
