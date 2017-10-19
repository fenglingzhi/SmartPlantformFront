$(function () {
  let token = localStorage.getItem("token");
  let preReqUrl = "http://10.58.1.134:8080/";


var $imgs = $('.slide_total .img-holder');
var l = $imgs.length;
var radius = 400;

//分页加载重大人员风险详情信息
  $.ajax({
    type: "post",
    url: preReqUrl + "home/homepage/getmajorriskpersondetail?token=" + token,
    contentType: "application/json;charset=utf-8",
    async: false,
    data: JSON.stringify({}),
    success: function(resp) {
      let code = resp.resultCode;
      let data = resp.data;
      if(code == 1) {
        let prisonerList = data.prisonerBaseInfos;
        let prisonerHtml = '';
        for(let i = 0; i < prisonerList.length; i++) {
          // debugger;
          let item = prisonerList[i];
          let tempHtml = '<div id="img-holder{6}"  class="img-holder">\
															<img src="app/img/text/{0}">\
															<div>\
																<p>姓名：{1}</p>\
																<p>番号：{2}</p>\
																<p>监室：{3}监室</p>\
																<p>风险等级：{4}一级</p>\
																<p>风险原因：{5}</p>\
															</div>\
														</div>';
          prisonerHtml += tempHtml
            .replace("{0}",item.photo_front)
            .replace("{1}",item.name)
            .replace("{2}",item.make_no)
            .replace("{3}",item.prison_cell_id)
            .replace("{4}",item.risk_level)
            .replace("{5}",item.risk_level)
            .replace("{6}",i+1);
        }
        // $('#Slide1').append(prisonerHtml);
      } else {
        alert(resp.resultMsg);
      }
    },
    error: function() {
      alert("请求异常");
    }
  });


TweenMax.set($('.slide_total'), {
    css: {
      transformStyle: 'preserve-3d',
      perspective: 800,
      perspectiveOrigin: '50% 50%'
    }
  });

var posArray = [];
var totalImgToView = 5;
var imgMinus = 0.6301;
var angle = 0;
$imgs.each(function(i, item) {

  angle = i * 0.63;
  //console.log('angle ',angle);
  var zPos = -Math.abs(angle * (100));

  var xPos = Math.sin(angle) * radius;
  posArray.push({ x: xPos, z: zPos, angle: angle });
  var imgAlpha = (Math.ceil(0.5 * totalImgToView) * imgMinus) * 100;
  //imgAlpha = Math.abs(zPos) < imgAlpha ? 1 : 0;
  TweenMax.to(item, 1, { x: xPos, z: zPos, ease: Expo.easeOut, autoAlpha: 0 });
});

var curImgViewIndex = 0;
var targetImgViewIndex = 0;
var curIntervalId = 0;
var scrollbarDragging = false;

function rotate() {
  var minusVal = targetImgViewIndex - curImgViewIndex > 0 ? -0.6301 : 0.6301;

  var easeObj;
  var tweenTime;
  if(Math.abs(targetImgViewIndex - curImgViewIndex) === 1) {
    easeObj = Quint.easeOut;
    tweenTime = 1;
  } else {
    easeObj = Linear.easeNone;
    tweenTime = 0.15;
  }

  $imgs.each(function(i, item) {
    var pos = posArray[i];
    pos.angle = pos.angle + minusVal; //(0.6301*0.06);
    var angleDistance = pos.angle * 100;
    var zPos = -Math.abs(angleDistance);
    var xPos = Math.sin(pos.angle) * radius;
    var imgAlpha = (Math.ceil(0.5 * totalImgToView) * imgMinus) * 100;

    imgAlpha = Math.abs(zPos) < imgAlpha ? 1 : 0;
    var rotDeg = Math.round(angleDistance) >= 0 ? -30 : 30;
    rotDeg = Math.round(angleDistance) === 0 ? 0 : rotDeg;

    TweenMax.to(item, tweenTime, { x: xPos, z: zPos, ease: easeObj, autoAlpha: imgAlpha, rotationY: rotDeg });

  });
  minusVal > 0 ? curImgViewIndex-- : curImgViewIndex++;

  if(curImgViewIndex === targetImgViewIndex) {
    clearInterval(curIntervalId);
  }

}

function showImgAt(index) {
  targetImgViewIndex = index;
  if(targetImgViewIndex === curImgViewIndex) {
    return;
  }
  clearInterval(curIntervalId);
  curIntervalId = setInterval(function() {
    rotate();
  }, 150);

  //update scrollbar
  if(!scrollbarDragging) {
    var l = $imgs.length - 1;
    if(targetImgViewIndex > l) {
      return;
    }
    var curScrollX = Math.abs(Math.round(targetImgViewIndex * (702 / l)));
    var tweenTime = Math.abs((targetImgViewIndex - curImgViewIndex) * 0.2);
    TweenMax.to($('.scroller'), tweenTime, { x: curScrollX, ease: Sine.easeOut });
  }
}

//CONTROLLER UPDATE
var $input = $('.controller input');
$input.keyup(function(e) {
  if(e.keyCode === 13) {
    showImgAt(parseInt($input.val()))
  }
});

//just to do start up animation
showImgAt(5);

//----------------------- Dragging Utility ----------------------
Draggable.create('.scroller', {
  type: 'x',
  bounds: { left: 0, top: 0, width: 802, height: 0 },
  onDrag: function() {
    var curImgIndex = Math.abs(Math.round(this.x / (802 / l)));

    targetImgViewIndex = curImgIndex;
    if(targetImgViewIndex === curImgViewIndex) {
      return;
    }
    rotate();

  },
  onDragStart: function() {
    scrollbarDragging = true;
  },
  onDragEnd: function(e) {
    scrollbarDragging = false;
  }
});

$('.scrolller-container').on('click', function(e) {
  var curImgIndex = Math.abs(Math.round(e.offsetX / (802 / l)));
  if(curImgIndex >= $imgs.length) {
    curImgIndex = $imgs.length - 1;
  }
  console.log('boom');
  showImgAt(curImgIndex);
});

$('.scrolller-container .scroller').on('click', function(e) {
  e.stopPropagation();
});

$imgs.on('click', function() {
  showImgAt($imgs.index($(this)));
});


//获取所有监所的简称
$.ajax({
  type: "post",
  url: preReqUrl + "sysmng/sysdepart/getsysdeparts?token=" + token,
  contentType: "application/json;charset=utf-8",
  data: JSON.stringify({}),
  async: false,
  success: function(resp) {
    let code = resp.resultCode;
    let data = resp.data;
    console.log(resp);
    if(code == 1) {
      $(".prison_list").empty();
      $(".prison_list").append("<li><a href=''>全市</a></li>");
      for(let i = 0; i < data.length; i++) {
        $(".prison_list").append("<li><a href=''>{0}</a></li>".replace("{0}", data[i].short_name));
      }

    } else {
      alert(resp.resultMsg);
    }
  },
  error: function() {
    alert("请求异常");
  }
});

//获取重大人员风险占比以及进6个月的风险人员的柱状和折线图混合
$.ajax({
  type: "post",
  url: preReqUrl + "home/homepage/getmajorpersonriskandcharts?token=" + token,
  contentType: "application/json;charset=utf-8",
  data: JSON.stringify({}),
  async: false,
  success: function(resp) {
    let code = resp.resultCode;
    let data = resp.data;
    console.log(data);
    if(code == 1) {
      //重大风险人员占比
      $("#major_prisoner_count").html(data.major_risk_person_count);
      per_1 = echarts.init(document.getElementById("imp_person_per1"));
      option_left = {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        title: {
          text: '重大风险人员占比',
          textStyle: {
            fontSize: 24,
            color: 'white'
          },
          left: '2%'
        },
        series: [{
          name: '重大风险人员占比',
          type: 'pie',
          selectedMode: 'single',
          radius: [0, '50%'],
          center: ['40%', '55%'],
          label: {
            normal: {
              position: 'inner'
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            { value: data.major_risk_person_count, name: '重大风险' },
            { value: data.now_prisoner_count, name: '非重大风险' },
          ]
        }, ]
      };
      per_1.setOption(option_left);
      per_3 = echarts.init(document.getElementById("imp_person_per3"));
      option_right = {
        series: [{
          name: '访问来源',
          type: 'pie',
          selectedMode: 'single',
          radius: [0, '60%'],
          center: ['15%', '55%'],
          label: {
            normal: {}
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [{
            value: data.first_major_risk_count,
            name: '\r\r\r\r\r' + data.first_major_risk_count + '人\n一级风险人员',
            label: {
              normal: {
                fontSize: 20
              }
            },
            itemStyle: {
              normal: {
                color: 'red'
              }
            }
          },
            {
              value: data.second_major_risk_count,
              name: '\r\r\r\r\r' + data.second_major_risk_count + '人\n二级风险人员',
              label: {
                normal: {
                  fontSize: 20
                }
              },
              itemStyle: {
                normal: {
                  color: 'yellow'
                }
              }
            },
            {
              value: data.third_major_risk_count,
              name: '\r\r\r\r\r' + data.third_major_risk_count + '人\n三级风险人员',
              label: {
                normal: {
                  fontSize: 20
                }
              },
              itemStyle: {
                normal: {
                  color: 'skyblue'
                }
              }
            },
            {
              value: 1485.89,
              itemStyle: {
                normal: {
                  opacity: 0
                }
              }
            },
          ]
        }]
      };
      per_3.setOption(option_right);

      //6个月的风险人员的柱状和折线图混合
      let monthList = new Array();
      for(let i = 0; i < data.mix_barline_xaxis_data.length; i++) {
        let date = new Date();
        date.setTime(data.mix_barline_xaxis_data[i]);
        let formateDate = date.getFullYear() + "-" + (date.getMonth() + 1);
        monthList.push(formateDate);
      }
      console.log(monthList);
      per_4 = echarts.init(document.getElementById("imp_person_per4"));
      option_part2 = {
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        title: {
          text: '年\r\r月',
          textStyle: {
            color: 'white'
          },
          left: 'right',
          top: '3%'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#3F668A'
            }
          },
          axisLabel: {
            textStyle: {
              fontSize: 14,
              color: "white"
            }
          },
          type: 'category',
          data: monthList
        }],
        yAxis: [{
          axisLabel: {
            textStyle: {
              fontSize: 14,
              color: "white"
            }
          },
          splitLine: {
            lineStyle: {
              color: ['#46708B']
            }
          },
          axisLine: {
            show: false
          },
          type: 'value'
        }],
        series: [{
          name: '一级风险人员',
          type: 'bar',
          data: data.mix_barline_series_data[0],
          itemStyle: {
            normal: {
              color: '#E9394D'
            }
          }
        },
          {
            name: '二级风险人员',
            type: 'bar',
            data: data.mix_barline_series_data[1],
            itemStyle: {
              normal: {
                color: '#F6BC00'
              }
            }
          },
          {
            name: '三级风险人员',
            type: 'bar',
            data: data.mix_barline_series_data[2],
            itemStyle: {
              normal: {
                color: '#00A1FC'
              }
            }
          },
          {
            name: '总体',
            type: 'line',
            data: data.mix_barline_line_data,
            itemStyle: {
              normal: {
                color: '#B65910'
              }
            }
          }

        ]
      };

      per_4.setOption(option_part2);
    } else {
      alert(resp.resultMsg);
    }
  },
  error: function() {
    alert("请求异常");
  }
});


window.onresize = function() {
  $('.contents_two').css({ 'height': $(window).height() - 90 + "px" });
  $(".contents_two div.row:nth-child(2)").css({ 'height': $(window).height() - $("#imp_person").height() - 186 + "px" })
  per_1.resize();
  per_3.resize();
  per_4.resize();
}

$(".imp_person_toggle>span:nth-child(2)").click(function(){
  $(".img-holder>div p:nth-child(4)").text("风险等级：一级");
  $(this).css("backgroundColor","#1C4564");
  $(this).siblings().css("backgroundColor","");
});

$(".imp_person_toggle>span:nth-child(3)").click(function(){
  $(".img-holder>div p:nth-child(4)").text("风险等级：二级");
  $(this).css("backgroundColor","#1C4564");
  $(this).siblings().css("backgroundColor","");
});

$(".imp_person_toggle>span:nth-child(4)").click(function(){
  $(".img-holder>div p:nth-child(4)").text("风险等级：三级");
  $(this).css("backgroundColor","#1C4564");
  $(this).siblings().css("backgroundColor","");
});
})
