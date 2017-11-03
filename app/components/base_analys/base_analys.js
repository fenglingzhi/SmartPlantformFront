$(function () {

/*左上玫瑰图*/
left_t=echarts.init(document.getElementById("left-t"));
option_lt = {
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
      labelLine: {
        normal: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.3)'
          },
          smooth: 0.2,
          length: 10,
          length2: 10
        }
      },
      roseType : 'area',
      data:[
        {value:10, name:'监所押量',
          itemStyle:{
            normal:{
              color:'#2EC8CA'
            }
          }
        },
        {value:5 , name:'违规督导单',
          itemStyle:{
            normal:{
              color:'#B6A2DF'
            }
          }
        },
        {value:15, name:'警力配比',
          itemStyle:{
            normal:{
              color:'#DAA67E'
            }
          }
        },
        {value:25, name:'现场检查',
          itemStyle:{
            normal:{
              color:'#59B1EF'
            }
          }
        }
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
left_t.setOption(option_lt);
/*右上折线图*/
right_t=echarts.init(document.getElementById("right-t"));
option_rt= {
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
  "dataZoom": [{
    "show": true,
    "height": 20,
    "xAxisIndex": [
      0
    ],
    bottom: 0,
    "start": 30,
    "end": 80,
    handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
    handleSize: '0%',
    backgroundColor:"rgba(25,47,83,0.5)",
    fillerColor:"#1D5090",
    dataBackground:{
      areaStyle:{
        // color:"red"
      },
      lineStyle:{
        color:"transparent"
      }
    },
    handleStyle:{
      color:"#ddd"

    },
    textStyle:{
      color:"white"
    },
    borderColor:"transparent"


  }, {
    "type": "inside",
    "show": true,
    "height": 15,
    "start": 1,
    "end": 35
  }],
  series : [
    {
      name:'重点犯数量3',
      type:'line',
      smooth: true,
      symbol: 'circle',
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
    }
  ]
};
right_t.setOption(option_rt);

window.onresize = function(){
  left_t.resize();
  right_t.resize();
};

});
