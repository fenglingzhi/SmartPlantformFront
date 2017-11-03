$(function () {

/*岗位的的点击事件*/
  $(".top-six>div").click(function(){
    inx=$(this).index();
      $(this).addClass("activd-top").siblings().removeClass("activd-top");
      $(".bottom-left>div").eq(inx).css("display","block").siblings().css("display","none");

    if(inx==0){
      $("#table").css("display","none");
      $("#tables").css("display","table");
    }else if(inx==2){
      $("#table").css("display","table");
      $("#tables").css("display","none");
    }
  })


  /*上面6个岗位的echart*/
ts_1=echarts.init(document.getElementById("ts-1"));
option_ts1={
  title: {
    text: '75%',
    x: 'center',
    y: '36%',
    textStyle: {
      fontWeight: 'normal',
      color: "white",
      fontSize: 24
    }
  },
  color: ['#eb644b', '#313443', '#fff'],
  series: [{
    name: 'Line 1',
    type: 'pie',
    center:['50%','45%'],
    // clockWise: false,
    radius: [40, 55],
    itemStyle: {
      normal: {
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        shadowBlur: 20,
        shadowColor: 'rgba(40, 40, 40, 0.5)',
      }
    },
    hoverAnimation: false,
    data: [{
      value: 75,
    }, {
      value: 25,
      itemStyle: {
        normal: {
          color: 'rgba(44,59,70,0.8)',//未完成的圆环的颜色
          label: {
            show: false
          },
          labelLine: {
            show: false
          }
        }
      }
    }
    ]
  }, {
    name: 'Line 2',
    type: 'pie',
    center:['50%','45%'],
    animation: false,
    clockWise: false,
    radius: [60, 63],
    itemStyle: {
      normal: {
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
      }
    },
    hoverAnimation: false,
    tooltip: {
      show: false
    },
    data: [{
      value: 100,
      itemStyle: {
        normal:{
          color: 'rgba(44,59,70,0.8)'
        },
        emphasis: {
          color: '#313443'
        }
      }
    }, {
      value: 0,
      name: 'invisible',
    }

    ]
  },


  ]
};
ts_1.setOption(option_ts1);
  /*上面6个岗位的echart*/
ts_2=echarts.init(document.getElementById("ts-2"));
option_ts2={
  title: {
    text: '75%',
    x: 'center',
    y: '36%',
    textStyle: {
      fontWeight: 'normal',
      color: "white",
      fontSize: 24
    }
  },
  color: ['#4762CD', '#313443', '#fff'],
  series: [{
    name: 'Line 1',
    type: 'pie',
    center:['50%','45%'],
    // clockWise: false,
    radius: [40, 55],
    itemStyle: {
      normal: {
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        shadowBlur: 20,
        shadowColor: 'rgba(40, 40, 40, 0.5)',
      }
    },
    hoverAnimation: false,
    data: [{
      value: 75,
    }, {
      value: 25,
      itemStyle: {
        normal: {
          color: 'rgba(44,59,70,0.8)',//未完成的圆环的颜色
          label: {
            show: false
          },
          labelLine: {
            show: false
          }
        }
      }
    }
    ]
  }, {
    name: 'Line 2',
    type: 'pie',
    center:['50%','45%'],
    animation: false,
    clockWise: false,
    radius: [60, 63],
    itemStyle: {
      normal: {
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
      }
    },
    hoverAnimation: false,
    tooltip: {
      show: false
    },
    data: [{
      value: 100,
      itemStyle: {
        normal:{
          color: 'rgba(44,59,70,0.8)'
        },
        emphasis: {
          color: '#313443'
        }
      }
    }, {
      value: 0,
      name: 'invisible',
    }

    ]
  },


  ]
};
ts_2.setOption(option_ts2);
  /*上面6个岗位的echart*/
ts_3=echarts.init(document.getElementById("ts-3"));
option_ts3={
  title: {
    text: '75%',
    x: 'center',
    y: '36%',
    textStyle: {
      fontWeight: 'normal',
      color: "white",
      fontSize: 24
    }
  },
  color: ['#4CC56D', '#313443', '#fff'],
  series: [{
    name: 'Line 1',
    type: 'pie',
    center:['50%','45%'],
    // clockWise: false,
    radius: [40, 55],
    itemStyle: {
      normal: {
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        shadowBlur: 20,
        shadowColor: 'rgba(40, 40, 40, 0.5)',
      }
    },
    hoverAnimation: false,
    data: [{
      value: 75,
    }, {
      value: 25,
      itemStyle: {
        normal: {
          color: 'rgba(44,59,70,0.8)',//未完成的圆环的颜色
          label: {
            show: false
          },
          labelLine: {
            show: false
          }
        }
      }
    }
    ]
  }, {
    name: 'Line 2',
    type: 'pie',
    center:['50%','45%'],
    animation: false,
    clockWise: false,
    radius: [60, 63],
    itemStyle: {
      normal: {
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
      }
    },
    hoverAnimation: false,
    tooltip: {
      show: false
    },
    data: [{
      value: 100,
      itemStyle: {
        normal:{
          color: 'rgba(44,59,70,0.8)'
        },
        emphasis: {
          color: '#313443'
        }
      }
    }, {
      value: 0,
      name: 'invisible',
    }

    ]
  },


  ]
};
ts_3.setOption(option_ts3);
  /*上面6个岗位的echart*/
ts_4=echarts.init(document.getElementById("ts-4"));
option_ts4={
  title: {
    text: '75%',
    x: 'center',
    y: '36%',
    textStyle: {
      fontWeight: 'normal',
      color: "white",
      fontSize: 24
    }
  },
  color: ['#9748DF', '#313443', '#fff'],
  series: [{
    name: 'Line 1',
    type: 'pie',
    center:['50%','45%'],
    // clockWise: false,
    radius: [40, 55],
    itemStyle: {
      normal: {
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        shadowBlur: 20,
        shadowColor: 'rgba(40, 40, 40, 0.5)',
      }
    },
    hoverAnimation: false,
    data: [{
      value: 75,
    }, {
      value: 25,
      itemStyle: {
        normal: {
          color: 'rgba(44,59,70,0.8)',//未完成的圆环的颜色
          label: {
            show: false
          },
          labelLine: {
            show: false
          }
        }
      }
    }
    ]
  }, {
    name: 'Line 2',
    type: 'pie',
    center:['50%','45%'],
    animation: false,
    clockWise: false,
    radius: [60, 63],
    itemStyle: {
      normal: {
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
      }
    },
    hoverAnimation: false,
    tooltip: {
      show: false
    },
    data: [{
      value: 100,
      itemStyle: {
        normal:{
          color: 'rgba(44,59,70,0.8)'
        },
        emphasis: {
          color: '#313443'
        }
      }
    }, {
      value: 0,
      name: 'invisible',
    }

    ]
  },


  ]
};
ts_4.setOption(option_ts4);
  /*上面6个岗位的echart*/
ts_5=echarts.init(document.getElementById("ts-5"));
option_ts5={
  title: {
    text: '75%',
    x: 'center',
    y: '36%',
    textStyle: {
      fontWeight: 'normal',
      color: "white",
      fontSize: 24
    }
  },
  color: ['#429FC4', '#313443', '#fff'],
  series: [{
    name: 'Line 1',
    type: 'pie',
    center:['50%','45%'],
    // clockWise: false,
    radius: [40, 55],
    itemStyle: {
      normal: {
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        shadowBlur: 20,
        shadowColor: 'rgba(40, 40, 40, 0.5)',
      }
    },
    hoverAnimation: false,
    data: [{
      value: 75,
    }, {
      value: 25,
      itemStyle: {
        normal: {
          color: 'rgba(44,59,70,0.8)',//未完成的圆环的颜色
          label: {
            show: false
          },
          labelLine: {
            show: false
          }
        }
      }
    }
    ]
  }, {
    name: 'Line 2',
    type: 'pie',
    center:['50%','45%'],
    animation: false,
    clockWise: false,
    radius: [60, 63],
    itemStyle: {
      normal: {
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
      }
    },
    hoverAnimation: false,
    tooltip: {
      show: false
    },
    data: [{
      value: 100,
      itemStyle: {
        normal:{
          color: 'rgba(44,59,70,0.8)'
        },
        emphasis: {
          color: '#313443'
        }
      }
    }, {
      value: 0,
      name: 'invisible',
    }

    ]
  },


  ]
};
ts_5.setOption(option_ts5);
  /*上面6个岗位的echart*/
ts_6=echarts.init(document.getElementById("ts-6"));
option_ts6={
  title: {
    text: '75%',
    x: 'center',
    y: '36%',
    textStyle: {
      fontWeight: 'normal',
      color: "white",
      fontSize: 24
    }
  },
  color: ['#BB535D', '#313443', '#fff'],
  series: [{
    name: 'Line 1',
    center:['50%','45%'],
    type: 'pie',
    // clockWise: false,
    radius: [40, 55],
    itemStyle: {
      normal: {
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        shadowBlur: 20,
        shadowColor: 'rgba(40, 40, 40, 0.5)',
      }
    },
    hoverAnimation: false,
    data: [{
      value: 75,
    }, {
      value: 25,
      itemStyle: {
        normal: {
          color: 'rgba(44,59,70,0.8)',//未完成的圆环的颜色
          label: {
            show: false
          },
          labelLine: {
            show: false
          }
        }
      }
    }
    ]
  }, {
    name: 'Line 2',
    center:['50%','45%'],
    type: 'pie',
    animation: false,
    clockWise: false,
    radius: [60, 63],
    itemStyle: {
      normal: {
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
      }
    },
    hoverAnimation: false,
    tooltip: {
      show: false
    },
    data: [{
      value: 100,
      itemStyle: {
        normal:{
          color: 'rgba(44,59,70,0.8)'
        },
        emphasis: {
          color: '#313443'
        }
      }
    }, {
      value: 0,
      name: 'invisible',
    }

    ]
  },


  ]
};
ts_6.setOption(option_ts6);

  /*事件(数字)的定位*/
wc=function(){
  blw=$(".bottom-left").width();
  console.log(blw);
  $(".wc").css({'marginLeft':blw/2-160+"px"});
}
wc();

window.onresize=function(){
  ts_1.resize();
  ts_2.resize();
  ts_3.resize();
  ts_4.resize();
  ts_5.resize();
  ts_6.resize();
  wc();
}

})



