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
      { name: '风险项1', max: 100},
      { name: '风险项2', max: 100},
      { name: '风险项3', max: 100},
      { name: '风险项4', max: 100},
      { name: '风险项5', max: 100},
      { name: '风险项6', max: 100},
      { name: '风险项7', max: 100}
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
