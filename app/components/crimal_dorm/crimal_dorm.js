$(function () {


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
    left: '16%',
    right: '2%',
    bottom: '3%',
    top:'13%',
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
        position: ['70%','-220%'],
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
})
