$(function(){

/*左上柱状图*/
lft=echarts.init(document.getElementById("lft"));
  option_lft= {
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
        data : ['监所1', '监所2', '监所3', '监所4', '监所5', '监所6',
          '监所7','监所8','监所9','监所10','监所11','监所12','监所13'],
        axisLabel: {
          show: true,
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
          show: true,
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
            color: function(params) {
              var colorList = [
                '#10B3E6','#10B3E6','orange','orange','#10B3E6','#10B3E6','#10B3E6',
              ];
              return colorList[params.dataIndex]
            },
            barBorderRadius: [20, 20, 0, 0]
          }
        },
        type:'bar',
        markLine: {
          lineStyle: {
            normal: {
              color: '#B64A4A',
              type: 'solid'
            }
          },
          data: [{
            yAxis: 60
          }]
        },
        barWidth: '30%',
        z: 10,
        data:[77, 66, 55, 44, 99, 22, 11, 22, 33, 44, 55, 66, 77 ]
      }
    ]
  };
lft.setOption(option_lft);
/*左下折线图*/
lfb=echarts.init(document.getElementById("lfb"));
option_lfb = {
  tooltip : {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    icon: 'rect',
    itemWidth: 15,
    itemHeight: 10,
    itemGap: 13,
    data:['监所押量','违规督导单','警力配比'],
    top:'10%',
    right:'5%',
    textStyle:{
      color:'white'
    }
  },
  grid: {
    top:'23%',
    left: '4%',
    right: '6%',
    bottom: '7%',
    containLabel: true
  },
  xAxis: [{
    type: 'category',
    boundaryGap: false,
    axisLabel: {
      show: true,
      textStyle: {
        fontSize:14,
        color: 'white'
      }
    },
    axisLine: {
      lineStyle: {
        color: '#57617B'
      }
    },
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
  }],
  yAxis: [{
    type: 'value',
    axisTick: {
      show: false
    },
    axisLine: {
      lineStyle: {
        color: '#57617B'
      }
    },
    axisLabel: {
      margin: 10,
      textStyle: {
        fontSize: 14,
        color: 'white'
      }
    },
    splitLine: {
      lineStyle: {
        color: '#57617B'
      }
    }
  }],
  series: [{
    name: '监所押量',
    type: 'line',
    smooth: true,
    lineStyle: {
      normal: {
        width: 1
      }
    },
    areaStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(137, 189, 27, 0.3)'
        }, {
          offset: 0.8,
          color: 'rgba(137, 189, 27, 0)'
        }], false),
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowBlur: 10
      }
    },
    itemStyle: {
      normal: {
        color: 'rgb(137,189,27)'
      }
    },
    data: [96.3,96.4,97.5,95.6,98.1,94.8,89.6,94.1,80.1,52.4,75.8,94.7]
  }, {
    name: '违规督导单',
    type: 'line',
    smooth: true,
    lineStyle: {
      normal: {
        width: 1
      }
    },
    areaStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(0, 136, 212, 0.3)'
        }, {
          offset: 0.8,
          color: 'rgba(0, 136, 212, 0)'
        }], false),
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowBlur: 10
      }
    },
    itemStyle: {
      normal: {
        color: 'rgb(0,136,212)'
      }
    },
    data: [97.3,99.2,99.3,100.0,99.6,90.6,80.0,91.5,69.8,67.5,90.4,84.9]
  }, {
    name: '警力配比',
    type: 'line',
    smooth: true,
    lineStyle: {
      normal: {
        width: 1
      }
    },
    areaStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(219, 50, 51, 0.3)'
        }, {
          offset: 0.8,
          color: 'rgba(219, 50, 51, 0)'
        }], false),
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowBlur: 10
      }
    },
    itemStyle: {
      normal: {
        color: 'rgb(219,50,51)'
      }
    },
    data: [84.2,81.0,67.5,72.1,43.7,88.5,91.9,101.8,79.7,87.6,92.9,0]
  }, ]
};
lfb.setOption(option_lfb);
/*右上玫瑰图*/
rtt=echarts.init(document.getElementById("rtt"));
option_rtt = {
  tooltip : {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)",
    itemStyle:{
      color:'red'

    },
    axisPointer:{
      textStyle:{
        color:'red'
      }
    }
  },
  calculable : true,
  series : [
    {
      name:'面积模式',
      type:'pie',
      radius : [100, 200],
      center : ['50%', '60%'],

      roseType : 'area',
      data:[
        {value:10, name:'监所押量'},
        {value:5 , name:'违规督导单'},
        {value:15, name:'警力配比'},
        {value:25, name:'重大风险\r\n人员数量'}
      ],
      label: {
        normal: {
          textStyle: {
            fontSize:16
          }
        }
      },
      color:['#2EC8CA','#B6A2DF','#5BB1F0','#E5AB7D'],
    }
  ]
};
rtt.setOption(option_rtt);
  /*右下从左到右玫瑰图1*/
