$(function () {

/*左边雷达图*/
left_t=echarts.init(document.getElementById("left-t"));
option_lt = {
  radar: {
    // shape: 'circle',
    name: {
      textStyle: {
        color: '#fff'
      }
    },
    center: ['50%', '60%'],
    splitArea: {
      areaStyle: {
        color:'#004087'
      }
    },
    indicator: [
      { name: '监室设施', max: 100},
      { name: '周界报警', max: 100},
      { name: '监区门禁', max: 100},
      { name: '紧急报警', max: 100},
      { name: 'AB门设施', max: 100},
      { name: '周界防护', max: 100},
      { name: '无线定位', max: 100}
    ]
  },
  series: [{
    name: '预算 vs 开销（Budget vs spending）',
    type: 'radar',
    areaStyle: {
      normal: {
        color:'rgba(81,234,251,0.9)'
      }

    },
    symbol:'rect',
    color:'yellow',
    lineStyle:{
      normal:{
        color:'#06F9F9'

      }
    },
    data : [
      {
        value : [80, 95, 80, 80, 92, 66,100],
        name : '实际开销（Actual Spending）',
        label: {
          normal: {
            show: true,
            color:'white'
          }
        }
      }
    ]
  }]
};
left_t.setOption(option_lt);
/*右边折线图*/
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
    bottom: '10%',
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
}
right_t.setOption(option_rt);



window.onresize = function(){
  left_t.resize();
  right_t.resize();
}
})
