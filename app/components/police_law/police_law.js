$(function() {

  //内容尺寸计算
  var total_height = $(".police_law").height();
  $(".police_law_son>div:first-child").css({"height": total_height + "px"});
  //内容尺寸计算



  //左边排名图
  per_0 = echarts.init(document.getElementById("ranking"));
  var data = [53, 85, 60, 45, 53,53,53,53,53,53,53,53,53];
  var xMax = 100;
  var axisColor = '#fff';
  option_ranking= {
    tooltip: {
      show: false,
      formatter: "{b} <br> {c}名"

    },

    xAxis: [{
      axisTick: {
        show: false
        // color:'#fff',
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        show: false
        //color:'#fff',
      },
      splitLine: {
        show: false
        // color:'#fff',
      }
    }],
    yAxis: [{
      type: 'category',
      data: ['监所', '监所', '监所', '监所', '监所','监所','监所','监所', '监所', '监所', '监所','监所','监所'],

      axisTick: {
        // color:'#fff',
        show: false
      },
      axisLine: {
        //  color:'#fff',
        show: false
      },
      axisLabel: {
        textStyle: {
          color: '#fff'
        }
      }

    }],
    series: [{
      name: ' ',
      type: 'bar',
      barWidth: 16,
      silent: true,
      itemStyle: {
        normal: {
          color: '#0B2A54',
          barBorderRadius: [0, 5, 5, 0]

        }

      },
      barGap: '-100%',
      barCategoryGap: '50%',
      data: data.map(function(d) {
        return xMax
      }),
    }, {
      name: ' ',
      type: 'bar',
      barWidth: 16,
      label: {
        normal: {
          show: false,
          position: 'top',
          formatter: '{c}%'
        }
      },
      data: [{
        value: 30,
        itemStyle: {
          normal: {
            barBorderRadius: [0, 10, 10, 0],
            color: {
              type: 'bar',
              colorStops: [{
                offset: 0,
                color: '#0985C6' // 0% 处的颜色
              }, {
                offset: 1,
                color: '#0985C6' // 100% 处的颜色
              }],
              globalCoord: false // 缺省为 false

            }
          }
        }
      },
        {
        value: 20,
        itemStyle: {
          // normal:{color:'#b250ff',barBorderRadius:[0,10,10,0],}
          normal: {
            barBorderRadius: [0, 10, 10, 0],
            color: {
              type: 'bar',
              colorStops: [{
                offset: 0,
                color: '#0985C6' // 0% 处的颜色
              }, {
                offset: 1,
                color: '#0985C6' // 100% 处的颜色
              }],
              globalCoord: false // 缺省为 false

            }
          }
        }
      },
        {
        value: 50,
        itemStyle: {
          // normal:{color:'#4f9aff',barBorderRadius:[0,10,10,0],}
          normal: {
            barBorderRadius: [0, 10, 10, 0],
            color: {
              type: 'bar',
              colorStops: [{
                offset: 1,
                color: '#0985C6' // 0% 处的颜色
              }, {
                offset: 1,
                color: '#0985C6' // 100% 处的颜色
              }],
              globalCoord: false // 缺省为 false

            }
          }
        }
      },
        {
        value: 40,
        itemStyle: {
          // normal:{color:'#4bf3ff',barBorderRadius:[0,10,10,0],  },
          normal: {
            barBorderRadius: [0, 10, 10, 0],
            color: {
              type: 'bar',
              colorStops: [{
                offset: 1,
                color: '#0985C6' // 0% 处的颜色
              }, {
                offset: 1,
                color: '#0985C6' // 100% 处的颜色
              }],
              globalCoord: false // 缺省为 false

            }
          }

        }
      },
        {

        value: 60,
        itemStyle: {
          // normal:{color:'#ffa800',barBorderRadius:[0,10,10,0],}
          normal: {
            barBorderRadius: [0, 10, 10, 0],
            color: {
              type: 'bar',
              colorStops: [{
                offset: 1,
                color: '#0985C6' // 0% 处的颜色
              }, {
                offset: 1,
                color: '#0985C6' // 100% 处的颜色
              }],
              globalCoord: false // 缺省为 false

            }
          }
        }
      },
        {
        value: 26,
        itemStyle: {
          // normal:{color:'#ffa800',barBorderRadius:[0,10,10,0],}
          normal: {
            barBorderRadius: [0, 10, 10, 0],
            color: {
              type: 'bar',
              colorStops: [{
                offset: 1,
                color: '#0985C6' // 0% 处的颜色
              }, {
                offset: 1,
                color: '#0985C6' // 100% 处的颜色
              }],
              globalCoord: false // 缺省为 false
            }
          }
        }
      },
        {
        value: 70,
        itemStyle: {
          // normal:{color:'#ffa800',barBorderRadius:[0,10,10,0],}
          normal: {
            barBorderRadius: [0, 10, 10, 0],
            color: {
              type: 'bar',
              colorStops: [{
                offset: 1,
                color: '#85C36A' // 0% 处的颜色
              }, {
                offset: 1,
                color: '#97B934' // 100% 处的颜色
              }],
              globalCoord: false // 缺省为 false
            }
          }
        }
      },
        {
          value: 37,
          itemStyle: {
            // normal:{color:'#ffa800',barBorderRadius:[0,10,10,0],}
            normal: {
              barBorderRadius: [0, 10, 10, 0],
              color: {
                type: 'bar',
                colorStops: [{
                  offset: 1,
                  color: '#0985C6' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: '#0985C6' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
              }
            }
          }
        },
        {
          value: 80,
          itemStyle: {
            // normal:{color:'#ffa800',barBorderRadius:[0,10,10,0],}
            normal: {
              barBorderRadius: [0, 10, 10, 0],
              color: {
                type: 'bar',
                colorStops: [{
                  offset: 1,
                  color: '#85C36A' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: '#97B934' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
              }
            }
          }
        },
        {
          value: 27,
          itemStyle: {
            // normal:{color:'#ffa800',barBorderRadius:[0,10,10,0],}
            normal: {
              barBorderRadius: [0, 10, 10, 0],
              color: {
                type: 'bar',
                colorStops: [{
                  offset: 1,
                  color: '#0985C6' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: '#0985C6' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
              }
            }
          }
        },
        {
          value: 39,
          itemStyle: {
            // normal:{color:'#ffa800',barBorderRadius:[0,10,10,0],}
            normal: {
              barBorderRadius: [0, 10, 10, 0],
              color: {
                type: 'bar',
                colorStops: [{
                  offset: 1,
                  color: '#0985C6' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: '#0985C6' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
              }
            }
          }
        },
        {
          value: 19,
          itemStyle: {
            // normal:{color:'#ffa800',barBorderRadius:[0,10,10,0],}
            normal: {
              barBorderRadius: [0, 10, 10, 0],
              color: {
                type: 'bar',
                colorStops: [{
                  offset: 1,
                  color: '#0985C6' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: '#0985C6' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
              }
            }
          }
        },
        {
          value: 50,
          itemStyle: {
            // normal:{color:'#ffa800',barBorderRadius:[0,10,10,0],}
            normal: {
              barBorderRadius: [0, 10, 10, 0],
              color: {
                type: 'bar',
                colorStops: [{
                  offset: 1,
                  color: '#0985C6' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: '#0985C6' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
              }
            }
          }
        },
      ]
    }]
  };
  per_0.setOption(option_ranking);
  //左边排名图



  //右上雷达图
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
        {value: [3000,9000,11300,21092],
         name: ''
        }
      ]
    }]
  };
  per_1.setOption(option_right);
  //右上雷达图

  //右下折线图
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
      left: '0%',
      right: '5%',
      bottom: '15%',
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
  //右下折线图

  //中间环形图
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
            "color": "#3BECEF",
            "borderColor": "#3BECEF",
            "borderWidth":7
          },
          "emphasis": {
            "label": {
              "textStyle": {
                "fontSize": 15,
                "fontWeight": "bold"
              }
            },
            "color": "#3BECEF",
            "borderColor": "#3BECEF",
            "borderWidth":7
          }
        },
        "data": [
          {
            "value": 57.7,
            "name": ""
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
                "color": "#3BECEF",
                "borderColor": "#3BECEF",
                "borderWidth": 0
              },
              "emphasis": {
                "color": "#3BECEF",
                "borderColor": "#3BECEF",
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
  //中间环形图



  $(".each").click(function(){
    $(this).addClass("actives");
    $(this).siblings().removeClass("actives");
  });

  $(".each").mouseover(function(){
    $(this).css("cursor","pointer");
  })



  $("#each_1").parent().click(function(){

    per_1.setOption(
      {
        radar: {
          center: ["50%", "50%"],
          indicator: [
            {name: '巡视记录', max: 6500},
            {name: '查处违规情况', max: 16000},
            {name: '重大风险人员动态记录', max: 30000},
            {name: '就寝前点名', max: 38000},
            {name: '巡控交接班', max: 38000}
          ]
        }
      }
    )

    $(".center_font_1").css("zIndex","300");
  })

  $("#each_2").parent().click(function(){

    per_1.setOption(
      {
        radar: {
          center: ["50%", "50%"],
          indicator: [
            {name: '谈话情况分析', max: 6500},
            {name: '两下监室情况分析', max: 16000},
            {name: '过渡期管理', max: 30000},
            {name: '日常调监', max: 38000},
            {name: '三固定排表', max: 38000}
          ]
        }
      }
    )
    $(".center_font_2").css("zIndex","300");
  })

  $("#each_3").parent().click(function(){

    per_1.setOption(
      {
        radar: {
          center: ["50%", "50%"],
          indicator: [
            {name: '设施设备的修复', max: 6500},
            {name: '每周食谱', max: 16000},
            {name: '日清月结', max: 30000},
          ]
        }
      }
    )
    $(".center_font_3").css("zIndex","300");
  })

  $("#each_4").parent().click(function(){

    per_1.setOption(
      {
        radar: {
          center: ["50%", "50%"],
          indicator: [
            {name: '重大风险人员谈话', max: 6500},
            {name: '其他所领导谈话', max: 16000},
            {name: '风险评估会议', max: 30000},
            {name: '应急演练', max: 30000},
            {name: '集体教育', max: 30000},
            {name: '所务会', max: 30000},
            {name: '安全大检查', max: 30000},
            {name: '所长接待日', max: 30000},
          ]
        }
      }
    )

    $(".center_font_4").css("zIndex","300");
  })

  $("#each_5").parent().click(function(){

    per_1.setOption(
      {
        radar: {
          center: ["50%", "50%"],
          indicator: [
            {name: '巡诊', max: 6500},
            {name: '临时固定人员巡查', max: 16000},
            {name: '单独关押', max: 16000},
            {name: '消毒', max: 6500},
          ]
        }
      }
    )

    $(".center_font_5").css("zIndex","300");
  })


  $("#each_6").parent().click(function(){

    per_1.setOption(
      {
        radar: {
          center: ["50%", "50%"],
          indicator: [
            {name: '出所谈话是否进行', max: 6500},
            {name: '提讯会见室巡查', max: 16000},
            {name: '其他', max: 30000},
          ]
        }
      }
    )

    $(".center_font_6").css("zIndex","300");
  })


  //echarts自适应
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
  //echarts自适应

})


  //页面刷新
  $(window).resize(function(){
    var total_height = $(".police_law").height();
    $(".police_law_son>div:first-child").css({"height": total_height + "px"});
  });
  //页面刷新