bot_left=echarts.init(document.getElementById("bot-left"));
option_botleft={
  tooltip : {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)",
    itemStyle:{
      color:'red'

    },
    axisPointer:{
      textStyle:{
        color:'red'
      }
    }
  },
  calculable : true,
  series : [
    {
      name:'面积模式',
      type:'pie',
      radius : [30, 60],
      center : ['50%', '40%'],

      roseType : 'area',
      data:[
        {value:210, name:'押量'},
        {value:115 , name:'督导单'},
        {value:15, name:'警力\n配比'},
        {value:165, name:'风险人\n员数量'}
      ],
      labelLine: {
        normal: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.3)'
          },
          smooth: 0.2,
          length: 5,
          length2: 5
        }
      },
      label: {
        normal: {
          textStyle: {
            fontSize:14
          }
        }
      },
      color:['#2EC8CA','#B6A2DF','#5BB1F0','#E5AB7D'],
    }
  ]
}
bot_left.setOption(option_botleft);
  /*右下从左到右玫瑰图2*/
bot_mid=echarts.init(document.getElementById("bot-mid"));
option_botmid={
  tooltip : {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)",
    itemStyle:{
      color:'red'

    },
    axisPointer:{
      textStyle:{
        color:'red'
      }
    }
  },
  calculable : true,
  series : [
    {
      name:'面积模式',
      type:'pie',
      radius : [30, 60],
      center : ['50%', '40%'],
      roseType : 'area',
      data:[
        {value:210, name:'押量'},
        {value:165 , name:'督导单'},
        {value:225, name:'警力\n配比'},
        {value:35, name:'风险人\n员数量'}
      ],
      labelLine: {
        normal: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.3)'
          },
          smooth: 0.2,
          length: 5,
          length2: 5
        }
      },
      label: {
        normal: {
          textStyle: {
            fontSize:14
          }
        }
      },
      color:['#2EC8CA','#B6A2DF','#5BB1F0','#E5AB7D'],
    }
  ]
}
bot_mid.setOption(option_botmid);
  /*右下从左到右玫瑰图3*/
bot_right=echarts.init(document.getElementById("bot-right"));
option_botright={
  tooltip : {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)",
    itemStyle:{
      color:'red'

    },
    axisPointer:{
      textStyle:{
        color:'red'
      }
    }
  },
  calculable : true,
  series : [
    {
      name:'面积模式',
      type:'pie',
      radius : [30, 60],
      center : ['50%', '40%'],

      roseType : 'area',
      data:[
        {value:110, name:'押量'},
        {value:55 , name:'督导单'},
        {value:15, name:'警力\n配比'},
        {value:235, name:'风险人\n员数量'}
      ],
      labelLine: {
        normal: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.3)'
          },
          smooth: 0.2,
          length: 5,
          length2: 5
        }
      },
      label: {
        normal: {
          textStyle: {
            fontSize:14
          }
        }
      },
      color:['#2EC8CA','#B6A2DF','#5BB1F0','#E5AB7D']
    }
  ]
}
bot_right.setOption(option_botright);


window.onresize = function(){
  lft.resize();
  lfb.resize();
  rtt.resize();
  bot_left.resize();
  bot_mid.resize();
  bot_right.resize();
}

})
