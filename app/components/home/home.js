$(function () {
//请求前缀的Url
let preReqUrl = "http://10.58.1.134:8080/";

let token;

//登录请求,向本地存放token
$.ajax({
  type: "post",
  url: preReqUrl + "sysmng/userlogin/authlogin",
  contentType: "application/json;charset=utf-8",
  async: false,
  data: JSON.stringify({
    "username": "yj",
    "password": "123"
  }),
  success: function(resp) {
    token = resp.data.token;
    //将token存放在本地
    localStorage.setItem("token", token);
  },
  error: function() {
    alert("请求异常");
  }
})

//加载南京市和监室的气温信息
$.ajax({
  type: "post",
  url: preReqUrl + "home/homepage/getcitydailytempreture?token=" + token,
  contentType: "application/json;charset=utf-8",
  async: false,
  data: JSON.stringify({
    "depart_code": "320100135200"
  }),
  success: function(resp) {
    console.log(resp);
    let code = resp.resultCode;
    let data = resp.data;
    if(code == 1) {
      $(".avg_wendu").html(data.avg_tempareture);
      $(".high_prison_count").html(data.high_prison_cell_count);
      $(".wendu_tem").html(data.today_tempareture);
    } else {
      alert(resp.resultMsg);
    }
  },
  error: function() {
    alert("请求异常");
  }
})

//首页地图的json
$.get('app/data/nanjing.json', function(nanjingJson) {
  //echarts.registerMap('省份汉语名称', 省份拼音+Json);
  echarts.registerMap('nanjing', nanjingJson);
  var chart = echarts.init(document.getElementById('main'));
  chart.setOption({
    series: [{
      type: 'map',
      //map的值也是，省份汉语名称
      map: 'nanjing',
      right: '15%',
      top: 'bottom',
      width: '55%',
      showLegendSymbol: true,
      label: {
        normal: {
          show: true, //显示省份标签
          textStyle: {
            color: "#fff",
            fontSize: 9 //字体大小
          } //省份标签字体颜色
        }
      },
      itemStyle: {
        normal: {
          borderType: 'solid',
          borderWidth: 2, //区域边框宽度
          borderColor: '#0E81BE', //区域边框颜色
          areaColor: "#204973", //区域颜色
          opacity: 0.8
        }
      }
    }]
  });
  window.onresize = function() {
    chart.resize();
  }
});

//加载全市风险值和每个所风险的象形柱状图
$.ajax({
  type: "post",
  url: preReqUrl + "/home/homepage/getcityriskandprisonrisk?token=" + token,
  async: false,
  contentType: "application/json;charset=utf-8",
  data: JSON.stringify({}),
  success: function(resp) {
    let code = resp.resultCode;
    let data = resp.data;
    if(code == 1) {

      //全市风险分
      let all_city_risk = data.all_city_risk;
      let risk_desc;
      if(all_city_risk >= 90 && all_city_risk <= 100) {
        risk_desc = "优 秀";
      } else if(all_city_risk >= 80 && all_city_risk < 90) {
        risk_desc = "良 好";
      } else if(all_city_risk >= 70 && all_city_risk < 80) {
        risk_desc = "中 等";
      } else if(all_city_risk >= 60 && all_city_risk < 70) {
        risk_desc = "及 格";
      } else if(all_city_risk < 60) {
        risk_desc = "不 及 格";
      }

      zero = echarts.init(document.getElementById("qfxdws"));
      option_zero = {
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%"
        },
        series: [{
          z: 1111,
          axisLine: {
            show: false,
            lineStyle: {
              width: '10',
              color: [
                [0.2, '#92DFD5'],
                [0.4, '#77CB42'],
                [0.6, '#EEC43E'],
                [0.8, '#EB8B27'],
                [1, '#EC3633']
              ]
            }
          },
          axisTick: {
            show: true,
            splitNumber: 1
          },
          splitLine: {
            length: 10
          },
          name: '业务指标',
          type: 'gauge',
          detail: {
            color: '#7BC201',
            fontWeight: 'bold',
            fontSize: 20,
            formatter: '{value}分\n' + risk_desc,
            offsetCenter: [0, "85%"]
          },
          data: [{ value: all_city_risk }]
        },
          {
            type: 'gauge', // 默认全局居中
            radius: '40%',
            backgroundColor: 'red',
            startAngle: 359.99999,
            endAngle: 0,
            axisLine: { // 坐标轴线
              lineStyle: { // 属性lineStyle控制线条样式
                color: [
                  [2, 'skyblue']
                ],
                width: 3
              }
            },
            axisLabel: { // 坐标轴小标记
              textStyle: { // 属性lineStyle控制线条样式
                fontWeight: '',
                color: 'rgba(30,144,255,0)',
                shadowColor: 'red', //默认透明
                shadowBlur: 10
              }
            },
            axisTick: { // 坐标轴小标记
              length: 0 // 属性length控制线长
            },
            splitLine: { // 分隔线
              length: 0 // 属性length控制线长
            },
            pointer: {
              width: 0
            },
            detail: {
              show: false
            }
          },
          {
            type: 'gauge', // 默认全局居中
            radius: '39%',
            backgroundColor: 'red',
            startAngle: 359.99999,
            endAngle: 0,
            axisLine: { // 坐标轴线
              lineStyle: { // 属性lineStyle控制线条样式
                color: [
                  [1, '#186DB1']
                ],
                width: '100%',
                shadowColor: '#31ada9', //默认透明
                opacity: 0.5
              }
            },
            axisLabel: { // 坐标轴小标记
              textStyle: { // 属性lineStyle控制线条样式
                fontWeight: '',
                color: 'rgba(30,144,255,0)',
                shadowColor: 'red', //默认透明
                shadowBlur: 10
              }
            },
            axisTick: { // 坐标轴小标记
              length: 0 // 属性length控制线长
            },
            splitLine: { // 分隔线
              length: 0 // 属性length控制线长
            },
            pointer: {
              width: 0
            },
            detail: {
              show: false
            }
          },
        ]
      };
      zero.setOption(option_zero);

      //每个所风险的象形柱状图

      //监所简称集合
      let prison_list = new Array();
      prison_list[0] = '';
      for(let i = 0; i < data.bar_xaxis_data.length; i++) {
        prison_list[i + 1] = data.bar_xaxis_data[i].substr(0, 1) + "\n" + data.bar_xaxis_data[i].substr(1, 2);
      }
      prison_list.push('');

      //基础风险
      let base_risk_data = new Array();
      base_risk_data[0] = '-';
      for(let i = 0; i < data.bar_yaxis_data.length; i++) {
        let data_risk_data = data.bar_yaxis_data[i];
        base_risk_data[i + 1] = data_risk_data[0];
      }
      base_risk_data.push('-');

      //在押人员
      let prison_risk_data = new Array();
      prison_risk_data[0] = '-';
      for(let i = 0; i < data.bar_yaxis_data.length; i++) {
        let data_prison_risk_data = data.bar_yaxis_data[i];
        prison_risk_data[i + 1] = data_prison_risk_data[1];
      }
      prison_risk_data.push('-');

      //辅警外来
      let police_out_data = new Array();
      police_out_data[0] = '-';
      for(let i = 0; i < data.bar_yaxis_data.length; i++) {
        let data_police_out_data = data.bar_yaxis_data[i];
        police_out_data[i + 1] = data_police_out_data[2];
      }
      police_out_data.push('-');

      //民警执法
      let police_work_data = new Array();
      police_work_data[0] = '-';
      for(let i = 0; i < data.bar_yaxis_data.length; i++) {
        let data_police_work_data = data.bar_yaxis_data[i];
        police_work_data[i + 1] = data_police_work_data[3];
      }
      police_work_data.push('-');

      //安防科技
      let device_risk_data = new Array();
      device_risk_data[0] = '-';
      for(let i = 0; i < data.bar_yaxis_data.length; i++) {
        let data_device_risk_data = data.bar_yaxis_data[i];
        device_risk_data[i + 1] = data_device_risk_data[4];
      }
      device_risk_data.push('-');

      //峰值data
      let all_top_risk_data = new Array();
      all_top_risk_data.push(0);
      for(let i = 0; i < data.bar_yaxis_data.length; i++) {
        let all_risk_data = data.bar_yaxis_data[i];
        let cur_max = findMax(all_risk_data);
        all_top_risk_data.push(cur_max);
      }
      var colors = ['rgba(251,210,73,0.7)', 'rgba(251,210,73,0.7)', 'rgba(124,213,253,0.7)', 'rgba(124,213,253,0.7)', 'rgba(124,213,253,0.7)', 'rgba(124,213,253,0.7)', 'rgba(124,213,253,0.7)', 'rgba(124,213,253,0.7)', 'rgba(181,236,69,0.7)', 'rgba(181,236,69,0.7)', 'rgba(136,243,227,0.7)', 'rgba(136,243,227,0.7)', 'rgba(136,243,227,0.7)', 'rgba(136,243,227,0.7)'];
      var aCategorys = prison_list;
      var topdata = all_top_risk_data; //峰值data
      var aSeries = [{
        name: '基础风险',
        type: 'line',
        symbol: 'circle',
        symbolSize: 12,
        itemStyle: {
          normal: {
            color: '#F6A623',
            borderColor: "#ffffff",
            borderWidth: 2
          }
        },
        lineStyle: {
          normal: {
            opacity: 0
          }
        },

        data: base_risk_data
      },
        {
          name: '在押人员',
          type: 'line',
          symbol: 'circle',
          symbolSize: 12,
          lineStyle: {
            normal: {
              opacity: 0
            }
          },
          itemStyle: {
            normal: {
              color: '#A5A7AD',
              borderColor: "#ffffff",
              borderWidth: 2
            }
          },

          data: prison_risk_data
        },
        {
          name: '辅警外来',
          type: 'line',
          symbol: 'circle',
          symbolSize: 12,
          lineStyle: {
            normal: {
              opacity: 0
            }
          },
          itemStyle: {
            normal: {
              color: 'blue',
              borderColor: "#ffffff",
              borderWidth: 2
            }
          },

          data: police_out_data
        },
        {
          name: '民警执法',
          type: 'line',
          symbol: 'circle',
          symbolSize: 12,
          lineStyle: {
            normal: {
              opacity: 0
            }
          },
          itemStyle: {
            normal: {
              color: 'red',
              borderColor: "#ffffff",
              borderWidth: 2
            }
          },

          data: police_work_data
        },
        {
          name: '安防科技',
          type: 'line',
          symbol: 'circle',
          symbolSize: 12,
          lineStyle: {
            normal: {
              opacity: 0
            }
          },
          itemStyle: {
            normal: {
              color: 'purple',
              borderColor: "#ffffff",
              borderWidth: 2
            }
          },

          data: device_risk_data
        }
      ];

      aCategorys.forEach(function(v, i, a) {
        var name = v;
        if(v !== '') {
          var data = [];
          for(var j = 0; j < aCategorys.length; j++) {
            data.push('-');
          }
          data[i - 1] = 0;
          data[i] = topdata[i];
          data[i + 1] = 0;
          aSeries.push({
            name: name,
            type: 'pictorialBar',
            smooth: false,
            legendHoverLink: false,
            symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            barCategoryGap: '-130%',
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            areaStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0,
                    color: colors[i - 1] // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: colors[i - 1] // 100% 处的颜色
                  }],
                  globalCoord: false // 缺省为 false
                }
              }
            },
            data: data
          });
        }
      });
      myChart = echarts.init(document.getElementById("myChart"));
      //  var option = null;
      option = {
        color: colors,
        tooltip: {
          trigger: 'axis',
          formatter: function(params) {
            console.log(params)
            var rValue = params[0].name + '<br>';
            params.forEach(function(v, i, a) {
              if(v.data !== 0 && v.data !== "-" && v.seriesType == "line") {
                rValue += '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + v.color + '"></span>' + v.seriesName + ':' + v.data + '<br>';
              }
            })
            return rValue;
          }
        },
        title: {
          text: '筛选',
          textStyle: {
            fontSize: 14,
            color: 'white'
          },
          left: 'right',
          top: '3%'
        },
        legend: {
          icon: 'circle',
          itemWidth: 14,
          itemHeight: 14,
          itemGap: 15,
          data: ['基础风险', '在押人员', '辅警外来', '民警执法', '安防科技'],
          top: '2%',
          left: '15%',
          textStyle: {
            fontSize: 14,
            color: 'white'
          }
        },
        xAxis: [{
          axisLabel: {
            margin: 10,
            textStyle: {
              fontSize: 14,
              color: "white"
            }
          },
          axisTick: {
            show: false
          },
          type: 'category',
          boundaryGap: false,
          data: aCategorys,
          splitLine: {
            show: true,
            lineStyle: {
              color: '#f7f7f7'
            }
          }
        }],
        grid: {
          left: '3%',
          right: '4%',
          bottom: '10%',
          top: '15%',
          containLabel: true
        },
        yAxis: [{
          axisLabel: {
            margin: 10,
            textStyle: {
              fontSize: 14,
              color: "white"
            }
          },
          axisTick: {
            show: false
          },
          type: 'value',
          splitLine: {
            show: true,
            lineStyle: {
              color: '#f7f7f7'
            }
          }
        }],
        series: aSeries
      };
      myChart.setOption(option);
    } else {
      alert(resp.resultMsg);
    }
  },
  error: function() {
    alert("请求异常");
  }
});

