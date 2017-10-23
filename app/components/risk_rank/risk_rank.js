$(function () {


risk_rank1=echarts.init(document.getElementById("risk_rank-1"));
option_one = {
  grid: {
    top:'25%',
    right: '3%',
    left: '8%',
    bottom: '10%'
  },
  xAxis: [
    {
      type: 'category',
      data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月'],
      axisPointer: {
        type: 'shadow'
      },
      axisTick: {
        show: false
      },
      axisLine:{
        show:false,
        lineStyle:{
          color:'rgba(255,255,255,.8)'
        }
      },
      splitLine: {show: true},
      boundaryGap : false,
      axisLabel: {
        interval: 0,
        margin: 10,
        textStyle:{ fontSize:10, color:'white'}
      }
    }
  ],
  yAxis: [
    {
      show:"false",
      axisTick: {
        show: false
      },
      axisLine:{
        show:false,
        lineStyle:{
          color:'rgba(255,255,255,.8)'
        }
      },
      type: 'value',
      min: 0,
      max: 100,
      axisLabel: {
        formatter: '{value}'
      }
    },

  ],
  series: [
    {
      name:'蒸发量',
      type:'line',
      markPoint : {
        data : [
          {name : '蒸发', value : 1323, xAxis: 0, yAxis: 0,symbolSize:0},
          {name : '蒸发', value : 1676, xAxis: 1, yAxis: 36,symbolSize:70},
          {name : '蒸发', value : 1695, xAxis: 2, yAxis: 56,symbolSize:50},
          {name : '蒸发', value : 1695, xAxis: 3, yAxis: 46,symbolSize:40},
          {name : '蒸发', value : 1695, xAxis: 4, yAxis: 76,symbolSize:70},
          {name : '蒸发', value : 1695, xAxis: 5, yAxis: 67,symbolSize:50},
          {name : '蒸发', value : 1695, xAxis: 6, yAxis: 96,symbolSize:70},
          {name : '蒸发', value : 1695, xAxis: 7, yAxis: 46,symbolSize:60},
          {name : '蒸发', value : 1695, xAxis: 8, yAxis: 76,symbolSize:70},
          {name : '蒸发', value : 1695, xAxis: 9, yAxis: 58,symbolSize:50},
          {name : '蒸发', value : 1695, xAxis:10, yAxis: 55,symbolSize:50},
        ]
      }
    }
  ]
};
risk_rank1.setOption(option_one)

risk_rank2=echarts.init(document.getElementById("risk_rank-2"));
option_two = {
  tooltip: {},
  legend: {
    orient: '',
    top: '20%',
    left:'2%',
    itemWidth: 12,
    itemHeight: 12,
    data: ['第一名监所','第二名监所','第三名监所'],
    textStyle: {
      color: '#fff'
    }
  },
  radar: {
    radius: '60%',
    splitNumber: 5,
    center: ['50%', '60%'],
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
        color:'rgba(0,64,135,.9)'
      }
    },
    indicator: [{
      name: '风险项1',
      max: 100
    }, {
      name: '风险项2',
      max: 100
    }, {
      name: '风险项3',
      max:100
    }, {
      name: '风险项4',
      max: 100
    }, {
      name: '风险项5',
      max: 100
    }, {
      name: '风险项6',
      max: 100
    },{
      name: '风险项7',
      max: 100
    }]
  },
  series: [{
    name: 'risk_rank',
    type: 'radar',
    symbolSize: 0,
    areaStyle: {
      normal: {
        opacity: 0.5
      }
    },
    data: [{
      value: [50, 70, 50, 60, 70, 80,60],
      name: '第一名监所'
    }, {
      value: [50, 60, 70, 85, 60, 70,50],
      name: '第二名监所'
    }, {
      value: [80, 30, 40, 65, 20, 60,70],
      name: '第三名监所'
    }]
  }],
  color: ['#ef4b4c', '#b1eadb','#C75028']
};
risk_rank2.setOption(option_two)

risk_rank3=echarts.init(document.getElementById("risk_rank-3"));
option_three = {
  grid: {
    left: '5%',
    right: '4%',
    bottom:'15%',
    top:'30%'
    //containLabel: true
  },

  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['04/02', '04/03', '04/04', '04/05', '04/06', '04/07', '04/08','04/02', '04/03', '04/04', '04/05', '04/06', '04/07', '04/08'],
    axisLine: {
      lineStyle: {
        color: '#fff'
      }
    },
    splitLine: {
      show:true,
      lineStyle: {
        // 使用深浅的间隔色
        color: 'rgba(255,255,255,0.2)',
      }
    },
    axisTick:{
      show:false,
    }

  },
  yAxis: {
    axisLine: {
      show:false,
      lineStyle: {
        color: '#fff'
      }
    },
    axisTick:{
      show:false,
    },
    splitLine: {
      lineStyle: {
        // 使用深浅的间隔色
        color: 'rgba(104,147,171,0.1)',
      }
    },

  },
  series: [{
    name: '事业一部',
    itemStyle:{
      normal:{
        color:'#E0D011'
      }
    },
    areaStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(111,111,111,0.7)'
        }, {
          offset: 1,
          color: 'rgba(111,111,111,0.1)'
        }], false)
      }
    },
    type: 'line',
    data: [0.42, 0.5, 0.3, 0.39, 0.55, 0.4, 0.6,0.42, 0.5, 0.3, 0.39, 0.55, 0.2, 0.6]
  }]
};
risk_rank3.setOption(option_three)


window.onresize=function(){
  risk_rank1.resize();
  risk_rank2.resize();
  risk_rank3.resize();
}
})
