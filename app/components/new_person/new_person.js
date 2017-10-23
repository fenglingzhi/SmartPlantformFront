$(function () {




  $("#per-right1>div.right-tg>div").eq(0).click(function(){
    console.log($(this));
    console.log(1);
    $(".right-tg>div").eq(0).addClass('activd_1');
    $(".right-tg>div").eq(1).removeClass('activd_2');
    $(".right-tg>div").eq(2).removeClass('activd_3');
    $("#right-1").css("display","block");
    $("#right-2").css("display","none");
    $("#right-3").css("display","none");
    right_one.resize();
    right_two.resize();
    right_three.resize();

  });
  $("#per-right1>div.right-tg>div").eq(1).click(function(){
    console.log(2);
    $(".right-tg>div").eq(0).removeClass('activd_1');
    $(".right-tg>div").eq(1).addClass('activd_2');
    $(".right-tg>div").eq(2).removeClass('activd_3');
    $("#right-1").css("display","none");
    $("#right-2").css("display","block");
    $("#right-3").css("display","none");
    right_one.resize();
    right_two.resize();
    right_three.resize();
  });
  $("#per-right1>div.right-tg>div").eq(2).click(function(){
    console.log(3);
    $(".right-tg>div").eq(0).removeClass('activd_1');
    $(".right-tg>div").eq(1).removeClass('activd_2');
    $(".right-tg>div").eq(2).addClass('activd_3');
    $("#right-1").css("display","none");
    $("#right-2").css("display","none");
    $("#right-3").css("display","block");
    right_one.resize();
    right_two.resize();
    right_three.resize();
  });

  //$("#per-right2>div.right-tg>div").eq(0).click(function(){
  //  console.log($(this));
  //  console.log(1);
  //  $("#per-right2>div.right-tg>div").eq(0).addClass('activd_1');
  //  $("#per-right2>div.right-tg>div").eq(1).removeClass('activd_2');
  //  $("#per-right2>div.right-tg>div").eq(2).removeClass('activd_3');
  //  $("#right-11").css("display","block");
  //  $("#right-22").css("display","none");
  //  $("#right-33").css("display","none");
  //  right_one1.resize();
  //  right_two1.resize();
  //  right_three1.resize();
  //
  //});
  //$("#per-right2>div.right-tg>div").eq(1).click(function(){
  //  console.log(2);
  //  $("#per-right2>div.right-tg>div").eq(0).removeClass('activd_1');
  //  $("#per-right2>div.right-tg>div").eq(1).addClass('activd_2');
  //  $("#per-right2>div.right-tg>div").eq(2).removeClass('activd_3');
  //  $("#right-11").css("display","none");
  //  $("#right-22").css("display","block");
  //  $("#right-33").css("display","none");
  //  right_one1.resize();
  //  right_two1.resize();
  //  right_three1.resize();
  //});
  //$("#per-right2>div.right-tg>div").eq(2).click(function(){
  //  console.log(3);
  //  $("#per-right2>div.right-tg>div").eq(0).removeClass('activd_1');
  //  $("#per-right2>div.right-tg>div").eq(1).removeClass('activd_2');
  //  $("#per-right2>div.right-tg>div").eq(2).addClass('activd_3');
  //  $("#right-11").css("display","none");
  //  $("#right-22").css("display","none");
  //  $("#right-33").css("display","block");
  //  right_one1.resize();
  //  right_two1.resize();
  //  right_three1.resize();
  //})
  //
  //$("#per-right3>div.right-tg>div").eq(0).click(function(){
  //  console.log($(this));
  //  console.log(1);
  //  $("#per-right3>div.right-tg>div").eq(0).addClass('activd_1');
  //  $("#per-right3>div.right-tg>div").eq(1).removeClass('activd_2');
  //  $("#per-right3>div.right-tg>div").eq(2).removeClass('activd_3');
  //  $("#right-111").css("display","block");
  //  $("#right-222").css("display","none");
  //  $("#right-333").css("display","none");
  //  right_one11.resize();
  //  right_two11.resize();
  //  right_three11.resize();
  //
  //});
  //$("#per-right3>div.right-tg>div").eq(1).click(function(){
  //  console.log(2);
  //  $("#per-right3>div.right-tg>div").eq(0).removeClass('activd_1');
  //  $("#per-right3>div.right-tg>div").eq(1).addClass('activd_2');
  //  $("#per-right3>div.right-tg>div").eq(2).removeClass('activd_3');
  //  $("#right-111").css("display","none");
  //  $("#right-222").css("display","block");
  //  $("#right-333").css("display","none");
  //  right_one11.resize();
  //  right_two11.resize();
  //  right_three11.resize();
  //});
  //$("#per-right3>div.right-tg>div").eq(2).click(function(){
  //  console.log(3);
  //  $("#per-right3>div.right-tg>div").eq(0).removeClass('activd_1');
  //  $("#per-right3>div.right-tg>div").eq(1).removeClass('activd_2');
  //  $("#per-right3>div.right-tg>div").eq(2).addClass('activd_3');
  //  $("#right-111").css("display","none");
  //  $("#right-222").css("display","none");
  //  $("#right-333").css("display","block");
  //  right_one11.resize();
  //  right_two11.resize();
  //  right_three11.resize();
  //})


  $(".per-mid>div").click(function(){
    console.log(1)
    $(this).addClass("addhover");
    $(this).siblings().removeClass("addhover");
    ids=$(this).index();
    console.log(ids);
    if(ids==0){
      //$("#per-right1").css("display","block");
      //$("#per-right2").css("display","none");
      //$("#per-right3").css("display","none");
      right_one.setOption({
        series:[{data:[120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90]},]
      });
      right_two.resize();
      right_three.resize();

    }else if(ids==1){
      //$("#per-right2").css("display","block");
      //$("#per-right1").css("display","none");
      //$("#per-right3").css("display","none")
      right_one.setOption({
        series: [{data:[10, 32, 51, 14, 190, 50, 80,220, 232, 201, 34, 60]},]
      });
      right_two.setOption({
        series: [{data:[50, 132, 151, 76, 290, 150, 140,420, 132, 161, 234, 160]},]
      });
      right_three.setOption({
        series: [{data:[110, 312, 99, 224, 160, 250, 180,120, 42, 21, 134, 160]},]
      })

    }else if(ids==2){
      //$("#per-right3").css("display","block");
      //$("#per-right1").css("display","none");
      //$("#per-right2").css("display","none")
      right_one.setOption({
        series: [{data:[20, 132, 151, 224, 90, 150, 280,50, 62, 21, 34, 160]},]
      });
      right_two.setOption({
        series: [{data:[150, 132, 151, 176, 290, 150, 140,420, 42, 161, 234, 160]},]
      });
      right_three.setOption({
        series: [{data:[50, 112, 99, 124, 260, 110, 140,160, 242,121, 134, 160]},]
      })

    }



    dw();
    left_bomm.resize();
    mid_one.resize();
    mid_two.resize();
    mid_three.resize();
    mid_four.resize();
    mid_five.resize();
    right_one.resize();
    right_two.resize();
    right_three.resize();
    dq.resize();
    //right_one1.resize();
    //right_two1.resize();
    //right_three1.resize();
    //right_one11.resize();
    //right_two11.resize();
    //right_three11.resize();
  })

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

    rWid=$(".per-right").width();
    pWid=$(".p-dw").width();
    tWid=$(".right-tg").width();
    $(".p-dw").css({"left":(rWid-pWid)/2+"px"});
    $(".right-tg").css({"left":(rWid-tWid)/2+"px"});
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
            color:'#4AC420'
          }
        },
        data:[
          {
            value:2400,
            itemStyle:{
              normal:{
                color:'#4AC420'
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

  left_bomm=echarts.init(document.getElementById("left-bom"));
  option_sec = {
    radar: {
      radius: '70%',
      splitNumber: 8,
      axisLine: {
        lineStyle: {
          color: '#fff',
          opacity: .2
        }
      },
      splitLine: {
        lineStyle: {
          color: '#fff',
          opacity: .2
        }
      },
      splitArea: {
        areaStyle: {
          color: 'rgba(127,95,132,.3)',
          opacity: 1,
          shadowBlur: 45,
          shadowColor: 'rgba(0,0,0,.5)',
          shadowOffsetX: 0,
          shadowOffsetY: 15,
        }
      },
      indicator: [
        { text: '基础风险' },
        { text: '在押人员' },
        { text: '警辅外来' },
        { text: '技术安防' },
        { text: '民警执法' }
      ],
    },
    series: [{
      type: 'radar',
      symbolSize: 0,
      areaStyle: {
        normal: {
          shadowBlur: 13,
          shadowColor: 'rgba(0,0,0,.2)',
          shadowOffsetX: 0,
          shadowOffsetY: 10,
          opacity: 1
        }
      },
      data: [{
        value: [50, 21, 12, 11, 0,10],
        itemStyle:{
          normal:{
            color:'#BE5EDB'
          }
        }
      }]
    }]
  };
  left_bomm.setOption(option_sec);

  mid_one=echarts.init(document.getElementById("mid-1"));
  option_one = {
    title: {
      text: '44%',
      x: 'center',
      y: 'center',
      textStyle: {
        fontWeight: 'normal',
        color: "#0bb6f0",
        fontSize: 25
      }
    },
    color: ['#45EB23'],
    tooltip: {
      show: false,
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      show: false,
      itemGap: 12,
      data: ['01', '02']
    },
    toolbox: {
      show: false,
      feature: {
        mark: {
          show: true
        },
        dataView: {
          show: true,
          readOnly: false
        },
        restore: {
          show: true
        },
        saveAsImage: {
          show: true
        }
      }
    },
    series: [{
      name: 'Line 1',
      type: 'pie',
      clockWise: false,
      radius: [35, 38],
      itemStyle: {
        normal: {
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          shadowBlur: 40,
          shadowColor: 'rgba(40, 40, 40, 0.5)'
        }
      },
      hoverAnimation: false,
      data: [{
        value: 56,
        itemStyle: {
          normal: {
            color: '#214F73',//未完成的圆环的颜色
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          },
          emphasis: {
            color: 'rgba(44,59,70,1)'//未完成的圆环的颜色
          }
        }
      }, {
        value: 44
      }

      ]
    },


    ]
  };
  mid_one.setOption(option_one);

  mid_two=echarts.init(document.getElementById("mid-2"));
  option_two = {
    title: {
      text: '24%',
      x: 'center',
      y: 'center',
      textStyle: {
        fontWeight: 'normal',
        color: "#0bb6f0",
        fontSize: 25
      }
    },
    color: ['#E2EE23', '#313443', '#fff'],
    tooltip: {
      show: false,
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      show: false,
      itemGap: 12,
      data: ['01', '02']
    },
    toolbox: {
      show: false,
      feature: {
        mark: {
          show: true
        },
        dataView: {
          show: true,
          readOnly: false
        },
        restore: {
          show: true
        },
        saveAsImage: {
          show: true
        }
      }
    },
    series: [{
      name: 'Line 1',
      type: 'pie',
      clockWise: false,
      radius: [35, 38],
      itemStyle: {
        normal: {
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          shadowBlur: 40,
          shadowColor: 'rgba(40, 40, 40, 0.5)'
        }
      },
      hoverAnimation: false,
      data: [{
        value: 76,
        itemStyle: {
          normal: {
            color: '#214F73',//未完成的圆环的颜色
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          },
          emphasis: {
            color: 'rgba(44,59,70,1)'//未完成的圆环的颜色
          }
        }
      }, {
        value: 24
      }

      ]
    },


    ]
  };
  mid_two.setOption(option_two);

  mid_three=echarts.init(document.getElementById("mid-3"));
  option_three = {
    title: {
      text: '44%',
      x: 'center',
      y: 'center',
      textStyle: {
        fontWeight: 'normal',
        color: "#0bb6f0",
        fontSize: 25
      }
    },
    color: ['#EDA826', '#313443', '#fff'],
    tooltip: {
      show: false,
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      show: false,
      itemGap: 12,
      data: ['01', '02']
    },
    toolbox: {
      show: false,
      feature: {
        mark: {
          show: true
        },
        dataView: {
          show: true,
          readOnly: false
        },
        restore: {
          show: true
        },
        saveAsImage: {
          show: true
        }
      }
    },
    series: [{
      name: 'Line 1',
      type: 'pie',
      clockWise: false,
      radius: [35, 38],
      itemStyle: {
        normal: {
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          shadowBlur: 40,
          shadowColor: 'rgba(40, 40, 40, 0.5)'
        }
      },
      hoverAnimation: false,
      data: [{
        value: 66,
        itemStyle: {
          normal: {
            color: '#214F73',//未完成的圆环的颜色
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          },
          emphasis: {
            color: 'rgba(44,59,70,1)'//未完成的圆环的颜色
          }
        }
      }, {
        value: 34
      }

      ]
    },


    ]
  };
  mid_three.setOption(option_three);

  mid_four=echarts.init(document.getElementById("mid-4"));
  option_four = {
    title: {
      text: '64%',
      x: 'center',
      y: 'center',
      textStyle: {
        fontWeight: 'normal',
        color: "#0bb6f0",
        fontSize: 25
      }
    },
    color: ['#ED2525', '#313443', '#fff'],
    tooltip: {
      show: false,
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      show: false,
      itemGap: 12,
      data: ['01', '02']
    },
    toolbox: {
      show: false,
      feature: {
        mark: {
          show: true
        },
        dataView: {
          show: true,
          readOnly: false
        },
        restore: {
          show: true
        },
        saveAsImage: {
          show: true
        }
      }
    },
    series: [{
      name: 'Line 1',
      type: 'pie',
      clockWise: false,
      radius: [35, 38],
      itemStyle: {
        normal: {
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          shadowBlur: 40,
          shadowColor: 'rgba(40, 40, 40, 0.5)'
        }
      },
      hoverAnimation: false,
      data: [{
        value: 36,
        itemStyle: {
          normal: {
            color: '#214F73',//未完成的圆环的颜色
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          },
          emphasis: {
            color: 'rgba(44,59,70,1)'//未完成的圆环的颜色
          }
        }
      }, {
        value: 64,
      }

      ]
    },


    ]
  };
  mid_four.setOption(option_four);

  mid_five=echarts.init(document.getElementById("mid-5"));
  option_five = {
    title: {
      text: '54%',
      x: 'center',
      y: 'center',
      textStyle: {
        fontWeight: 'normal',
        color: "#0bb6f0",
        fontSize: 25
      }
    },
    color: ['#A126E5', '#313443', '#fff'],
    tooltip: {
      show: false,
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      show: false,
      itemGap: 12,
      data: ['01', '02']
    },
    toolbox: {
      show: false,
      feature: {
        mark: {
          show: true
        },
        dataView: {
          show: true,
          readOnly: false
        },
        restore: {
          show: true
        },
        saveAsImage: {
          show: true
        }
      }
    },
    series: [{
      name: 'Line 1',
      type: 'pie',
      clockWise: false,
      radius: [35, 38],
      itemStyle: {
        normal: {
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          shadowBlur: 40,
          shadowColor: 'rgba(40, 40, 40, 0.5)'
        }
      },
      hoverAnimation: false,
      data: [{
        value: 46,
        itemStyle: {
          normal: {
            color: '#214F73',//未完成的圆环的颜色
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          },
          emphasis: {
            color: 'rgba(44,59,70,1)'//未完成的圆环的颜色
          }
        }
      }, {
        value: 54
      }

      ]
    },


    ]
  };
  mid_five.setOption(option_five);

  right_one=echarts.init(document.getElementById("right-1"));
  option_rt_one= {
    title: {
      text: '风险走势',
      textStyle :{
        color : 'rgba(255,255,255,0.8)',
        fontSize : 14,
        textAlign : 'center'
      },
      top:'10%',
      left:'5%'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      // data:['邮件营销']
    },
    grid: {
      left: '6%',
      right: '10%',
      bottom: '25%',
      top: '30%',
      containLabel: true
    },
    toolbox: {
      feature: {
        // saveAsImage: {}
      }
    },
    xAxis: {
      axisTick: {
        show: false
      },
      boundaryGap: false,
      data: ['1','2','3','4','5','6','7','8','9','10','11','12'],
      axisLine:{
        lineStyle:{
          color:'rgba(255,255,255,.8)'
        }
      }
    },
    yAxis: {
      type: 'value',
      axisLabel : {
        show:false
      },
      axisLine:{
        show:false,
        lineStyle:{
          color:'rgba(255,255,255,.8)'
        }
      }
    },
    series: [
      {
        name:'重点犯数量',
        type:'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        stack: '总量',
        data:[120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90],
        itemStyle : {
          normal: {
            color:'#fff'
          }
        },
        lineStyle :{
          normal: {
            color:'#E5AA1F',
            type : 'solid',
            width:6
          }
        }
      },
    ]
  }
  right_one.setOption(option_rt_one);

  right_two=echarts.init(document.getElementById("right-2"));
  option_rt_two= {
    title: {
      text: '风险走势',
      textStyle :{
        color : 'rgba(255,255,255,0.8)',
        fontSize : 14,
        textAlign : 'center'
      },
      top:'10%',
      left:'5%'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      // data:['邮件营销']
    },
    grid: {
      left: '6%',
      right: '10%',
      bottom: '25%',
      top: '30%',
      containLabel: true
    },
    toolbox: {
      feature: {
        // saveAsImage: {}
      }
    },
    xAxis: {
      axisTick: {
        show: false
      },
      boundaryGap: false,
      data: ['1','2','3','4','5','6','7','8','9','10','11','12'],
      axisLine:{
        lineStyle:{
          color:'rgba(255,255,255,.8)'
        }
      }
    },
    yAxis: {
      type: 'value',
      axisLabel : {
        show:false
      },
      axisLine:{
        show:false,
        lineStyle:{
          color:'rgba(255,255,255,.8)'
        }
      }
    },
    series: [
      {
        name:'重点犯数量',
        type:'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        stack: '总量',
        data:[120, 162, 51, 124, 150, 130, 210, 120, 132, 211, 134, 190],
        itemStyle : {
          normal: {
            color:'#fff'
          }
        },
        lineStyle :{
          normal: {
            color:'skyblue',
            type : 'solid',
            width:6
          }
        }
      },
    ]
  }
  right_two.setOption(option_rt_two);

  right_three=echarts.init(document.getElementById("right-3"));
  option_rt_three= {
    title: {
      text: '风险走势',
      textStyle :{
        color : 'rgba(255,255,255,0.8)',
        fontSize : 14,
        textAlign : 'center'
      },
      top:'10%',
      left:'5%'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      // data:['邮件营销']
    },
    grid: {
      left: '6%',
      right: '10%',
      bottom: '25%',
      top: '30%',
      containLabel: true
    },
    toolbox: {
      feature: {
        // saveAsImage: {}
      }
    },
    xAxis: {
      axisTick: {
        show: false
      },
      boundaryGap: false,
      data: ['1','2','3','4','5','6','7','8','9','10','11','12'],
      axisLine:{
        lineStyle:{
          color:'rgba(255,255,255,.8)'
        }
      }
    },
    yAxis: {
      type: 'value',
      axisLabel : {
        show:false
      },
      axisLine:{
        show:false,
        lineStyle:{
          color:'rgba(255,255,255,.8)'
        }
      }
    },
    series: [
      {
        name:'重点犯数量',
        type:'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        stack: '总量',
        data:[220, 192, 161, 54, 240, 170, 210,180, 200, 61, 164, 90],
        itemStyle : {
          normal: {
            color:'#fff'
          }
        },
        lineStyle :{
          normal: {
            color:'green',
            type : 'solid',
            width:6
          }
        }
      },
    ]
  }
  right_three.setOption(option_rt_three);

  //right_one1=echarts.init(document.getElementById("right-11"));
  //option_one1 = {
  //  title: {
  //    text: '风险走势',
  //    textStyle :{
  //      color : 'rgba(255,255,255,0.8)',
  //      fontSize : 14,
  //      textAlign : 'center'
  //    },
  //    top:'10%',
  //    left:'5%'
  //  },
  //  tooltip: {
  //    trigger: 'axis'
  //  },
  //  legend: {
  //    // data:['邮件营销']
  //  },
  //  grid: {
  //    left: '6%',
  //    right: '10%',
  //    bottom: '25%',
  //    top: '30%',
  //    containLabel: true
  //  },
  //  toolbox: {
  //    feature: {
  //      // saveAsImage: {}
  //    }
  //  },
  //  xAxis: {
  //    axisTick: {
  //      show: false
  //    },
  //    boundaryGap: false,
  //    data: ['1','2','3','4','5','6','7','8','9','10','11','12'],
  //    axisLine:{
  //      lineStyle:{
  //        color:'rgba(255,255,255,.8)'
  //      }
  //    }
  //  },
  //  yAxis: {
  //    type: 'value',
  //    axisLabel : {
  //      show:false
  //    },
  //    axisLine:{
  //      show:false,
  //      lineStyle:{
  //        color:'rgba(255,255,255,.8)'
  //      }
  //    }
  //  },
  //  series: [
  //    {
  //      name:'重点犯数量',
  //      type:'line',
  //      smooth: true,
  //      symbol: 'circle',
  //      symbolSize: 8,
  //      stack: '总量',
  //      data:[101, 134, 90, 230, 30, 70, 210,180, 200, 61, 164, 90],
  //      itemStyle : {
  //        normal: {
  //          color:'#fff'
  //        }
  //      },
  //      lineStyle :{
  //        normal: {
  //          color:'blue',
  //          type : 'solid',
  //          width:6
  //        }
  //      }
  //    },
  //  ]
  //}
  //right_one1.setOption(option_one1);
  //
  //right_two1=echarts.init(document.getElementById("right-22"));
  //option_two1 = {
  //  title: {
  //    text: '风险走势',
  //    textStyle :{
  //      color : 'rgba(255,255,255,0.8)',
  //      fontSize : 14,
  //      textAlign : 'center'
  //    },
  //    top:'10%',
  //    left:'5%'
  //  },
  //  tooltip: {
  //    trigger: 'axis'
  //  },
  //  legend: {
  //    // data:['邮件营销']
  //  },
  //  grid: {
  //    left: '6%',
  //    right: '10%',
  //    bottom: '25%',
  //    top: '30%',
  //    containLabel: true
  //  },
  //  toolbox: {
  //    feature: {
  //      // saveAsImage: {}
  //    }
  //  },
  //  xAxis: {
  //    axisTick: {
  //      show: false
  //    },
  //    boundaryGap: false,
  //    data: ['1','2','3','4','5','6','7','8','9','10','11','12'],
  //    axisLine:{
  //      lineStyle:{
  //        color:'rgba(255,255,255,.8)'
  //      }
  //    }
  //  },
  //  yAxis: {
  //    type: 'value',
  //    axisLabel : {
  //      show:false
  //    },
  //    axisLine:{
  //      show:false,
  //      lineStyle:{
  //        color:'rgba(255,255,255,.8)'
  //      }
  //    }
  //  },
  //  series: [
  //    {
  //      name:'重点犯数量',
  //      type:'line',
  //      smooth: true,
  //      symbol: 'circle',
  //      symbolSize: 8,
  //      stack: '总量',
  //      data:[120, 132, 101, 134, 90, 230, 30, 70, 110, 220, 182, 111,],
  //      itemStyle : {
  //        normal: {
  //          color:'#fff'
  //        }
  //      },
  //      lineStyle :{
  //        normal: {
  //          color:'red',
  //          type : 'solid',
  //          width:6
  //        }
  //      }
  //    },
  //  ]
  //}
  //right_two1.setOption(option_two1);
  //
  //right_three1=echarts.init(document.getElementById("right-33"));
  //option_three1 ={
  //  title: {
  //    text: '风险走势',
  //    textStyle :{
  //      color : 'rgba(255,255,255,0.8)',
  //      fontSize : 14,
  //      textAlign : 'center'
  //    },
  //    top:'10%',
  //    left:'5%'
  //  },
  //  tooltip: {
  //    trigger: 'axis'
  //  },
  //  legend: {
  //    // data:['邮件营销']
  //  },
  //  grid: {
  //    left: '6%',
  //    right: '10%',
  //    bottom: '25%',
  //    top: '30%',
  //    containLabel: true
  //  },
  //  toolbox: {
  //    feature: {
  //      // saveAsImage: {}
  //    }
  //  },
  //  xAxis: {
  //    axisTick: {
  //      show: false
  //    },
  //    boundaryGap: false,
  //    data: ['1','2','3','4','5','6','7','8','9','10','11','12'],
  //    axisLine:{
  //      lineStyle:{
  //        color:'rgba(255,255,255,.8)'
  //      }
  //    }
  //  },
  //  yAxis: {
  //    type: 'value',
  //    axisLabel : {
  //      show:false
  //    },
  //    axisLine:{
  //      show:false,
  //      lineStyle:{
  //        color:'rgba(255,255,255,.8)'
  //      }
  //    }
  //  },
  //  series: [
  //    {
  //      name:'重点犯数量',
  //      type:'line',
  //      smooth: true,
  //      symbol: 'circle',
  //      symbolSize: 8,
  //      stack: '总量',
  //      data:[150, 62, 91, 224, 30, 70, 110, 220, 182, 111, 234, 120],
  //      itemStyle : {
  //        normal: {
  //          color:'#fff'
  //        }
  //      },
  //      lineStyle :{
  //        normal: {
  //          color:'yellow',
  //          type : 'solid',
  //          width:6
  //        }
  //      }
  //    },
  //  ]
  //}
  //right_three1.setOption(option_three1);
  //
  //
  //right_one11=echarts.init(document.getElementById("right-111"));
  //option_one11 = {
  //  title: {
  //    text: '风险走势',
  //    textStyle :{
  //      color : 'rgba(255,255,255,0.8)',
  //      fontSize : 14,
  //      textAlign : 'center'
  //    },
  //    top:'10%',
  //    left:'5%'
  //  },
  //  tooltip: {
  //    trigger: 'axis'
  //  },
  //  legend: {
  //    // data:['邮件营销']
  //  },
  //  grid: {
  //    left: '6%',
  //    right: '10%',
  //    bottom: '25%',
  //    top: '30%',
  //    containLabel: true
  //  },
  //  toolbox: {
  //    feature: {
  //      // saveAsImage: {}
  //    }
  //  },
  //  xAxis: {
  //    axisTick: {
  //      show: false
  //    },
  //    boundaryGap: false,
  //    data: ['1','2','3','4','5','6','7','8','9','10','11','12'],
  //    axisLine:{
  //      lineStyle:{
  //        color:'rgba(255,255,255,.8)'
  //      }
  //    }
  //  },
  //  yAxis: {
  //    type: 'value',
  //    axisLabel : {
  //      show:false
  //    },
  //    axisLine:{
  //      show:false,
  //      lineStyle:{
  //        color:'rgba(255,255,255,.8)'
  //      }
  //    }
  //  },
  //  series: [
  //    {
  //      name:'重点犯数量',
  //      type:'line',
  //      smooth: true,
  //      symbol: 'circle',
  //      symbolSize: 8,
  //      stack: '总量',
  //      data:[101, 134, 90, 230, 30, 70, 210,180, 200, 61, 164, 90],
  //      itemStyle : {
  //        normal: {
  //          color:'#fff'
  //        }
  //      },
  //      lineStyle :{
  //        normal: {
  //          color:'blue',
  //          type : 'solid',
  //          width:6
  //        }
  //      }
  //    },
  //  ]
  //}
  //right_one11.setOption(option_one11);
  //
  //right_two11=echarts.init(document.getElementById("right-222"));
  //option_two11 = {
  //  title: {
  //    text: '风险走势',
  //    textStyle :{
  //      color : 'rgba(255,255,255,0.8)',
  //      fontSize : 14,
  //      textAlign : 'center'
  //    },
  //    top:'10%',
  //    left:'5%'
  //  },
  //  tooltip: {
  //    trigger: 'axis'
  //  },
  //  legend: {
  //    // data:['邮件营销']
  //  },
  //  grid: {
  //    left: '6%',
  //    right: '10%',
  //    bottom: '25%',
  //    top: '30%',
  //    containLabel: true
  //  },
  //  toolbox: {
  //    feature: {
  //      // saveAsImage: {}
  //    }
  //  },
  //  xAxis: {
  //    axisTick: {
  //      show: false
  //    },
  //    boundaryGap: false,
  //    data: ['1','2','3','4','5','6','7','8','9','10','11','12'],
  //    axisLine:{
  //      lineStyle:{
  //        color:'rgba(255,255,255,.8)'
  //      }
  //    }
  //  },
  //  yAxis: {
  //    type: 'value',
  //    axisLabel : {
  //      show:false
  //    },
  //    axisLine:{
  //      show:false,
  //      lineStyle:{
  //        color:'rgba(255,255,255,.8)'
  //      }
  //    }
  //  },
  //  series: [
  //    {
  //      name:'重点犯数量',
  //      type:'line',
  //      smooth: true,
  //      symbol: 'circle',
  //      symbolSize: 8,
  //      stack: '总量',
  //      data:[120, 132, 101, 134, 90, 230, 30, 70, 110, 220, 182, 111,],
  //      itemStyle : {
  //        normal: {
  //          color:'#fff'
  //        }
  //      },
  //      lineStyle :{
  //        normal: {
  //          color:'red',
  //          type : 'solid',
  //          width:6
  //        }
  //      }
  //    },
  //  ]
  //}
  //right_two11.setOption(option_two11);
  //
  //right_three11=echarts.init(document.getElementById("right-333"));
  //option_three11 ={
  //  title: {
  //    text: '风险走势',
  //    textStyle :{
  //      color : 'rgba(255,255,255,0.8)',
  //      fontSize : 14,
  //      textAlign : 'center'
  //    },
  //    top:'10%',
  //    left:'5%'
  //  },
  //  tooltip: {
  //    trigger: 'axis'
  //  },
  //  legend: {
  //    // data:['邮件营销']
  //  },
  //  grid: {
  //    left: '6%',
  //    right: '10%',
  //    bottom: '25%',
  //    top: '30%',
  //    containLabel: true
  //  },
  //  toolbox: {
  //    feature: {
  //      // saveAsImage: {}
  //    }
  //  },
  //  xAxis: {
  //    axisTick: {
  //      show: false
  //    },
  //    boundaryGap: false,
  //    data: ['1','2','3','4','5','6','7','8','9','10','11','12'],
  //    axisLine:{
  //      lineStyle:{
  //        color:'rgba(255,255,255,.8)'
  //      }
  //    }
  //  },
  //  yAxis: {
  //    type: 'value',
  //    axisLabel : {
  //      show:false
  //    },
  //    axisLine:{
  //      show:false,
  //      lineStyle:{
  //        color:'rgba(255,255,255,.8)'
  //      }
  //    }
  //  },
  //  series: [
  //    {
  //      name:'重点犯数量',
  //      type:'line',
  //      smooth: true,
  //      symbol: 'circle',
  //      symbolSize: 8,
  //      stack: '总量',
  //      data:[150, 62, 91, 224, 30, 70, 110, 220, 182, 111, 234, 120],
  //      itemStyle : {
  //        normal: {
  //          color:'#fff'
  //        }
  //      },
  //      lineStyle :{
  //        normal: {
  //          color:'yellow',
  //          type : 'solid',
  //          width:6
  //        }
  //      }
  //    },
  //  ]
  //}
  //right_three11.setOption(option_three11);




  window.onresize = function(){
    dw();
    left_bomm.resize();
    mid_one.resize();
    mid_two.resize();
    mid_three.resize();
    mid_four.resize();
    mid_five.resize();
    right_one.resize();
    right_two.resize();
    right_three.resize();
    dq.resize();
    //right_one1.resize();
    //right_two1.resize();
    //right_three1.resize();
    //right_one11.resize();
    //right_two11.resize();
    //right_three11.resize();
  }

})
