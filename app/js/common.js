var preReqUrl = "http://10.58.1.134:8080/";
var token = '?token=' + localStorage.getItem("token");

function commonAjax(method,baseUrl,sendData) {
  var successData = null;
  $.ajax({
    type: method,
    url: preReqUrl + baseUrl,
    contentType: "application/json;charset=utf-8",
    data: JSON.stringify({sendData}),
    async: false,
    success: function (resp) {
      successData =resp;
    },
    error: function (err) {
      alert("请求异常");
    },
    complete: function (XHR, TS) {
      XHR = null;  //回收资源
    }
  });
  console.log(preReqUrl + baseUrl + token)
  return successData;
}


