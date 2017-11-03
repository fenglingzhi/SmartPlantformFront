$(function() {
  /*右边折线图*/
  right_t = echarts.init(document.getElementById("right-t"));
  option_rt = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    grid: {
      top: '25%',
      left: '4%',
      right: '6%',
      bottom: '5%',
      containLabel: true
    },
    xAxis: [
      {
        axisTick: {
          show: false
        },
        type: 'category',
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.8)'
          }
        },
        boundaryGap: false,
        data: ['一月', '二月', '三月', '四月', '五月', '六月',
          '七月', '八月', '九月', '十月', '十一月', '十二月']
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLine: {
          show: false,
          lineStyle: {
            color: 'rgba(255,255,255,.8)'
          }
        }
      }
    ],
    series: [
      {
        name: '重点犯数量3',
        type: 'line',
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
        data: [250, 232, 201, 254, 240, 230, 210, 250, 232, 201, 254, 190]
      },
    ]
  }
  right_t.setOption(option_rt);
  /*中间雷达图*/
  mid_ts = echarts.init(document.getElementById("mid-ts"));
  option_ts = {
    title: {
      text: ''
    },
    tooltip: {},
    legend: {
      data: ['厂家A']
    },
    toolbox: {
      show: false,
      feature: {
        mark: {show: true},
        dataZoom: {show: true},
        dataView: {show: true, readOnly: false},
        restore: {show: true},
        saveAsImage: {show: true}
      }
    },

    splitArea: {
      areaStyle: {
        color: 'red'
      }
    },
    radar: {
      center: ["50%", "50%"],
      radius: 85,
      indicator: [
        {name: '巡诊', max: 6500},
        {name: '临时固定\n人员巡查', max: 16000},
        {name: '单独关押', max: 30000},
        {name: '消毒', max: 38000}
      ]
    },
    series: [{
      name: '预算 vs 开销（Budget vs spending）',
      type: 'radar',
      areaStyle: {
        normal: {
          color: "yellow"
        }
      },
      data: [
        {
          value: [1300, 10000, 28000, 35000, 50000, 19000],
          name: ''
        }
      ]
    }]
  };
  mid_ts.setOption(option_ts);
/*左边岗位点击事件*/
$(".each").click(function(){
  $(this).addClass("actives").siblings().removeClass("actives");
})




window.onresize=function(){
  right_t.resize();
  mid_ts.resize();
}
})
