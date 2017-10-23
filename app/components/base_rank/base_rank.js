$(function(){

lft=echarts.init(document.getElementById("lft"));
option_lft = {
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
          color: '#0294DF',
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
      data:[77, 66, 55, 44, 99, 22, 11, 22, 33, 44, 55, 66, 77 , 88]
    }
  ]
};
lft.setOption(option_lft);

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
    data:['重点犯数量1','重点犯数量2','重点犯数量3'],
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
    name: '重点犯数量1',
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
    name: '重点犯数量2',
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
    name: '重点犯数量3',
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
    // {
    //     name:'半径模式',
    //     type:'pie',
    //     radius : [20, 110],
    //     center : ['25%', '50%'],
    //     roseType : 'radius',
    //     label: {
    //         normal: {
    //             show: false
    //         },
    //         emphasis: {
    //             show: true
    //         }
    //     },
    //     lableLine: {
    //         normal: {
    //             show: false
    //         },
    //         emphasis: {
    //             show: true
    //         }
    //     },
    //     data:[
    //         {value:10, name:'rose1'},
    //         {value:5, name:'rose2'},
    //         {value:15, name:'rose3'},
    //         {value:25, name:'rose4'},
    //         {value:20, name:'rose5'},
    //         {value:35, name:'rose6'},
    //         {value:30, name:'rose7'},
    //         {value:40, name:'rose8'}
    //     ]
    // },
    {
      name:'面积模式',
      type:'pie',
      radius : [30, 110],
      center : ['50%', '60%'],

      roseType : 'area',
      data:[
        {value:10, name:'rose1'},
        {value:5 , name:'rose2'},
        {value:15, name:'rose3'},
        {value:25, name:'rose4'},
        {value:40, name:'rose8'}
      ],
      label: {
        normal: {
          textStyle: {
            fontSize:22
          }
        }
      }
    }
  ]
};
rtt.setOption(option_rtt);

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
      radius : [10, 30],
      center : ['50%', '40%'],

      roseType : 'area',
      data:[
        {value:210, name:'one1'},
        {value:115 , name:'one2'},
        {value:15, name:'one3'},
        {value:165, name:'one4'},
        {value:80, name:'one5'}
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
      }
    }
  ]
}
bot_left.setOption(option_botleft);

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
      radius : [10, 30],
      center : ['50%', '40%'],
      roseType : 'area',
      data:[
        {value:210, name:'one1'},
        {value:165 , name:'one2'},
        {value:225, name:'one3'},
        {value:35, name:'one4'},
        {value:117, name:'one5'}
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
      }
    }
  ]
}
bot_mid.setOption(option_botmid);

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
      radius : [10, 30],
      center : ['50%', '40%'],

      roseType : 'area',
      data:[
        {value:110, name:'one1'},
        {value:55 , name:'one2'},
        {value:15, name:'one3'},
        {value:235, name:'one4'},
        {value:97, name:'one5'}
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
      }
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
