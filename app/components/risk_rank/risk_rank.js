$(function () {

/*上方左边累气球图*/
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
      data: ['监所1','监所2','监所3','监所4','监所5','监所6','监所7','监所8','监所9','监所10','监所11'],
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
/*上方右边雷达图*/
risk_rank2=echarts.init(document.getElementById("risk_rank-2"));
option_two = {
  tooltip: {},
  legend: {
    orient: '',
    top: '20%',
    left:'2%',
    itemWidth: 12,
    itemHeight: 12,
    data: ['监所1','监所2','监所3'],
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
      name: '监室设施',
      max: 100
    }, {
      name: '周界报警',
      max: 100
    }, {
      name: '监区门禁',
      max:100
    }, {
      name: '紧急报警',
      max: 100
    }, {
      name: 'AB门设施',
      max: 100
    }, {
      name: '周界防护',
      max: 100
    },{
      name: '2.无线定位',
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
      name: '监所1'
    }, {
      value: [50, 60, 70, 85, 60, 70,50],
      name: '监所2'
    }, {
      value: [80, 30, 40, 65, 20, 60,70],
      name: '监所3'
    }]
  }],
  color: ['#ef4b4c', '#b1eadb','#C75028']
};
risk_rank2.setOption(option_two)
/*下方折线图*/
risk_rank3=echarts.init(document.getElementById("risk_rank-3"));
option_three = {
  grid: {
    left: '5%',
    right: '4%',
    bottom:'15%',
    top:'30%'
    //containLabel: true
  },
  legend: {
    orient: '',
    top: '15%',
    left:'50%',
    itemWidth: 12,
    itemHeight: 12,
    data: ['监室设施'],
    textStyle: {
      color: '#fff'
    }
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
    name: '监室设施',
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
