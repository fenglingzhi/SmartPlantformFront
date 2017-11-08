function commonAjax(method,baseUrl,sendData) {
  var successData = null;
  $.ajax({
    type: method,
    url: baseUrl,
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
  return successData;
}


