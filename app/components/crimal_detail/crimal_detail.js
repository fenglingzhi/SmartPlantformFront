$(function () {
  $(function() {
    //初始化参数
    $('#ocx').initDecode();
    //设置窗口播放条数
    $('#ocx').setVideoNum(16);
    for(let i = 0;i<=16;i++){
      $('#ocx').videoAsyncMultPlay("", 433, "", "", "", "10.58.1.254", 8000, "admin", "12345",i, "", "", "1102011", 0, 1);
    }
  })


/*============================ 危险等级 ===============================*/
var crimal_dangerous = echarts.init(document.getElementById("crimal_dangerous"));
var data1 = [53];
var xMax1 = 100;
var axisColor = '#fff';
option = {
  title:{
    text : '危险等级',
    textStyle :{
      color : '#fff',
      fontSize: 12
    },
    top:'16%',
    left:'0%'
  },
  grid: {
    left: '13%',
    right: '0%',
    bottom: '3%',
    top:'10%',
    containLabel: true
  },
  xAxis: [{
    axisTick: {
      show: false,
      // color:'#fff',
    },
    axisLine: {
      show: false,
    },
    axisLabel: {
      show: false
      //color:'#fff',
    },
    splitLine: {
      show: false,
      // color:'#fff',
    }
  }],
  yAxis: [{
    type: 'category',
    data: ['',  ],
    axisTick: {
      // color:'#fff',
      show: false,
    },
    axisLine: {
      //  color:'#fff',
      show: false,
    },
    axisLabel: {
      textStyle: {
        color: '#000',
      }
    }

  }],
  series: [{
    name: ' ',
    type: 'bar',
    barWidth: 8,
    silent: true,
    itemStyle: {
      normal: {
        color: '#434c5b',
        barBorderRadius: [15, 15, 15, 15],
      }
    },
    barGap: '-100%',
    barCategoryGap: '50%',
    data: data1.map(function(d) {
      return xMax1
    }),
  }, {
    name: ' ',
    type: 'bar',
    barWidth: 8,
    label: {
      normal: {
        show: true,
        position: ['70%','-250%'],
        formatter: '一级重大风险',
        textStyle:{
          color:'#fff',
          fontSize:14
        }
      }
    },
    data: [{
      value: 88,
      itemStyle: {
        normal: {
          barBorderRadius: [15, 15, 15, 15],
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            offset: 0,
            color: '#ccab28'
          }, {
            offset: 1,
            color: '#ce1c3e'
          }], false),
        }
      }
    } ],
  }]
};
crimal_dangerous.setOption(option, true);
/*============================ 危险等级 ===============================*/

/*================== 风险倾向 ==========================*/
var crimal_risk_tend = echarts.init(document.getElementById("crimal_risk_tend"));
option = {
  title: {
    // text: '风险倾向',
    textStyle :{
      color:'#fff',
    },
    left:110,
    top:20
  },
  tooltip: {},
  legend: {
    // data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
  },
  radar: {
    indicator: [
      { name: '逃脱', max: 1000},
      { name: '暴力', max: 1000},
      { name: '自残', max: 1000},
    ],
    center: ['50%', '65%'],
    name:{
      textStyle:{
        color:'#fff'
      }
    },
    axisLine: {
      lineStyle: {
        color: '#40e2ff',
        width: 1,
        type: 'solid'
      },
    },
    splitLine: {
      lineStyle: {
        color: '#40e2ff',
        width: 1
      }
    },
    splitNumber : 5,
    nameGap : 10,
    radius: 140,
  },
  series: [{
    // name: '预算 vs 开销（Budget vs spending）',
    type: 'radar',
    lineStyle: {
      normal: {
        color:'#dcdf37'
      }
    },
    areaStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0.2,
          color: 'rgba(64, 41, 150, .7)'
        }, {
          offset: 1,
          color: 'rgba(125, 54, 121, 0.7)'
        }], false),
      }
    },
    itemStyle: {
      normal: {
        color:'#dcdf37'
      }
    },
    data : [
      {
        value : [500, 860, 380],
        name : '风险倾向'
      },
    ]
  }]
};

crimal_risk_tend.setOption(option);
/*================== 风险倾向 ==========================*/

/*================== 性格倾向 ==========================*/
var crimal_character_tend = echarts.init(document.getElementById("crimal_character_tend"));
option = {
  title: {
    // text: '性格倾向',
    textStyle :{
      color:'#fff',
    },
    left:110,
    top:20
  },
  tooltip: {},
  legend: {
    // data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
  },
  radar: {
    center: ['50%', '50%'],
    indicator: [
      { name: '聪敏', max: 1000},
      { name: '冲动', max: 1000},
      { name: '自卑', max: 1000},
      { name: '焦虑', max: 1000},
      { name: '暴力', max: 1000},
      { name: '变态', max: 1000},
      { name: '认真', max: 1000},
      { name: '从属', max: 1000}
    ],
    name:{
      textStyle:{
        color:'#fff'
      }
    },
    axisLine: {
      lineStyle: {
        color: '#40e2ff',
        width: 1,
        type: 'solid'
      },
    },
    splitLine: {
      lineStyle: {
        color: '#40e2ff',
        width: 1
      }
    },
    splitNumber : 3,
    nameGap : 10,
    radius: 100,
  },
  series: [{
    // name: '预算 vs 开销（Budget vs spending）',
    type: 'radar',
    lineStyle: {
      normal: {
        color:'#dcdf37'
      }
    },
    areaStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0.2,
          color: 'rgba(122, 144, 118, .7)'
        }, {
          offset: 1,
          color: 'rgba(136, 79, 106, 0.7)'
        }], false),
      }
    },
    itemStyle: {
      normal: {
        color:'#dcdf37'
      }
    },
    data : [
      {
        value : [65, 160, 300, 380, 520,400,900,600,720],
        name : '性格倾向'
      },
    ]
  }]
};

crimal_character_tend.setOption(option, true);
/*================== 性格倾向 ==========================*/
})