//加载风险指数雷达图和近6个月的风险折线趋势图
$.ajax({
  type: "post",
  url: preReqUrl + "home/homepage/getriskradarandmonthrisk?token=" + token,
  async: false,
  contentType: "application/json;charset=utf-8",
  success: function(resp) {
    let code = resp.resultCode;
    let data = resp.data;

    if(code == 1) {
      //雷达图

      var hei = $(".contents_two").height();
      $("#ss").css({ 'height': hei - 50 + "px" });
      second = echarts.init(document.getElementById("fxzhishu"));
      option_sec = {
        radar: [{
          indicator: [
            { text: '基础\n风险' },
            { text: '在押\n人员' },
            { text: '警辅\n外来' },
            { text: '技术\n安防' },
            { text: '民警\n执法' }
          ],
          center: ['55%', '60%'],
          radius: 50,
          startAngle: 90,
          splitNumber: 4,
          shape: 'circle',
          name: {
            textStyle: {
              color: 'white',
              fontSize: "10"
            }
          },
          splitArea: {
            areaStyle: {
              color: ['rgba(114, 172, 209, 0.2)',
                '#163B65',
                '#0F4B7F',
                '#06659D',
              ],
              shadowColor: 'rgba(0, 0, 0, 0.3)',
              shadowBlur: 10
            }
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.5)'
            }
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.5)'
            }
          }
        },

        ],
        series: [{
          name: '雷达图',
          type: 'radar',
          itemStyle: {
            emphasis: {
              // color: 各异,
              lineStyle: {
                width: 4
              }
            }
          },
          data: [{
            value: data.value_data,
            name: '图一',
            symbol: 'rect',
            symbolSize: 5,
            lineStyle: {
              normal: {
                type: 'dashed'
              }
            }
          },
            {
              value: data.value_data,
              name: '图二',
              symbolSize: 10,
              areaStyle: {
                normal: {
                  color: 'rgba(255, 255, 255, 0.5)'
                }
              }
            }
          ]
        }, ]
      }
      second.setOption(option_sec);
      //近6个月的风险折线趋势图
      let monthList = new Array();
      for (let i = 0; i < data.line_xaxis_data.length; i++) {
        let date = new Date();
        date.setTime(data.line_xaxis_data[i]);
        let formateDate = date.getFullYear()+"-"+(date.getMonth()+1);
        monthList.push(formateDate);
      }
      fourth = echarts.init(document.getElementById("fxfenxis"));
      option_fou = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            },
            lineStyle: {
              color: '#ddd'
            }
          },
          backgroundColor: '#6B6B6B',
          textStyle: {
            color: 'white'
          },
          extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
        },
        grid: {
          left: 'auto',
          right: '5%',
          bottom: 'auto',
          top: '10%',
          containLabel: true
        },
        xAxis: {
          //      show:false,
          type: 'category',
          data: monthList,
          boundaryGap: false,
          splitLine: {
            show: false,
            interval: 'auto'
          },
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#609ee9'
            }
          },
          axisLabel: {
            margin: 10,
            textStyle: {
              fontSize: 14,
              color: "white"
            }
          }
        },
        yAxis: {
          type: 'value',
          splitLine: {
            lineStyle: {
              color: ['grey']
            }
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            margin: 10,
            textStyle: {
              fontSize: 10,
              color: "white"
            }
          }
        },
        series: [{
          name: '风险指数',
          type: 'line',
          smooth: true,
          showSymbol: false,
          symbol: 'circle',
          symbolSize: 6,
          data: data.line_series_data,
          markLine: {
            lineStyle: {
              normal: {
                color: '#B64A4A',
                type: 'solid'
              }
            },
            data: [{
              yAxis: 60
            }]
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgb(32,129,269)'
              }, {
                offset: 1,
                color: 'rgba(48,100,127,0.5)'
              }], false)
            }
          },
          itemStyle: {
            normal: {
              color: '#00BEFD'
            }
          },
          lineStyle: {
            normal: {
              width: 5
            }
          }
        }]
      };
      fourth.setOption(option_fou);
    } else {
      alert(resp.resultMsg);
    }
  },
  error: function() {
    alert("请求异常");
  }
});

window.onresize = function() {
  var heis = $('#content').css({ 'height': $(window).height() - 90 + "px" });
  $("#ss").css({ 'height': heis.height() - 50 + "px" });
  //重置容器高宽
  chart.resize();
  zero.resize();
  myChart.resize();
  second.resize();
  fourth.resize();
};

//查找最大值
function findMax(array) {
  let max = array[0];
  for(let i = 0; i < array.length; i++) {
    if(array[i] > max) {
      max = array[i];
    }
  }
  return max;
}
})