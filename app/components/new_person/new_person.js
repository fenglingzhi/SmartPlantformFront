$(function () {


imgFw=$("#left-df").width();
imgFh=$("#left-df").height();
imgW=$(".left-img").width();
imgH=$(".left-img").height();
fenW=$(".left-dw").width();
fenH=$(".left-dw").height();
//  console.log(imgFw+"px");
//  console.log(imgFh+"px");
//  console.log(imgH+"px");
//  console.log(imgW+"px");
$(".left-img").css({"left":imgFw/2-imgW/2+"px"});
$(".left-img").css({"top":10+(imgFh/2-imgW/2)+"px"});
$(".left-dw").css({"left":imgFw/2-fenW/2+"px"});
$(".left-dw").css({"top":10+(imgFh/2-fenH/2)+"px"});


mid_one=echarts.init(document.getElementById("mid-1"));
option_one = {
  title: {
    text: '44%',
    x: 'center',
    y: 'center',
    textStyle: {
      fontWeight: 'normal',
      color: "#0bb6f0",
      fontSize: 20
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
        shadowColor: 'rgba(40, 40, 40, 0.5)',
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
      fontSize: 20
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
      fontSize: 20
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
        shadowColor: 'rgba(40, 40, 40, 0.5)',
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
      value: 34,
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
      fontSize: 20
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
        shadowColor: 'rgba(40, 40, 40, 0.5)',
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
      fontSize: 20
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
})
