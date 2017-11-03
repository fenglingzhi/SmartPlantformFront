$(function () {

  //内容尺寸计算------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  var heis = $('#content').css({ 'height': $(window).height() - 90 + "px" });
  $("#ss").css({ 'height': heis.height() - 50 + "px" });
  //内容尺寸计算------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


  //首页地图的json-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  var xj_map = echarts.init(document.getElementById("xj_map"));
  var geoCoordMap = {
    "秦淮区": [118.80476,32.018013],
    "浦口区": [118.509003,32.058903],
    "建邺区": [118.710793,32.003731],
    "下关区": [118.770182,32.066601],
    "栖霞区": [118.857000,32.137388],
    "玄武区": [118.797757,32.048498],
    "雨花台区": [118.639051,31.93126],
    "高淳区":[118.89222,31.327586],
    "溧水区": [118.99999,31.572210],
    "六合区": [118.822132,32.323584],
    "江宁区": [118.840015,31.862612]
  };
  var data = [
    {
      name: "秦淮区",
      value: 22,
    }, {
      name: "浦口区",
      value: 400
    }, {
      name: "建邺区",
      value: 100
    }, {
      name: "下关区",
      value: 0
    }, {
      name: "栖霞区",
      value: 260
    }, {
      name: "玄武区",
      value: 180
    },{
      name: "雨花台区",
      value: 100
    },{
      name: "高淳区",
      value: 100
    },{
      name: "溧水区",
      value: 50
    },{
      name: "六合区",
      value: 400
    },{
      name: "江宁区",
      value: 200
    }
  ];
  var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
      var geoCoord = geoCoordMap[data[i].name];
      if (geoCoord) {
        res.push({
          name: data[i].name,
          value: geoCoord.concat(data[i].value)
        });
      }
    }
    return res;
  };
  option = {
    backgroundColor: 'transparent',
    grid: {
      left: '5%',
      right: '0%',
      top: '0%',
      bottom: '0%',
      containLabel: true
    },
    tooltip : {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      y: 'bottom',
      x:'right',
      data:['关押数量'],
      textStyle: {
        color: '#fff'
      }
    },
    geo: {
      map: 'nanjing',
      label: {
        emphasis: {
          show: false
        }
      },
      layoutCenter : ['10%','43%'],
      layoutSize: 800,
      center: [118.19476,31.909113],
      roam: false,
      itemStyle: {
        normal: {
          areaColor: 'rgba(255,255,255,.1)',
          borderColor: '#166594'
        },
        emphasis: {
          areaColor: 'rgba(107,187,245,.8)'
        }
      }
    },
    series : [
      {
        name: '',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: convertData(data),
        symbolSize: function (val) {
          return val[2] / 10;
        },
        label: {
          normal: {
            formatter: '{b}',
            show: false
          },
          emphasis: {
            show: false
          }
        },
        itemStyle: {
          normal: {
            color: '#fff'
          }
        }
      },
      {
        name: 'Top 5',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: convertData(data.sort(function (a, b) {
          return b.value - a.value;
        }).slice(0, 13)),
        symbolSize: function (val) {
          return val[2] / 10;
        },
        showEffectOn: 'render',
        rippleEffect: {
          brushType: 'stroke'
        },
        hoverAnimation: false,
        label: {
          normal: {
            formatter: '{b}',
            position: 'right',
            show: true
          }
        },
        itemStyle: {
          normal: {
            color: '#4AD1FC',
            shadowBlur: 10,
            shadowColor: '#333'
          }
        },
        textStyle: {
          fontSize: 11,
          color: 'red'
        }
      }
    ]
  }
  xj_map.setOption(option);
  //首页地图的json------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


 //全市风险Echarts仪表盘------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  zero = echarts.init(document.getElementById("qfxdws"));
  option_zero = {
    tooltip: {
      formatter: "{a} <br/>{b} : {c}%"
    },
    series: [
      {
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
      data: [{ value:11 }],
      detail: {
        color: '#7BC201',
        fontWeight: 'bold',
        fontSize: 25,
        formatter: '30分\n\n良好',
        offsetCenter: [0, "105%"]
      }
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
  //全市风险Echarts仪表盘------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //全市风险详情图-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  var colors = ['rgba(251,210,73,0.7)', 'rgba(251,210,73,0.7)', 'rgba(124,213,253,0.7)', 'rgba(124,213,253,0.7)', 'rgba(124,213,253,0.7)', 'rgba(124,213,253,0.7)', 'rgba(124,213,253,0.7)', 'rgba(124,213,253,0.7)', 'rgba(181,236,69,0.7)', 'rgba(181,236,69,0.7)', 'rgba(136,243,227,0.7)', 'rgba(136,243,227,0.7)', 'rgba(136,243,227,0.7)', 'rgba(136,243,227,0.7)'];
  var aCategorys = ['', '监所1', '监所2', '监所3', '监所4', '监所5', '监所6', '监所7', '监所8', '监所9',
    '监所10',
  ];;
  var topdata =[0, 36, 56, 77, 95, 38, 24, 59, 34, 80,]; //峰值data
  var aSeries = [{
    name: '基础风险',
    type: 'line',
    symbol: 'circle',
    symbolSize: 7,
    label: {
      normal: {
        textStyle: {
          fontSize:16
        }
      }
    },
    itemStyle: {
      normal: {
        color: '#01F905',
        borderColor: "#ffffff",
        borderWidth: 1
      }
    },
    lineStyle: {
      normal: {
        opacity: 0
      }
    },

    data: ['-', 66, 76, 87, 95, 51, 43, 10, 75, 90, '-']
  },
    {
      name: '在押人员',
      type: 'line',
      symbol: 'circle',
      symbolSize: 7,
      lineStyle: {
        normal: {
          opacity: 0
        }
      },
      itemStyle: {
        normal: {
          color: '#F7ED0E',
          borderColor: "#ffffff",
          borderWidth: 1
        }
      },

      data:  ['-', 46, 56, 67, 75, 31, 23, 40, 55, 70, '-']
    },
    {
      name: '外来人员',
      type: 'line',
      symbol: 'circle',
      symbolSize: 7,
      lineStyle: {
        normal: {
          opacity: 0
        }
      },
      itemStyle: {
        normal: {
          color: '#0041E0',
          borderColor: "#ffffff",
          borderWidth: 1
        }
      },

      data:  ['-',  16, 26, 37, 45, 13, 82, 90, 31, 20, '-']
    },
    {
      name: '民警执法',
      type: 'line',
      symbol: 'circle',
      symbolSize: 7,
      lineStyle: {
        normal: {
          opacity: 0
        }
      },
      itemStyle: {
        normal: {
          color: '#1D2586',
          borderColor: "#ffffff",
          borderWidth: 1
        }
      },

      data:  ['-', 86, 96, 71, 55, 31,83, 60, 15, 0, '-']
    },
    {
      name: '安防设施',
      type: 'line',
      symbol: 'circle',
      symbolSize:7,
      lineStyle: {
        normal: {
          opacity: 0
        }
      },
      itemStyle: {
        normal: {
          color: '#8A078B',
          borderColor: "#ffffff",
          borderWidth: 1
        }
      },

      data:  ['-', 16, 26, 67, 15, 31, 23, 20, 25, 30, '-']
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
  var option = null;
  option = {
    color: colors,
    tooltip: {
      trigger: 'axis',
      formatter: function(params) {
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
      itemHeight: 30,
      itemGap: 10,
      data: ['基础风险', '在押人员', '外来人员', '民警执法', '安防设施'],
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
      top: '10%',
      containLabel: true
    },
    yAxis: [{
      axisLabel: {
        margin: 10,
        textStyle: {
          fontSize: 10,
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
          color: 'grey'
        }
      }
    }],
    series: aSeries
  };
  myChart.setOption(option);
  //全市风险详情图-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //风险指数雷达图-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  second = echarts.init(document.getElementById("fxzhishu"));
  option_sec = {
    radar: [{
      indicator: [
        { text: '基础\n风险' },
        { text: '在押\n人员' },
        { text: '外来\n人员' },
        { text: '技术\n安防' },
        { text: '民警\n执法' }
      ],
      center: ['50%', '60%'],
      radius: 100,
      startAngle: 90,
      splitNumber: 4,
      shape: 'circle',
      name: {
        textStyle: {
          color: 'white',
          fontSize: "16"
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
        value: [17.2, 7.9, 1.6, 0.8, 0.8],
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
          value: [5.4, 2.6, 1.2, 1.0, 0.5],
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
  //风险指数雷达图-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //风险指数折线图-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  fourth = echarts.init(document.getElementById("fxfenxis"));
  option_fou= {
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
      left: '0%',
      right: '5%',
      bottom: '15%',
      top: '10%',
      containLabel:true
    },
    xAxis: {
      //      show:false,
      type: 'category',
      data: ['2017-01','2017-02','2017-03','2017-04','2017-05','2017-06','2017-07','2017-08','2017-09','2017-10','2017-11'],
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
    "dataZoom": [{
      "show": true,
      "height": 20,
      "xAxisIndex": [
        0
      ],
      bottom: 10,
      "start": 0,
      "end": 50,
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
        color:"transparent"
      },
      borderColor:""


    }, {
      "type": "inside",
      "show": true,
      "height": 15,
      "start": 1,
      "end": 35
    }],
    series: [{
      name: '风险指数',
      type: 'line',
      smooth: true,
      showSymbol: false,
      symbol: 'circle',
      symbolSize: 2,
      data:[90,83,52,48,51,87,90,83,52,48,51,87],
      markLine: {
        lineStyle: {
          normal: {
            color: '#ddd',
            type: 'dotted'
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
  //风险指数折线图-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


  //重置容器高宽,echarts自适应-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  chart.resize();
  zero.resize();
  myChart.resize();
  second.resize();
  fourth.resize();
  //重置容器高宽,echarts自适应-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
})

  //页面刷新-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  window.onresize = function()
  {
    //页面内容尺寸计算-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    var heis = $('#content').css({ 'height': $(window).height() - 90 + "px" });
    $("#ss").css({ 'height': heis.height() - 50 + "px" });
    //页面内容尺寸计算----------------

    //重置容器高宽,echarts自适应-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    zero.resize();
    myChart.resize();
    second.resize();
    fourth.resize();
    //重置容器高宽,echarts自适应-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  }
  //页面刷新-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------




