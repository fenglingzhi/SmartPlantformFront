$(function() {
  var total_height = $(".police_law").height();

  $(".police_law_son>div:first-child").css({"height": total_height + "px"});

  per_1 = echarts.init(document.getElementById("right"));
  option_right = {
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
      indicator: [
        {name: '巡诊', max: 6500},
        {name: '临时固定人员巡查', max: 16000},
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
  per_1.setOption(option_right);


  right_down = echarts.init(document.getElementById("right_down"));
  option_rt_one = {
    title: {
      text: '',
      textStyle: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 14,
        textAlign: 'center'
      },
      top: '10%',
      left: '5%'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      // data:['邮件营销']
    },
    grid: {
      left: '1%',
      right: '5%',
      bottom: '8%',
      top: '10%',
      containLabel: true
    },
    toolbox: {
      feature: {
        // saveAsImage: {}
      }
    },
    xAxis: {
      axisTick: {
        show: false
      },
      boundaryGap: false,
      data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      axisLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.8)'
        }
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        show: true
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: 'rgba(255,255,255,.8)'
        }
      }
    },
    series: [
      {
        name: '重点犯数量',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        stack: '总量',
        data: [120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210],
        itemStyle: {
          normal: {
            color: '#fff'
          }
        },
        lineStyle: {
          normal: {
            color: '#E5AA1F',
            type: 'solid',
            width: 6
          }
        }
      },
    ]
  }
  right_down.setOption(option_rt_one)

  right_center=echarts.init(document.getElementById("each_1"));
  option_center= {
    "series": [
      {
        "center": [
          "50%",
          "50%"
        ],
        "radius": [
          "70%",
          "71%"
        ],
        "clockWise": false,
        "hoverAnimation": false,
        "type": "pie",
        "itemStyle": {
          "normal": {
            "label": {
              "show": true,
              "textStyle": {
                "fontSize": 15,
                "fontWeight": "bold"
              },
              "position": "center"
            },
            "labelLine": {
              "show": false
            },
            "color": "#5886f0",
            "borderColor": "#5886f0",
            "borderWidth":10
          },
          "emphasis": {
            "label": {
              "textStyle": {
                "fontSize": 15,
                "fontWeight": "bold"
              }
            },
            "color": "#5886f0",
            "borderColor": "#5886f0",
            "borderWidth":10
          }
        },
        "data": [
          {
            "value": 53.7,
            "name": "40 分"
          },
          {
            "name": " ",
            "value": 47.3,
            "itemStyle": {
              "normal": {
                "label": {
                  "show": false
                },
                "labelLine": {
                  "show": false
                },
                "color": "#5886f0",
                "borderColor": "#5886f0",
                "borderWidth": 0
              },
              "emphasis": {
                "color": "#5886f0",
                "borderColor": "#5886f0",
                "borderWidth": 0
              }
            }
          }
        ]
      },
    ]
  };
  right_center.setOption(option_center);

  right_center2=echarts.init(document.getElementById("each_2"));
  right_center2.setOption(option_center);
  right_center3=echarts.init(document.getElementById("each_3"));
  right_center3.setOption(option_center);
  right_center4=echarts.init(document.getElementById("each_4"));
  right_center4.setOption(option_center);
  right_center5=echarts.init(document.getElementById("each_5"));
  right_center5.setOption(option_center);
  right_center6=echarts.init(document.getElementById("each_6"));
  right_center6.setOption(option_center);

  window.onresize = function(){
    per_1.resize();
    right_down.resize();
    right_center.resize();
    right_center2.resize();
    right_center3.resize();
    right_center4.resize();
    right_center5.resize();
    right_center6.resize();
  }

})



$(window).resize(function(){
  var total_height = $(".police_law").height();
  $(".police_law_son>div:first-child").css({"height": total_height + "px"});
})

