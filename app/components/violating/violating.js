$(function () {
/*上方柱状与折线图*/
vio_t=echarts.init(document.getElementById("vio-t"))
  option_t = {
    legend: {
      data:['总风险','违规类型风险','连续违规风险'],
      top:'10%',
      right:'2%',
      textStyle: {
        color: '#fff'
        // fontSize: 16
      }
    },
    grid: {
      left: '3%',
      right: '3%',
      bottom: '8%',
      top:'20%'
    },

    xAxis: [
      {
        type: 'category',
        boundaryGap: true,//坐标轴两边留白
        data: ['监所1','监所2','监所3','监所4','监所5','监所6','监所7','监所8','监所9','监所10','监所11','监所12'],
// 			axisLabel: { //坐标轴刻度标签的相关设置。
// 				// interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
// 				// margin:15,
// 				// textStyle: {
// 				// 	color: '#078ceb',
// 				// 	fontStyle: 'normal',
// 				// 	fontFamily: '微软雅黑',
// 				// 	fontSize: 12,

// 				// }
// 			},
        axisTick:{//坐标轴刻度相关设置。
          show: false,
        },
        axisLine:{//坐标轴轴线相关设置
          lineStyle:{
            color:'#fff',
            opacity:0.2
          }
        },
        splitLine: { //坐标轴在 grid 区域中的分隔线。
          show: false,
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          textStyle: {
            color: '#a8aab0',
            // 	fontStyle: 'normal',
            // 	fontFamily: '微软雅黑',
            // 	fontSize: 12,
          }
        },
        axisLine:{
          show: true
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

      }
    ],

    series : [
      {
        name:'总风险',
        type:'bar',
        data:[67,
          99,
          87, 74, 29, 67,67,
          99,
          87, 74, 29, 67],
        barWidth: 15,
        lineStyle:{
          normal:{
            color:'red'
          }
        },
        barGap:0.2,//柱间距离
        label: {//图形上的文本标签
          normal: {
            show: true,
            position: 'top',
            textStyle: {
              color: '#a8aab0',
              //   fontStyle: 'normal',
              //   fontFamily: '微软雅黑',
              //   fontSize: 12,
            },
          },
        },
        itemStyle: {
          normal: {
            color: function(params) {
              var colorList = [
                'rgba(13,92,194,0.5)','orange','rgba(13,92,194,0.5)','rgba(13,92,194,0.5)','rgba(13,92,194,0.5)','rgba(13,92,194,0.5)','orange','rgba(13,92,194,0.5)','rgba(13,92,194,0.5)','rgba(13,92,194,0.5)','rgba(13,92,194,0.5)','rgba(13,92,194,0.5)','rgba(13,92,194,0.5)','rgba(13,92,194,0.5)','rgba(13,92,194,0.5)','rgba(13,92,194,0.5)'
              ];
              return colorList[params.dataIndex]
            },
            label: {
              show: true,
              position: 'top',
              formatter: '{b}\n{c}'
            }
          }
        },

      },
      {
        name:'违规类型风险',
        type:'line',
        data:[30, 31, 72, 26, 47,59,30, 31, 72, 26, 47,59],
        barWidth: 15,
        symbol:'circle',
        symbolSize:10,
        lineStyle:{
          normal:{
            color:'#6A367D'
          }
        },
        barGap:0.2,//柱间距离
        label: {//图形上的文本标签
          normal: {
            show: true,
            position: 'top',
            textStyle: {
              color: '#a8aab0',
              fontStyle: 'normal',
              fontFamily: '微软雅黑',
              fontSize: 12,
            },
          },
        },
        itemStyle:{
          normal:{
            color:'purple',
            barBorderRadius:0,
            label:{
              show:true,
              position:'top',
            }
          }
        },
      },
      {

        name:'连续违规风险',
        type:'line',
        symbolSize:10,
        symbol:'circle',
        lineStyle:{
          normal:{
            color:'#6BA22F'
          }
        },
        itemStyle:{
          normal:{
            color:'#CB6C1F',
            barBorderRadius:0,
            label:{
              show:true,
              position:'top',
            }
          }
        },
        data:['86','30','67','52','67','62','86','30','67','52','67','62']
      }

    ]
  };
vio_t.setOption(option_t);
/*下方左边饼状图*/
vio_l1=echarts.init(document.getElementById("bottom-left1"))
option_l1 = {
  series : [
    {
      labelLine: {
        normal: {
          show:false
        }
      },
      name: '访问来源',
      type: 'pie',
      radius : '50%',
      center: ['50%', '60%'],
      data:[
        {value:335, name:'打骂欺\n凌他人'},
        {value:335, name:'破坏监\n内设施'},
        {value:310, name:'私藏凶器'},
        {value:234, name:'吸烟'},
        {value:135, name:'递信息\n和物品'},
        {value:548, name:'物品摆\n放凌乱'}
      ],
    }
  ]
};
vio_l1.setOption(option_l1);
/*下方左侧柱状与折线图*/
vio_l2=echarts.init(document.getElementById("bottom-left2"))
  option_l2 = {
    grid: {
      left: '8%',
      right: '4%',
      bottom: '10%',
      top:'10%'
    },

    xAxis: [
      {
        type: 'category',
        boundaryGap: true,//坐标轴两边留白
        data: ['监所','监所','监所','监所','监所','监所','监所'],
// 			axisLabel: { //坐标轴刻度标签的相关设置。
// 				// interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
// 				// margin:15,
// 				// textStyle: {
// 				// 	color: '#078ceb',
// 				// 	fontStyle: 'normal',
// 				// 	fontFamily: '微软雅黑',
// 				// 	fontSize: 12,

// 				// }
// 			},
        axisTick:{//坐标轴刻度相关设置。
          show: false,
        },
        axisLine:{//坐标轴轴线相关设置
          lineStyle:{
            color:'#fff',
            opacity:0.2
          }
        },
        splitLine: { //坐标轴在 grid 区域中的分隔线。
          show: false,
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          textStyle: {
            color: 'white',
            // 	fontStyle: 'normal',
            // 	fontFamily: '微软雅黑',
            // 	fontSize: 12,
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

      }
    ],

    series : [
      {
        name:'一',
        type:'bar',
        itemStyle: {
          normal: {
            color: function(params) {
              var colorList = [
                '#10B3E6','#10B3E6','orange','orange','#10B3E6','#10B3E6','#10B3E6',
              ];
              return colorList[params.dataIndex]
            },
            label: {
              show: true,
              position: 'top',
              formatter: '{b}\n{c}'
            }
          }
        },
        data:[ 67,67, 99, 87, 74, 29, 67],
        barWidth: 15,
        lineStyle:{
          normal:{
            color:'red'
          }
        },
        barGap:0.2,//柱间距离
        label: {//图形上的文本标签
          normal: {
            show: true,
            position: 'top',
            textStyle: {
              color: '#a8aab0',
              //   fontStyle: 'normal',
              //   fontFamily: '微软雅黑',
              //   fontSize: 12,
            },
          },
        },
      },
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
            color: '#BFAD54',
            borderColor: 'rgba(255, 71, 1,0.2)',
            borderWidth: 20

          }
        },
        data: [120, 110, 125, 145, 122,  134, 150]
      },

    ]
  };
vio_l2.setOption(option_l2);
/*下方右侧类柱状图*/
vio_r1=echarts.init(document.getElementById("bottom-right1"))
option_r1 = {
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
    top: "20%",
    left:"15%",
    bottom: 30
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
        color: 'white'
      }
    },

    axisTick: {show: false},
    splitLine: {
      lineStyle:{
        type:'solid',
        color: 'rgba(207,195,189,0.5)'
      }
    },
    data : ['打架', '吸烟','欺凌他人','单人值班','私藏打火机']

  },
  yAxis: {
    type : 'value',
    // position: 'top',
    axisLabel: {
      textStyle: {
        color: 'white'
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
            color: '#a8aab0'
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
      data:[10, 2, 6, 4, 10]
    },
    {
      type: 'bar',
      stack: '月份',
      silent: true,
      data: [0, 0, 0, 0, 0],
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
vio_r1.setOption(option_r1);
/*下方右侧柱状与折现图*/
vio_r2=echarts.init(document.getElementById("bottom-right2"))
  option_r2 = {
    grid: {
      left: '8%',
      right: '4%',
      bottom: '10%',
      top:'10%'
    },

    xAxis: [
      {
        type: 'category',
        boundaryGap: true,//坐标轴两边留白
        data: ['监所','监所','监所','监所','监所','监所','监所'],
// 			axisLabel: { //坐标轴刻度标签的相关设置。
// 				// interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
// 				// margin:15,
// 				// textStyle: {
// 				// 	color: '#078ceb',
// 				// 	fontStyle: 'normal',
// 				// 	fontFamily: '微软雅黑',
// 				// 	fontSize: 12,

// 				// }
// 			},
        axisTick:{//坐标轴刻度相关设置。
          show: false,
        },
        axisLine:{//坐标轴轴线相关设置
          lineStyle:{
            color:'#fff',
            opacity:0.2
          }
        },
        splitLine: { //坐标轴在 grid 区域中的分隔线。
          show: false,
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          textStyle: {
            color: 'white',
            // 	fontStyle: 'normal',
            // 	fontFamily: '微软雅黑',
            // 	fontSize: 12,
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

      }
    ],

    series : [
      {
        name:'一',
        type:'bar',
        itemStyle: {
          normal: {
            color: function(params) {
              var colorList = [
                '#10B3E6','#10B3E6','orange','orange','#10B3E6','#10B3E6','#10B3E6',
              ];
              return colorList[params.dataIndex]
            },
            label: {
              show: true,
              position: 'top',
              formatter: '{b}\n{c}'
            }
          }
        },
        data:[ 67,67, 99, 87, 74, 29, 67],
        barWidth: 15,
        lineStyle:{
          normal:{
            color:'red'
          }
        },
        barGap:0.2,//柱间距离
        label: {//图形上的文本标签
          normal: {
            show: true,
            position: 'top',
            textStyle: {
              color: '#a8aab0',
              //   fontStyle: 'normal',
              //   fontFamily: '微软雅黑',
              //   fontSize: 12,
            },
          },
        },
      },
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
            color: '#BFAD54',
            borderColor: 'rgba(255, 71, 1,0.2)',
            borderWidth: 20

          }
        },
        data: [120, 110, 125, 145, 122,  134, 150]
      },

    ]
  };
vio_r2.setOption(option_r2);

window.onresize = function(){
  vio_t.resize();
  vio_l1.resize();
  vio_l2.resize();
  vio_r1.resize();
  vio_r2.resize();
}
})
