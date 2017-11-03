$(function () {
  /*左上角echart和图定位和右上年月定位*/
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

  $(".addshow").click(function(){
    ind=$(this).index();
    $(this).addClass("addhover").siblings().removeClass("addhover");
  })



  /*左上环形图*/
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
  /*左下雷达图*/
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
        { text: '正常收押' },
        { text: '三类案\n件收押' },
        { text: '风险收押' },
        { text: '重要罪\n犯在押人员' },
        { text: '风险人员' }
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
  /*中间环形图5个小的*/
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
  /*中间环形图5个小的*/
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
  /*中间环形图5个小的*/
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
  /*中间环形图5个小的*/
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
  /*中间环形图5个小的*/
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
  /*右上折线图*/
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

  window.onresize = function(){
    dw();
    left_bomm.resize();
    mid_one.resize();
    mid_two.resize();
    mid_three.resize();
    mid_four.resize();
    mid_five.resize();
    right_one.resize();
    dq.resize();
  }

})
