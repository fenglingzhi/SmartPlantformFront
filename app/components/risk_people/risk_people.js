$(function () {




var $imgs = $('.slide_total .img-holder');
var l = $imgs.length;
var radius = 400;


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
$imgs.each(function(i, item){

  angle = i * 0.63;
  //console.log('angle ',angle);
  var zPos = - Math.abs(angle * (100 ));

  var xPos = Math.sin (angle) * radius;
  posArray.push({x:xPos,z:zPos,angle:angle});
  var imgAlpha = (Math.ceil(0.5 * totalImgToView) * imgMinus) * 100;
  //imgAlpha = Math.abs(zPos) < imgAlpha ? 1 : 0;
  TweenMax.to(item,1, {x:xPos,z:zPos,ease:Expo.easeOut,autoAlpha:0});
});


var curImgViewIndex = 0;
var targetImgViewIndex = 0;
var curIntervalId = 0;
var scrollbarDragging = false;

function rotate(){
  var minusVal = targetImgViewIndex - curImgViewIndex > 0 ? -0.6301 : 0.6301;

  var easeObj;
  var tweenTime;
  if(Math.abs(targetImgViewIndex - curImgViewIndex) === 1){
    easeObj = Quint.easeOut;
    tweenTime = 1;
  }else {
    easeObj = Linear.easeNone;
    tweenTime = 0.15;
  }

  $imgs.each(function(i, item){
    var pos = posArray[i];
    pos.angle = pos.angle + minusVal ;  //(0.6301*0.06);
    var angleDistance = pos.angle * 100;
    var zPos = - Math.abs(angleDistance);
    var xPos =  Math.sin (pos.angle) * radius;
    var imgAlpha = (Math.ceil(0.5 * totalImgToView) * imgMinus) * 100;

    imgAlpha = Math.abs(zPos) < imgAlpha ? 1 : 0;
    var rotDeg = Math.round(angleDistance) >= 0 ? -30 : 30;
    rotDeg = Math.round(angleDistance) === 0 ? 0 : rotDeg;


    TweenMax.to(item, tweenTime,  {x:xPos,z:zPos,ease:easeObj,autoAlpha:imgAlpha,rotationY:rotDeg});

  });
  minusVal > 0 ? curImgViewIndex-- : curImgViewIndex++;

  if(curImgViewIndex === targetImgViewIndex){
    clearInterval(curIntervalId);
  }


}

function showImgAt(index){
  targetImgViewIndex = index;
  if(targetImgViewIndex === curImgViewIndex){
    return;
  }
  clearInterval(curIntervalId);
  curIntervalId = setInterval(function(){
    rotate();
  },150);

  //update scrollbar
  if(!scrollbarDragging){
    var l = $imgs.length - 1;
    if(targetImgViewIndex > l){
      return;
    }
    var curScrollX = Math.abs(Math.round(targetImgViewIndex * (702 / l ) ) );
    var tweenTime = Math.abs((targetImgViewIndex - curImgViewIndex) * 0.2);
    TweenMax.to($('.scroller'),tweenTime,{x:curScrollX,ease:Sine.easeOut});
  }
}


//CONTROLLER UPDATE
var $input = $('.controller input');
$input.keyup(function(e){
  if(e.keyCode === 13){
    showImgAt(parseInt($input.val()))
  }
});

//just to do start up animation
showImgAt(5);




//----------------------- Dragging Utility ----------------------
Draggable.create('.scroller',{type:'x',bounds:{left:0,top:0,width:802,height:0},onDrag:function(){
  var curImgIndex = Math.abs(Math.round(this.x / (802/l)));

  targetImgViewIndex = curImgIndex;
  if(targetImgViewIndex === curImgViewIndex){
    return;
  }
  rotate();

},onDragStart:function(){
  scrollbarDragging = true;
},onDragEnd:function(e){
  scrollbarDragging = false;
}});

$('.scrolller-container').on('click',function(e){
  var curImgIndex = Math.abs(Math.round(e.offsetX / (802/l)));
  if(curImgIndex >= $imgs.length){
    curImgIndex = $imgs.length - 1;
  }console.log('boom');
  showImgAt(curImgIndex);
});

$('.scrolller-container .scroller').on('click', function(e){
  e.stopPropagation();
});


$imgs.on('click',function(){
  showImgAt($imgs.index($(this)));
});


per_1=echarts.init(document.getElementById("imp_person_per1"));

option_left= {
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  title:{
    text:'重大风险人员占比',
    textStyle:{
      fontSize:24,
      color:'white'
    },
    left:'2%'
  },
  series: [
    {
      name:'访问来源',

      type:'pie',
      selectedMode: 'single',
      radius: [0, '50%'],
      center:['40%','55%'],
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
      data:[
        {value:39, name:'39%'},
        {value:61, name:'61%'},
      ]
    },
  ]
};

per_1.setOption(option_left);

per_3=echarts.init(document.getElementById("imp_person_per3"));

option_right= {
  series: [
    {
      name:'访问来源',
      type:'pie',

      selectedMode: 'single',
      radius: [0, '60%'],
      center:['15%','55%'],
      label: {
        normal: {
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },

      data:[
        {value:150, name:'\r\r\r\r\r150人\n重大风险人员',
          label:{
            normal:{
              fontSize:20
            }
          },
          itemStyle:{
            normal:{
              color:'red'

            }
          }
        },
        {value:500, name:'\r\r\r\r500人\n二级风险人员',
          label:{
            normal:{
              fontSize:20
            }
          },
          itemStyle:{
            normal:{
              color:'yellow'
            },
          }
        },
        {value:300, name:'\r\r\r\r300人\n三级风险人员',
          label:{
            normal:{
              fontSize:20
            }
          },
          itemStyle:{
            normal:{
              color:'skyblue'
            }
          }
        },
        {value:1485.89,
          itemStyle: {
            normal: {
              opacity:0
            }
          }
        },
      ]
    }
  ]
};

per_3.setOption(option_right);

per_4=echarts.init(document.getElementById("imp_person_per4"));

option_part2= {
  tooltip : {
    trigger: 'axis',
    formatter: '{b}<br />{a0}: {c0}<br />{a1}: {c1}<br />{a2}: {c2}',
    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
      type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    },
  },
  title:{
    text:'年\r\r月',
    textStyle:{
      color:'white'
    },
    left:'right',
    top:'3%'
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis : [
    {
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
          color:"white"
        }
      },
      type : 'category',
      data : ['周一','周二','周三','周四','周五','周六','周日']
    }
  ],
  yAxis : [
    {
      axisLabel: {
        textStyle: {
          fontSize: 14,
          color:"white"
        }
      },
      splitLine: {
        lineStyle: {
          color: ['#46708B']
        }
      },
      axisLine: {
        show:false
      },
      type : 'value'
    }
  ],
  series : [
    {
      name:'直接访问',
      type:'bar',
      data:[320, 332, 301, 334, 390, 330, 320],
      itemStyle:{
        normal:{
          color:'#E9394D'
        }
      }
    },
    {
      name:'邮件营销',
      type:'bar',
      data:[120, 132, 101, 134, 90, 230, 210],
      itemStyle:{
        normal:{
          color:'#F6BC00'
        }
      }
    },
    {
      name:'联盟广告',
      type:'bar',
      data:[520, 582, 591, 534, 590, 530, 510],
      itemStyle:{
        normal:{
          color:'#00A1FC'
        }
      }
    },
    {
      name:'视屏广告',
      type:'line',
      data:[933,945,989,967,960,978,950],
      itemStyle:{
        normal:{
          color:'#B65910'
        }
      }
    }
  ]
};

per_4.setOption(option_part2);

window.onresize = function () {
  $('.contents_two').css({'height':$(window).height()-90+"px"});
  $(".contents_two div.row:nth-child(2)").css({'height':$(window).height()-$("#imp_person").height()-186+"px"})
  per_1.resize();
  per_3.resize();
  per_4.resize();
}


$(".imp_person_toggle>span:nth-child(2)").click(function(){
  $(".img-holder>div p:nth-child(4)").text("风险等级：一级")
});

$(".imp_person_toggle>span:nth-child(3)").click(function(){
  $(".img-holder>div p:nth-child(4)").text("风险等级：二级")
});

$(".imp_person_toggle>span:nth-child(4)").click(function(){
  $(".img-holder>div p:nth-child(4)").text("风险等级：三级")
});
})
