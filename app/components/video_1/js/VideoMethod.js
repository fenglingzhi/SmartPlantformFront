
///*****************全局变量***********************************************************************/ 
//classid= CD5051FA-7B04-45BF-9D8F-15E6A9584D17
var downflag = false;
var object;
var PlayCameraName = new Array(30);
var PlayCameraID = new Array(30);
var CurrentWindCount = 9;
var M_RecordFileArray = new Array(30); //保存录像文件名
var M_StopArray = new Array(30); //保存录像标记 
var M_VideoStreamMode = new Array(30); //视频流模式：0-主码流  1-辅码流 
var MaxWinCount = 24;

///***********************************视频调用类方法***********************************************/
jQuery.fn.extend({
    //初始化设置
    initDecode: function () {
        try {
            object = document.getElementById($(this).attr("id"));
            if (object) {
                try { 
                    object.InitDecode(MaxWinCount);
                }
                catch (e) {  
                    object.InitDecode(MaxWinCount);
                }
                if ($(this).isUpdateVision()) {
                    if (window.confirm("当前视频控件版本低（" + object.GetVersion() + "），请下载新版本，确定需要下载吗？")) {
                        window.location.href = "/resources/videoplat.exe";
                    }
                }
            }
        }
        catch (e) {
            alert("控件安装有问题，请重新安装[" + e.message + "]");
        }
    },
    //多画面设置 
    setVideoNum: function (num) {
        try {
            var PreCurrentWindCount = CurrentWindCount;
            CurrentWindCount = num;
            object = document.getElementById($(this).attr("id"));
            if (object) {
                if (PreCurrentWindCount > CurrentWindCount) {
                    for (var i = CurrentWindCount; i < PreCurrentWindCount; i++) {
                        PlayCameraName[i] = '';
                        PlayCameraID[i] = '';
                    }
                }
                object.SetVideoWndNum(num);
                object.SetSelectedWnd(0);
            }

        }
        catch (e) {
        }

    },
    //多画面设置(弹出窗)
    setDialogVideoNum: function (num) {
        try {
            object = document.getElementById($(this).attr("id"));
            if (object) {
                object.SetVideoWndNum(num);
                object.SetSelectedWnd(0);
            }

        }
        catch (e) {
        }

    },
    //视频轮巡时多画面设置（关闭所有的视频）
    setLunXunVideoNum: function (num) {
        try {
            CurrentWindCount = num;
            object = document.getElementById($(this).attr("id"));
            if (object) {
                for (var i = 0; i < 24; i++) {
                    object.CloseVideo(i);
                    PlayCameraName[i] = '';
                    PlayCameraID[i] = '';
                }
                object.SetVideoWndNum(num);
                object.SetSelectedWnd(0);
            }
        }
        catch (e) {

        }
    },
    //多画面设置(弹出窗)
    setVideoNumV: function (num) {
        try {
            object = document.getElementById($(this).attr("id"));
            if (object) {
                object.SetVideoWndNumV(num);
                object.SetSelectedWnd(0);
            }

        }
        catch (e) {
        }
    },
    //实时多画面预览(异步)  isMediaPlay=1 流媒体转发，dvrType：dvr设备类型（大于4个窗口设置整体辅码流，否则主码流 ）
    videoAsyncPlay: function (streamIP, streamPort, streamUser, streamPass, streamType, dvrIP, dvrPort, dvrUser, dvrPass,
        dvrChannel, camName, camID, dvrType, isMediaPlay) {
        try {
            object = document.getElementById($(this).attr("id"));
            if (object) {
                var index = object.GetSelectedWnd();
                PlayCameraName[index] = camName;
                PlayCameraID[index] = camID;

                //转换成窗口区域序号
                var areaIndex = object.GetAreaByWnd(index);
                //注册设备类型号
                object.SetDeviceType(areaIndex, dvrType);
                //是否关联流媒体
                if (isMediaPlay == 1) {
                    object.AddStreamServer(areaIndex, streamIP, streamPort, streamUser, streamPass, streamType);
                }
                //登录视频设备 
                var loginId = object.Login(areaIndex, dvrIP, dvrPort, dvrUser, dvrPass, 1);
                var playId = -1;
                //播放实时视频
                if (loginId >= 0) { 
                    var playId = object.OpenVideo(areaIndex, dvrChannel, 0);
                    if (playId < 0) {
                        alert("实时视频播放失败");
                    }
                    else { 
                        //播放成功后跳转 
                        if (areaIndex == CurrentWindCount - 1) {
                            object.SetSelectedWnd(0);
                        }
                        else {
                            areaIndex++;
                            object.SetSelectedWnd(areaIndex);
                        }
                    }
                }
                else {
                    alert("视频服务器登录失败");
                }
            }
        }
        catch (e) {

        }
    },
    //实时多画面预览(异步)  isMediaPlay=1 流媒体转发，dvrType：dvr设备类型（大于4个窗口设置整体辅码流，否则主码流 ）isMainStream是否主码
    videoAsyncMultPlay: function (streamIP, streamPort, streamUser, streamPass, streamType, dvrIP, dvrPort, dvrUser, dvrPass,
        dvrChannel, camName, camID, dvrType, isMediaPlay, isMainStream) {
        try {
            object = document.getElementById($(this).attr("id"));
            if (object) {
                var index = object.GetSelectedWnd();
                PlayCameraName[index] = camName;
                PlayCameraID[index] = camID;
                //转换成窗口区域序号
                var areaIndex = object.GetAreaByWnd(index);
                //注册设备类型号
                object.SetDeviceType(areaIndex, dvrType);
                //是否关联流媒体
                if (isMediaPlay == 1) {
                    object.AddStreamServer(areaIndex, streamIP, streamPort, streamUser, streamPass, streamType);
                }
                //登录视频设备 
                var loginId = object.Login(areaIndex, dvrIP, dvrPort, dvrUser, dvrPass, 1);
                var playId = -1;
                //播放实时视频
                if (loginId >= 0) {
                    var playId = object.OpenVideo(areaIndex, dvrChannel, (CurrentWindCount >= 4 && isMainStream == 0)? 1 : 0);
                    if (playId < 0) {
                        alert("实时视频播放失败");
                    }
                    else {
                        //设置码流类型
                        M_VideoStreamMode[index] = (CurrentWindCount >= 4 && isMainStream == 0) ? 1 : 0; 
                        //播放成功后跳转 
                        if (areaIndex == CurrentWindCount - 1) {
                            object.SetSelectedWnd(0);
                        }
                        else {
                            areaIndex++;
                            object.SetSelectedWnd(areaIndex);
                        }
                    }
                } 
            }
        }
        catch (e) {

        }
    },
    //首页视频(异步辅码流)  isMediaPlay=1 流媒体转发
    videoAsyncHomePlay: function (streamIP, streamPort, streamUser, streamPass, streamType, dvrIP, dvrPort, dvrUser, dvrPass,
       dvrChannel, camName, camID, dvrType, isMediaPlay, isMainStream) {
        try {
            object = document.getElementById($(this).attr("id"));
            if (object) {
                var index = object.GetSelectedWnd();
                PlayCameraName[index] = camName;
                PlayCameraID[index] = camID;
                //转换成窗口区域序号
                var areaIndex = object.GetAreaByWnd(index);
                //注册设备类型号
                object.SetDeviceType(areaIndex, dvrType);
                //是否关联流媒体
                if (isMediaPlay == 1) {
                    object.AddStreamServer(areaIndex, streamIP, streamPort, streamUser, streamPass, streamType);
                }
                //登录视频设备 
                var loginId = object.Login(areaIndex, dvrIP, dvrPort, dvrUser, dvrPass, 1);
                var playId = -1;
                //播放实时视频
                if (loginId >= 0) {
                    var playId = object.OpenVideo(areaIndex, dvrChannel, (CurrentWindCount >= 4 && isMainStream == 0) ? 1 : 0);
                    if (playId < 0) {
                        return;
                    }
                    else { 
                        //播放成功后跳转 
                        if (areaIndex == CurrentWindCount - 1) {
                            object.SetSelectedWnd(0);
                        }
                        else {
                            areaIndex++;
                            object.SetSelectedWnd(areaIndex);
                        }
                    }
                } 
            }
        }
        catch (e) {

        }
    },
    //实时多画面预览(异步)（用于轮切）  isMediaPlay=1 流媒体转发，dvrType：dvr设备类型（大于4个窗口设置整体辅码流，否则主码流 ）
    videoAsyncPlayLunQie: function (streamIP, streamPort, streamUser, streamPass, streamType, dvrIP, dvrPort, dvrUser, dvrPass,
        dvrChannel, camName, camID, dvrType, isMediaPlay, isMainStream) {
        try {
            object = document.getElementById($(this).attr("id"));
            if (object) {
                var index = object.GetSelectedWnd();
                PlayCameraName[index] = camName;
                PlayCameraID[index] = camID;
                //转换成窗口区域序号
                var areaIndex = object.GetAreaByWnd(index);
                //注册设备类型号
                object.SetDeviceType(areaIndex, dvrType);
                //是否关联流媒体
                if (isMediaPlay == 1) {
                    object.AddStreamServer(areaIndex, streamIP, streamPort, streamUser, streamPass, streamType);
                }
                //登录视频设备 
                var loginId = object.Login(areaIndex, dvrIP, dvrPort, dvrUser, dvrPass, 1);
                var playId = -1;
                //播放实时视频
                if (loginId >= 0) {
                    var playId = object.OpenVideo(areaIndex, dvrChannel, (CurrentWindCount >= 4 && isMainStream == 0) ? 1 : 0);
                    if (playId < 0) {
                        return;
                    }
                    else {
                        //设置码流类型
                        M_VideoStreamMode[index] = (CurrentWindCount >= 4 && isMainStream == 0)? 1 : 0;
                        //播放成功后跳转 
                        if (areaIndex == CurrentWindCount - 1) {
                            object.SetSelectedWnd(0);
                        }
                        else {
                            areaIndex++;
                            object.SetSelectedWnd(areaIndex);
                        }
                    }
                } 
            }
        }
        catch (e) {

        }
    }, 
    //实时多画面预览(同步) isMediaPlay=1 流媒体转发,isMediaPlay=0 为直连，dvrType：dvr设备类型
    videoPlay: function (streamIP, streamPort, streamUser, streamPass, streamType, dvrIP, dvrPort, dvrUser, dvrPass,
        dvrChannel, camName, camID, dvrType, isMediaPlay) {
        try {
            object = document.getElementById($(this).attr("id"));
            if (object) {
                var index = object.GetSelectedWnd();
                PlayCameraName[index] = camName;
                PlayCameraID[index] = camID;
                //转换成窗口区域序号
                var areaIndex = object.GetAreaByWnd(index);
                //注册设备类型号 
                object.SetDeviceType(areaIndex, dvrType);
                //是否关联流媒体
                if (isMediaPlay == 1) {
                    object.AddStreamServer(areaIndex, streamIP, streamPort, streamUser, streamPass, streamType)
                }
                //登录视频设备 
                var loginId = object.Login(areaIndex, dvrIP, dvrPort, dvrUser, dvrPass, 0);
                var playId = -1;
                //播放实时视频
                if (loginId >= 0) {
                    var playId = object.OpenVideo(areaIndex, dvrChannel, 0);
                    if (playId < 0) {
                        alert("实时视频播放失败");
                    }
                    else {
                        //播放成功后跳转  
                        if (areaIndex == CurrentWindCount - 1) {
                            object.SetSelectedWnd(0);
                        }
                        else {
                            areaIndex++;
                            object.SetSelectedWnd(areaIndex);
                        }
                    }
                }
                else {
                    alert("视频服务器登录失败");
                }
            }
        }
        catch (e) {

        }
    },
    //单一实时视频播放(同步),isMediaPlay=1 流媒体转发,isMediaPlay=0 为直连，dvrType：dvr设备类型
    singleVideoPlay: function (streamIP, streamPort, streamUser, streamPass, streamType, dvrIP, dvrPort, dvrUser, dvrPass,
        dvrChannel, camName, camID, dvrType, isMediaPlay) {
        try {
            object = document.getElementById($(this).attr("id"));
            if (object) {
                var index = object.GetSelectedWnd();
                //转换成窗口区域序号
                var areaIndex = object.GetAreaByWnd(index);
                //注册设备类型号
                object.SetDeviceType(areaIndex, dvrType);
                //是否关联流媒体
                if (isMediaPlay == 1) {
                    object.AddStreamServer(areaIndex, streamIP, streamPort, streamUser, streamPass, streamType)
                }
                //登录视频设备 
                var loginId = object.Login(areaIndex, dvrIP, dvrPort, dvrUser, dvrPass, 0);
                var playId = -1;
                //播放实时视频
                if (loginId >= 0) {
                    var playId = object.OpenVideo(areaIndex, dvrChannel, 0);
                    if (playId < 0) {
                        alert("实时视频播放失败");
                    }
                    else {
                        //播放成功后跳转 
                        if (areaIndex == CurrentWindCount - 1) {
                            object.SetSelectedWnd(0);
                        }
                        else {
                            areaIndex++;
                            object.SetSelectedWnd(areaIndex);
                        }
                    }
                }
                else {
                    alert("视频服务器登录失败");
                }
            }
        }
        catch (e) {

        }
    },
    //单一实时视频播放(异步),isMediaPlay=1 流媒体转发,isMediaPlay=0 为直连，dvrType：dvr设备类型
    singleVideoAsyncPlay: function (streamIP, streamPort, streamUser, streamPass, streamType, dvrIP, dvrPort, dvrUser, dvrPass,
        dvrChannel, camName, camID, dvrType, isMediaPlay) {
        try {
            object = document.getElementById($(this).attr("id"));
            if (object) {
                var index = object.GetSelectedWnd();
                PlayCameraName[index] = camName;
                PlayCameraID[index] = camID;
                //转换成窗口区域序号
                var areaIndex = object.GetAreaByWnd(index);
                //注册设备类型号
                object.SetDeviceType(areaIndex, dvrType);
                //是否关联流媒体
                if (isMediaPlay == 1) {
                    object.AddStreamServer(areaIndex, streamIP, streamPort, streamUser, streamPass, streamType)
                }
                //登录视频设备 
                var loginId = object.Login(areaIndex, dvrIP, dvrPort, dvrUser, dvrPass, 1);
                var playId = -1;
                //播放实时视频
                if (loginId >= 0) {
                    var playId = object.OpenVideo(areaIndex, dvrChannel, 0);
                    if (playId < 0) {
                        alert("实时视频播放失败");
                    }
                    else {
                        if (areaIndex == CurrentWindCount - 1) {
                            object.SetSelectedWnd(0);
                        }
                        else {
                            areaIndex++;
                            object.SetSelectedWnd(areaIndex);
                        }
                    }
                }
                else {
                    alert("视频服务器登录失败");
                }
            }
        }
        catch (e) {

        }
    },
    //单一实时视频播放(用于单一视频轮切),isMediaPlay=1 流媒体转发,isMediaPlay=0 为直连，dvrType：dvr设备类型
    singleVideoLunXun: function (streamIP, streamPort, streamUser, streamPass, streamType, dvrIP, dvrPort, dvrUser, dvrPass,
        dvrChannel, camName, camID, dvrType, isMediaPlay, m_index) {
        try { 
            object = document.getElementById($(this).attr("id"));
            if (object) {
                PlayCameraName[m_index] = camName;
                PlayCameraID[m_index] = camID;
                //转换成窗口区域序号
                var areaIndex = object.GetAreaByWnd(m_index);
                //注册设备类型号
                object.SetDeviceType(areaIndex, dvrType);
                //是否关联流媒体
                if (isMediaPlay == 1) {
                    object.AddStreamServer(areaIndex, streamIP, streamPort, streamUser, streamPass, streamType)
                }  
                //登录视频设备
                var loginId = object.Login(areaIndex, dvrIP, dvrPort, dvrUser, dvrPass, 1);
                var playId = -1;
                //播放实时视频
                if (loginId >= 0) {
                    var playId = object.OpenVideo(areaIndex, dvrChannel, 0);
                    if (playId < 0) {
                        return;
                    }
                    else {
                        //播放成功后跳转 
                        if (areaIndex == CurrentWindCount - 1) {
                            object.SetSelectedWnd(0);
                        }
                        else {
                            areaIndex++;
                            object.SetSelectedWnd(areaIndex);
                        }
                    }
                } 
            }
        }
        catch (e) {

        }
    },
    //停止播放当前视频（实时播放和录像回放时）
    stopVideoPlay: function () {
        try {
            object = document.getElementById($(this).attr("id"));
            var index = object.GetSelectedWnd();
            //转换成窗口区域序号
            var areaIndex = object.GetAreaByWnd(index); 
            object.CloseVideo(areaIndex);
            PlayCameraName[index] = '';
            PlayCameraID[index] = '';
            Multer = 1;
            if ($("img[src='/resources/images/Video/后退_1.png']").length > 0) {
                $("img[src='/resources/images/Video/后退_1.png']").attr("title", "后退");
            }
            if ($("img[src='/resources/images/Video/快进_1.png']").length > 0) {
                $("img[src='/resources/images/Video/快进_1.png']").attr("title", "快进");
            }
        }
        catch (e) {
        }

    },
    //停止播放所有视频（实时播放和录像回放时）
    stopVideoPlayAll: function () {
        try {
            object = document.getElementById($(this).attr("id"));
            for (var i = 0; i <= 24; i++) {
                object.CloseVideo(i);
                PlayCameraName[i] = '';
                PlayCameraID[i] = '';
            }
        }
        catch (e) {
        }
    },
    //抓图到本地（实时播放和录像回放时都可以）
    capturePicture: function () {
        try {
            var ocx = document.getElementById($(this).attr("id"));
            if (ocx) {
                //获取窗口号
                var index = ocx.GetSelectedWnd();
                //转换成窗口区域序号
                var areaIndex = ocx.GetAreaByWnd(index);
                var picName = '';
                var fd = new ActiveXObject("MSComDlg.CommonDialog");
                fd.Filter = "*.jpg";
                fd.FilterIndex = 2;
                fd.MaxFileSize = 128;
                // 显示对话框
                fd.ShowSave();

                if (fd != null && fd.FileName != "") {
                    picName = fd.FileName + ".jpg";
                }
                if (picName != '') {
                    var result = ocx.CapturePicture(areaIndex, picName);
                    if (result >= 0) {
                        alert("保存成功!");
                    } else {
                        alert("保存失败!");
                    }
                }
                else {
                    //alert('请在对话框中填写文件名');
                }
            }
        }
        catch (e) {
            alert('请安装弹出路径对话框插件');
        }
    },
    //视频监督单抓图
    upLoadFile: function (upLoadIP, upLoadPort) {
        try {
            var ocx = document.getElementById($(this).attr("id"));
            if (ocx) {
                var systime = new Date();
                var day = systime.getDate();
                var month = systime.getMonth() + 1;
                var year = systime.getFullYear();
                var hour = systime.getHours();
                var minitue = systime.getMinutes();
                var second = systime.getSeconds();
                var serverPicName = Math.random() + year + month + day + hour + minitue + second + '.jpg';
                var picName = 'c:\\' + serverPicName;
                var index = ocx.GetSelectedWnd(); 
                var areaIndex = ocx.GetAreaByWnd(index);
                ocx.CapturePicture(areaIndex, picName);
                var folder = year + '-' + month + '-' + day;
                var imgUrl = "/Document/ZhuaTu/" + folder + "/" + serverPicName;
                var RelativePath = "~/Document/ZhuaTu/" + folder + "/&FileName=" + serverPicName;
                var isOK = ocx.UpLoadFile(picName, upLoadIP, upLoadPort, "/Common/UpFileLoad?FileUrl=" + RelativePath + "&no=", serverPicName, 1);
                return result = {
                    isOK: isOK,
                    serverPicName: imgUrl,
                    dateTime: year.toString() + '-' + month.toString() + "-" + day.toString() + ' ' + hour.toString() + ':' + minitue.toString() + ':' + second.toString()
                }
            } else {
                return result = {
                    isok: -1,
                    serverPicName: RelativePath,
                    datetime: '1990-01-01 00:00:00'
                }
            }
        }
        catch (e) {
            return result = {
                isok: -1,
                serverPicName: "",
                datetime: '1990-01-01 00:00:00'
            }
        }
    },
    //一边播放一边录像到本地文件（实时播放和录像回放时都可以）Stop=0 开始 1停止
    videoRecordFile: function () {
        try {
            var ocx = document.getElementById($(this).attr("id"));
            var index = ocx.GetSelectedWnd();
            var areaIndex = ocx.GetAreaByWnd(index);
            if (M_StopArray[index] == 0 || M_StopArray[index] == null || M_StopArray[index] == undefined) {
                //开始录像
                if (ocx) {
                    var fd = new ActiveXObject("MSComDlg.CommonDialog");
                    fd.Filter = "*.mp4";
                    fd.FilterIndex = 2;
                    fd.MaxFileSize = 128;
                    // 显示对话框
                    fd.ShowSave();

                    if (fd != null && fd.FileName != "") {
                        M_RecordFileArray[index] = fd.FileName + ".mp4";
                    }
                    if (M_RecordFileArray[index] != '') {
                        ocx.SaveFile(areaIndex, M_RecordFileArray[index], 0);
                        M_StopArray[index] = 1;
                        alert("开始录像");
                    }
                    else {
                        alert('请在对话框中填写文件名');
                        return 0;
                    }
                }
            }
            else {
                //停止录像
                if (ocx) {
                    ocx.SaveFile(areaIndex, M_RecordFileArray[index], 1);
                    M_StopArray[index] = 0;
                    alert("停止录像，保存地址:" + M_RecordFileArray[index]);
                }
            }
        }
        catch (e) {
            alert('请安装弹出路径对话框插件');
        }
    },

    //打开/关闭声音（实时播放和录像回放时都可以）
    videoSound: function (imgId) {
        try {
            var ocx = document.getElementById($(this).attr("id"));
            var index = ocx.GetSelectedWnd();
            var areaIndex = ocx.GetAreaByWnd(index);
            if (ocx) {
                if ($("#" + imgId).attr("src") == "/resources/images/Video/声音_Off.png") {
                    //开启声音
                    if (ocx.VideoSound(areaIndex, 0) >= 0) {
                        $("#" + imgId).attr("src", "/resources/images/Video/声音.png");
                    }
                }
                else {
                    //关闭声音
                    if (ocx.VideoSound(areaIndex, 1) >= 0) {
                        $("#" + imgId).attr("src", "/resources/images/Video/声音_Off.png");
                    }
                }

            }
        }
        catch (e) {

        }
    },
    //全屏（实时播放和录像回放时都可以）
    fullScreen: function () {
        try {
            var ocx = document.getElementById($(this).attr("id"));
            if (ocx != null) {
                ocx.FullScreen(1);
            }
        }
        catch (e) {

        }

    },

    //获取窗口的名称（实时播放和录像回放时都可以）返回 Camera[0]=camid  Camera[1]=cameraname数组
    getWinCamera: function () {
        var arrayVideo = new Array();
        try {
            var ocx = document.getElementById($(this).attr("id"));
            var index = ocx.GetSelectedWnd();
            if (ocx != null) {
                arrayVideo[0] = PlayCameraID[index];
                arrayVideo[1] = PlayCameraName[index];
            }

        }
        catch (e) {
        }
        return arrayVideo;
    },
    //获得图像参数(实时直连) 返回值  ：成功 （1-10）    失败 -1
    /*
    #define EFFECT_BRIGHT     1  明暗度
    #define EFFECT_CONTRAST   2  对比度
    #define EFFECT_SATURATION 3  饱和度
    #define EFFECT_HUE        4  色调
    */
    //nEffectType=1,2,3,4
    getVideoEffect: function (wndIndex, nEffectType) {
        var effect = -1;
        try {
            var ocx = document.getElementById($(this).attr("id"));
            var index = ocx.GetSelectedWnd();
            var areaIndex = ocx.GetAreaByWnd(index);
            if (ocx != null) {
                effect = ocx.GetVideoEffect(areaIndex, nEffectType);
            }
        }
        catch (e) {

        }
        return effect;
    },
    //设置图像参数:dwValue=1-10 返回：成功 >=0，失败 -1 
    setVideoEffect: function (nEffectType, dwValue) {
        try {
            var ocx = document.getElementById($(this).attr("id"));
            var index = ocx.GetSelectedWnd();
            var areaIndex = ocx.GetAreaByWnd(index);
            if (ocx != null) {
                var setId = ocx.SetVideoEffect(areaIndex, nEffectType, dwValue);
                if (setId < 0) {
                    alert("设置图像失败");
                }
            }
        }
        catch (e) {
        }
    },
    setShowCameraName: function (index) {
        try {
            if (PlayCameraName[index] != undefined) {
                $(this).text(PlayCameraName[index]);
            }
            else {
                $(this).text("");
            }
        }
        catch (e) {
        }
    },
    setSelectedWinIndex: function (wndIndex) {
        try { 
            var ocx = document.getElementById($(this).attr("id"));
            ocx.SetSelectedWnd(wndIndex);
        }
        catch (e) {
        }
    },
    getSelectedWinIndex: function () {
        var ocx = document.getElementById($(this).attr("id"));
        return ocx.GetSelectedWnd();
    },
    //码流切换 0-主码流 1-辅码流
    switchVideo: function (wndIndex, streamType) { 
        var ocx = document.getElementById($(this).attr("id"));
        var areaIndex = ocx.GetAreaByWnd(wndIndex);
        ocx.SwitchVideo(areaIndex, streamType);
    },
    //码流切换 0-主码流 1-辅码流
    clearUp: function () {
        try { 
            var ocx = document.getElementById($(this).attr("id"));
            ocx.ClearUp();
        }
        catch (e) {

        }
    },
    //判断控件是否为null
    isNull: function () {
        var isnull = false;
        try {
            var ocx = document.getElementById($(this).attr("id"));
            if (ocx == null)
                isnull = true;
        }
        catch (e) {

        }
        return isnull;
    },
    //设置控件为null
    setNull: function () {
        try {
            var ocx = document.getElementById($(this).attr("id"));
            ocx = null;
        }
        catch (e) {

        }
    }
});

///***********************************录像回放和下载的操作方法***********************************************/

//开始下载视频
var t;
var isLoad = false;//是否正在下载中
jQuery.fn.extend({
    //录像回放(按时间异步多画面)
    playAsyncBackByTime: function (dvrIP, dvrPort, dvrUser, dvrPass, dvrChannel, camName, camID, dvrType, starttime, endtime) {
        try {
            object = document.getElementById($(this).attr("id"));
            if (object) {
                var index = object.GetSelectedWnd();
                PlayCameraName[index] = camName;
                PlayCameraID[index] = camID;
                //转换成窗口区域序号
                var areaIndex = object.GetAreaByWnd(index);
                //注册设备类型号
                object.SetDeviceType(areaIndex, dvrType);
                //登录视频服务器设备  
                var loginId = object.LogIn(areaIndex, dvrIP, dvrPort, dvrUser, dvrPass, 1);
                var backId = -1;
                if (loginId >= 0) {
                    starttime = (new Date(starttime.replace(/-/g, "/"))).datetimeFormat("yyyy-MM-dd hh:mm:ss");
                    endtime = (new Date(endtime.replace(/-/g, "/"))).datetimeFormat("yyyy-MM-dd hh:mm:ss"); 
                    backId = object.PlayBackByTime(areaIndex, dvrChannel, starttime, endtime);
                    if (backId < 0) {
                        alert("录像播放失败");
                    }
                    else {
                        //回放成功后跳转  
                        if (areaIndex == CurrentWindCount - 1) {
                            object.SetSelectedWnd(0);
                        }
                        else {
                            areaIndex++;
                            object.SetSelectedWnd(areaIndex);
                        }
                    }
                }
                else {
                    alert("视频服务器登录失败");
                }
            }
        }
        catch (e) {
        }
    },
    //录像回放(按时间同步多画面)
    playBackByTime: function (dvrIP, dvrPort, dvrUser, dvrPass, dvrChannel, camName, camID, dvrType, starttime, endtime) {
        try {
            object = document.getElementById($(this).attr("id"));
            if (object) {
                var index = object.GetSelectedWnd();
                PlayCameraName[index] = camName;
                PlayCameraID[index] = camID;
                //转换成窗口区域序号
                var areaIndex = object.GetAreaByWnd(index);
                //注册设备类型号
                object.SetDeviceType(areaIndex, dvrType);
                //登录视频服务器设备  
                var loginId = object.LogIn(areaIndex, dvrIP, dvrPort, dvrUser, dvrPass, 0);
                var backId = -1;
                if (loginId >= 0) {
                    starttime = (new Date(starttime.replace(/-/g, "/"))).datetimeFormat("yyyy-MM-dd hh:mm:ss");
                    endtime = (new Date(endtime.replace(/-/g, "/"))).datetimeFormat("yyyy-MM-dd hh:mm:ss");
                    backId = object.PlayBackByTime(areaIndex, dvrChannel, starttime, endtime);
                    if (backId < 0) {
                        alert("录像播放失败");
                    }
                    else {
                        //回放成功后跳转  
                        if (areaIndex == CurrentWindCount - 1) {
                            object.SetSelectedWnd(0);
                        }
                        else {
                            areaIndex++;
                            object.SetSelectedWnd(areaIndex);
                        }
                    }
                }
                else {
                    alert("视频服务器登录失败");
                }
            }
        }
        catch (e) {
        }
    },
    //单一录像回放(异步)
    singleAsyncPlayBackByTime: function (dvrIP, dvrPort, dvrUser, dvrPass, dvrChannel, dvrType, starttime, endtime) {
        try {
            object = document.getElementById($(this).attr("id"));
            if (object) {
                var index = object.GetSelectedWnd();
                //转换成窗口区域序号
                var areaIndex = object.GetAreaByWnd(index);
                //注册设备类型号
                object.SetDeviceType(areaIndex, dvrType);
                //登录视频服务器设备
                var loginId = object.LogIn(areaIndex, dvrIP, dvrPort, dvrUser, dvrPass, 1);
                var backId = -1;
                if (loginId >= 0) {
                    starttime = (new Date(starttime.replace(/-/g, "/"))).datetimeFormat("yyyy-MM-dd hh:mm:ss");
                    endtime = (new Date(endtime.replace(/-/g, "/"))).datetimeFormat("yyyy-MM-dd hh:mm:ss");
                    backId = object.PlayBackByTime(areaIndex, dvrChannel, starttime, endtime);
                    if (backId < 0) {
                        alert("录像播放失败");
                    }
                    else {
                        //回放成功后跳转  
                        if (areaIndex == CurrentWindCount - 1) {
                            //object.SetSelectedWnd(0);
                        }
                        else {
                            areaIndex++;
                            //object.SetSelectedWnd(areaIndex);
                        }
                    }
                }
                else {
                    alert("视频服务器登录失败");
                }
            }
        }
        catch (e) {
        }
    },
    //单一录像回放(同步)
    singlePlayBackByTime: function (dvrIP, dvrPort, dvrUser, dvrPass, dvrChannel, dvrType, starttime, endtime) {
        try {
            object = document.getElementById($(this).attr("id"));
            if (object) {  
                var index = object.GetSelectedWnd();
                //转换成窗口区域序号
                var areaIndex = object.GetAreaByWnd(index);
                //注册设备类型号
                object.SetDeviceType(areaIndex, dvrType);
                //登录视频服务器设备
                var loginId = object.LogIn(areaIndex, dvrIP, dvrPort, dvrUser, dvrPass, 0);
                var backId = -1;
                if (loginId >= 0) { 
                    starttime = (new Date(starttime.replace(/-/g, "/"))).datetimeFormat("yyyy-MM-dd hh:mm:ss"); 
                    endtime = (new Date(endtime.replace(/-/g, "/"))).datetimeFormat("yyyy-MM-dd hh:mm:ss");
                    backId = object.PlayBackByTime(areaIndex, dvrChannel, starttime, endtime);
                    if (backId < 0) {
                        alert("录像播放失败");
                    }
                    else {
                        //回放成功后跳转  
                        if (areaIndex == CurrentWindCount - 1) {
                            object.SetSelectedWnd(0);
                        }
                        else {
                            areaIndex++;
                            object.SetSelectedWnd(areaIndex);
                        }
                    }
                }
                else {
                    alert("视频服务器登录失败");
                }
            }
        }
        catch (e) {
        }
    },
    //录象回放的OSD视频时间(按时间回放)   0000-00-00 00:00:00
    getPlayBackOSDTime: function () {
        var datetime = null;
        try {
            var ocx = document.getElementById($(this).attr("id"));
            if (ocx) {
                var index = ocx.GetSelectedWnd(); 
                var areaIndex = ocx.GetAreaByWnd(index);
                datetime = ocx.GetPlayBackOSDTime(areaIndex);
            }
        }
        catch (e) {
        }
        return datetime;
    },
    //获取时间回放进度时间 格式：yyyy-MM-dd HH:mm:ss
    getPlayBackOSDTime: function () {
        var pos = "";
        try {
            var ocx = document.getElementById($(this).attr("id"));
            if (ocx) {
                var index = ocx.GetSelectedWnd();
                var areaIndex = ocx.GetAreaByWnd(index);
                pos = ocx.GetPlayBackOSDTime(areaIndex);
            }
        }
        catch (e) {
        }
        return pos;
    },
    //获取文件回放进度百分比0~100
    getPlaybackPos: function () {
        var pos = 0;
        try {
            var ocx = document.getElementById($(this).attr("id"));
            if (ocx) {
                var index = ocx.GetSelectedWnd();
                var areaIndex = ocx.GetAreaByWnd(index);
                pos = ocx.GetPlaybackPos(areaIndex);
                if (pos == -1) {
                    pos = 0;
                }
            }
        }
        catch (e) {
        }
        return pos;
    },
    //根据进度百分比回放录象 50%,pos=50
    getPlayBackByPos: function (pos) {
        try {
            var ocx = document.getElementById($(this).attr("id"));
            if (ocx) {
                var index = ocx.GetSelectedWnd();
                var areaIndex = ocx.GetAreaByWnd(index);
                ocx.PlayBackControl(areaIndex, 12, pos);
            }
        }
        catch (e) {
        }
    },

    //按照时间段获取文件列表 
    getFileListByTime: function (DeviceType, dvrIP, dvrPort, dvrUser, dvrPass,
            dvrChannel, starttime, endtime) {
        var FileNameArray = new Array();
        try {
            var ocx = document.getElementById($(this).attr("id"));
            if (ocx) {
                //查找录象文件列表 
                var FindHandle = ocx.FildFile(DeviceType, dvrIP, dvrPort, dvrUser, dvrPass, dvrChannel, starttime, endtime);
                if (FindHandle >= 0) {
                    while (true) {
                        ret = ocx.FindNextFile(FindHandle);
                        if (ret == 1) {
                            //读取文件
                            FileNameArray.push(ocx.GetRecordFileName());
                        }
                        else if (ret == 2) {
                            break;
                        }
                        else if (ret == 4) {
                            break;
                        }
                        else if (ret == 5) {
                            break;
                        }
                    }
                }
            }
        }
        catch (e) {

        }
        return FileNameArray;
    },
    //按文件回放录象 
    playBackByFile: function (fileName) {
        try {
            var ocx = document.getElementById($(this).attr("id"));
            if (ocx) {
                var index = ocx.GetSelectedWnd();
                var areaIndex = ocx.GetAreaByWnd(index);
                ocx.PlayBackByFile(areaIndex, fileName);
            }
        }
        catch (e) {
        }
    },


    //按时间下载到本地
    downloadFileByTime: function (DeviceType, dvrIP, dvrPort, dvrUser, dvrPass,
        dvrChannel, starttime, endtime) {
        var LoadHandle = -1;
        try {
            var ocx = document.getElementById($(this).attr("id"));
            if (ocx) {
                var index = ocx.GetSelectedWnd(); 
                var fileName = '';
                var fd = new ActiveXObject("MSComDlg.CommonDialog");
                fd.Filter = "*.mp4";
                fd.FilterIndex = 2;
                fd.MaxFileSize = 128;
                // 显示对话框
                fd.ShowSave();

                if (fd != null && fd.FileName != "") {
                    fileName = fd.FileName + ".mp4";
                }
                if (fileName != '') {
                    LoadHandle = object.DownloadFileByTime(DeviceType, dvrIP, dvrPort, dvrUser, dvrPass, dvrChannel, starttime, endtime, fileName);
                }
                else {
                    //alert('请在路径对话框中填写文件名');
                }
            }
        }
        catch (e) {
            alert('请安装弹出路径对话框插件');
        }
        return LoadHandle;
    },


    //按文件下载到本地
    downloadFileByFile: function (RecordFileName) {
        var LoadHandle = -1;
        try {
            var ocx = document.getElementById($(this).attr("id"));
            if (ocx) {
                var index = ocx.GetSelectedWnd();
                var fileName = '';
                var fd = new ActiveXObject("MSComDlg.CommonDialog");
                fd.Filter = "*.mp4";
                fd.FilterIndex = 2;
                fd.MaxFileSize = 128;
                // 显示对话框
                fd.ShowSave();

                if (fd != null && fd.FileName != "") {
                    fileName = fd.FileName + ".mp4";
                }
                if (fileName != '') {
                    LoadHandle = ocx.DownloadFileByFile(RecordFileName, fileName);
                    if (LoadHandle == -1) {
                        alert('下载失败');
                    }
                }
                else {
                    //alert('请在对话框中填写文件名');
                }
            }
        }
        catch (e) {
            alert('请安装弹出路径对话框插件');
        }
        return LoadHandle;
    },
    //按文件停止下载到本地 LoadHandle：下载句柄
    stopDownloadFile: function (LoadHandle) {
        try {
            var ocx = document.getElementById($(this).attr("id"));
            if (ocx) {
                ocx.StopDownloadFile(LoadHandle);
            }
        }
        catch (e) {
        }
    },
    //获得下载进度（时间下载和文件下载都可以）
    getDownloadPos: function (LoadHandle) {
        var Pos = 0;
        try {
            var ocx = document.getElementById($(this).attr("id"));
            if (ocx) {
                Pos = ocx.GetDownloadPos(LoadHandle);
            }
        }
        catch (e) {
        }
        return Pos;
    }
});


///***********************************实时视频控制操作方法（云台控制）***********************************************/ 
/*
//Speed:云台速度（1-10）  Stop:0开启 1取消
云台控制命令:
#define		RF_PTZ_UP			1
#define		RF_PTZ_DOWN			2
#define		RF_PTZ_LEFT			3
#define		RF_PTZ_RIGHT		4
#define		RF_PTZ_LEFTUP		5
#define		RF_PTZ_RIGHTUP		6
#define		RF_PTZ_LEFTDOWN		7
#define		RF_PTZ_RIGHTDOWN	8

#define		RF_PTZ_ZOOM_IN		9			//焦距变大
#define		RF_PTZ_ZOOM_OUT		10			//焦距变小
#define		RF_PTZ_FOCUS_IN		11			//焦点前调
#define		RF_PTZ_FOCUS_OUT	12			//焦点后调
#define		RF_PTZ_IRIS_OPEN	13			//光圈扩大
#define		RF_PTZ_IRIS_CLOSE	14			//光圈缩小  

预置位命令:
#define		RF_PTZ_POINT_SET			1
#define		RF_PTZ_POINT_CLEAR			2
#define		RF_PTZ_POINT_CALL			3
*/
var Speed = 2;
jQuery.fn.extend({
    //开启
    ptz_CtrlStart: function (PtzCommand) {
        var ocx = document.getElementById($(this).attr("id"));
        var index = ocx.GetSelectedWnd();
        var areaIndex = ocx.GetAreaByWnd(index);
        ocx.PtzCtrl(areaIndex, PtzCommand, Speed, 0);
    },
    //取消
    ptz_CtrlStop: function (PtzCommand) {
        var ocx = document.getElementById($(this).attr("id"));
        var index = ocx.GetSelectedWnd();
        var areaIndex = ocx.GetAreaByWnd(index);
        ocx.PtzCtrl(areaIndex, PtzCommand, Speed, 1);
    },
    //云台预置位设置
    ptz_PointSet: function (PointIndex) {
        var ocx = document.getElementById($(this).attr("id"));
        var index = ocx.GetSelectedWnd();
        var areaIndex = ocx.GetAreaByWnd(index);
        ocx.PtzPoint(areaIndex, 1, PointIndex);
    },
    //云台预置位清除
    ptz_PointClear: function (PointIndex) {
        var ocx = document.getElementById($(this).attr("id"));
        var index = ocx.GetSelectedWnd();
        var areaIndex = ocx.GetAreaByWnd(index);
        ocx.PtzPoint(areaIndex, 2, PointIndex);
    },
    //云台预置位转向
    ptz_PointCall: function (PointIndex) {
        var ocx = document.getElementById($(this).attr("id"));
        var index = ocx.GetSelectedWnd();
        var areaIndex = ocx.GetAreaByWnd(index);
        ocx.PtzPoint(areaIndex, 3, PointIndex);
    },
    //云台窗口控制转向
    setMousePtz: function () {
        var ocx = document.getElementById($(this).attr("id"));
        var index = ocx.GetSelectedWnd();
        var areaIndex = ocx.GetAreaByWnd(index);
        ocx.setMousePtz(areaIndex);
    }
});
///***********************************录像回放控制操作方法***********************************************/ 
/*控制命令:
#define		RF_PLAY_PAUSE			3			//暂停播放
#define		RF_PLAY_RESTART			4			//恢复播放
#define		RF_PLAY_FAST			5			//快速播放
#define		RF_PLAY_SLOW			6			//慢速播放
#define		RF_PLAY_NORMAL			7			//正常播放
#define		RF_PLAY_FRAME			8			//单帧播放
#define		RF_PLAY_GETTIME			9			//获取已播放时间
#define		RF_PLAY_SETPOS			12			//设置播放位置
#define		RF_PLAY_GETPOS			13			//获取播放位置

#define		RF_PLAY_GETFRAME		14			//获取已播放帧数
#define		RF_PLAY_GETTOTALFRAMES	16			//获取总帧数
#define		RF_PLAY_GETTOTALTIME	17			//获取总时间
*/
var Multer = 1;
jQuery.fn.extend({
    //暂停播放
    playBack_Pause: function () {
        try {
            var ocx = document.getElementById($(this).attr("id"));
            if (ocx) {
                var index = ocx.GetSelectedWnd();
                var areaIndex = ocx.GetAreaByWnd(index);
                ocx.PlayBackControl(areaIndex, 3, 0);
            }
        }
        catch (e) {
        }
    },
    // 恢复正常速度
    playBack_RetStart: function () {
        try {
            var ocx = document.getElementById($(this).attr("id"));
            if (ocx) {
                var index = ocx.GetSelectedWnd();
                var areaIndex = ocx.GetAreaByWnd(index);
                ocx.PlayBackControl(areaIndex, 4, 0);
                Multer = 1;
            }
        }
        catch (e) {
        }
    },
    // 快速播放
    playBack_Fast: function () {
        try {
            var ocx = document.getElementById($(this).attr("id"));
            if (ocx) {
                if (Multer == 16) {
                    alert("快进不能大于16倍");
                    return;
                }
                var index = ocx.GetSelectedWnd();
                var areaIndex = ocx.GetAreaByWnd(index);
                ocx.PlayBackControl(areaIndex, 5, 0);
                Multer = Multer * 2;
                if ($("img[src='/resources/images/Video/快进.png']").length > 0) {
                    if (Multer == 1) {
                        $("img[src='/resources/images/Video/快进.png']").attr("title", "快进");
                    }
                    else {
                        $("img[src='/resources/images/Video/快进.png']").attr("title", "快进X" + Multer);
                    }
                }
                if ($("img[src='/resources/images/Video/后退_1.png']").length > 0) {
                    $("img[src='/resources/images/Video/后退_1.png']").attr("title", "后退");
                }
            }
        }
        catch (e) {
        }
    },
    // 慢速播放
    playBack_Slow: function () {
        try {
            var ocx = document.getElementById($(this).attr("id"));
            if (ocx) {
                var index = ocx.GetSelectedWnd();
                var areaIndex = ocx.GetAreaByWnd(index);
                ocx.PlayBackControl(areaIndex, 6, 0);
                Multer = Multer / 2;
                if (Multer == 0.125) {
                    alert("后退不能小于0.125倍");
                    return;
                }
                if ($("img[src='/resources/images/Video/后退.png']").length > 0) {
                    if (Multer == 1) {
                        $("img[src='/resources/images/Video/后退.png']").attr("title", "后退");
                    }
                    else {
                        $("img[src='/resources/images/Video/后退.png']").attr("title", "后退X" + Multer);
                    }
                }
                if ($("img[src='/resources/images/Video/快进_1.png']").length > 0) {
                    $("img[src='/resources/images/Video/快进_1.png']").attr("title", "快进");
                }
            }
        }
        catch (e) {
        }
    },
    //正常播放
    playBack_Normal: function () {
        try {
            var ocx = document.getElementById($(this).attr("id"));
            if (ocx) {
                var index = ocx.GetSelectedWnd();
                var areaIndex = ocx.GetAreaByWnd(index);
                ocx.PlayBackControl(areaIndex, 7, 0);
                Multer = 1;
            }
        }
        catch (e) {
        }
    }

});


jQuery.fn.extend({
    //恢复正常播放或暂停
    PauseOrResetPlayBack: function (id) {
        try {
            if ($("#" + id).attr("title") == "暂停") {
                $("#" + $(this).attr("id")).playBack_Pause();
                $("#" + id).attr("title", "开始");
                $("#" + id).attr("src", "/resources/images/Video/开始_1.png");

                $("#" + id).mouseover(function () {
                    $(this).attr("src", "/resources/images/Video/开始.png");
                });
                $("#" + id).mouseout(function () {
                    $(this).attr("src", "/resources/images/Video/开始_1.png");
                });
            }
            else {
                $("#" + $(this).attr("id")).playBack_Normal();
                $("#" + id).attr("title", "暂停");
                $("#" + id).attr("src", "/resources/images/Video/暂停_1.png");

                $("#" + id).mouseover(function () {
                    $(this).attr("src", "/resources/images/Video/暂停.png");
                });
                $("#" + id).mouseout(function () {
                    $(this).attr("src", "/resources/images/Video/暂停_1.png");
                });
            }
            if ($("img[src='/resources/images/Video/后退_1.png']").length > 0) {
                $("img[src='/resources/images/Video/后退_1.png']").attr("title", "后退");
            }
            if ($("img[src='/resources/images/Video/快进_1.png']").length > 0) {
                $("img[src='/resources/images/Video/快进_1.png']").attr("title", "快进");
            }
        }
        catch (e) {
        }
    }
});

//***********************************设备对讲和重启，获取设备配置参数****************** 
jQuery.fn.extend({
    //设备对讲 StopTalk= 0 开始  1停止
    deviceTalk: function (StopTalk) {
        try {
            var ocx = document.getElementById($(this).attr("id"));
            if (ocx) {
                var index = ocx.GetSelectedWnd();
                var areaIndex = ocx.GetAreaByWnd(index);
                ocx.DeviceTalk(areaIndex, StopTalk);
            }
        }
        catch (e) {
        }
    },
    //设备重启
    deviceReboot: function (DeviceType, dvrIP, dvrPort, dvrUser, dvrPass) {
        try {
            var ocx = document.getElementById($(this).attr("id"));
            if (ocx) {
                var ret = ocx.DeviceReboot(DeviceType, dvrIP, dvrPort, dvrUser, dvrPass);
                if (ret < 0) {
                    alert("设备重启失败");
                }
            }
        }
        catch (e) {
        }
    },
    // 获得设备通道数量
    getDeviceCamaraNum: function (DeviceType, dvrIP, dvrPort, dvrUser, dvrPass) {
        var camaraNum = 0;
        try {
            var ocx = document.getElementById($(this).attr("id"));
            if (ocx) {
                //设备配置登陆  
                ocx.InitDecode(MaxWinCount);
                var ret = ocx.DeviceLogin(DeviceType, dvrIP, dvrPort, dvrUser, dvrPass);
                if (ret >= 0) {
                    //获得设备通道数量
                    camaraNum = ocx.GetDeviceCamaraNum();
                }
                else {
                    alert("设备配置登陆失败");
                }
            }
        }
        catch (e) {
        }
        return camaraNum;
    },
    // 获得设备通道名称
    getDeviceCamaraName: function () {
        var camaraName = "";
        try {
            var ocx = document.getElementById($(this).attr("id"));
            if (ocx) {
                var index = ocx.GetSelectedWnd();
                var areaIndex = ocx.GetAreaByWnd(index);
                var camaraName = ocx.GetDeviceCamaraName(areaIndex);
            }
        }
        catch (e) {
        }
        return camaraName;
    },
    // 设置设备通道名称
    setDeviceCamaraName: function (CamaraName) {
        try {
            var ocx = document.getElementById($(this).attr("id"));
            if (ocx) {
                var index = ocx.GetSelectedWnd();
                var ret = ocx.SetDeviceCamaraName(CamaraName);
                if (ret >= 0) {
                    alert("设置设备通道名称成功");
                }
                else {
                    alert("设置设备通道名称失败");
                }
            }
        }
        catch (e) {
        }
    },
    // 修改设备用户密码
    setDevicePass: function (DeviceType, dvrIP, dvrPort, dvrUser, dvrPass, dvrNewPass) {
        try {
            var ocx = document.getElementById($(this).attr("id"));
            if (ocx) {
                var index = ocx.GetSelectedWnd();
                var ret = ocx.SetDevicePass(DeviceType, dvrIP, dvrPort, dvrUser, dvrPass, dvrNewPass);
                if (ret >= 0) {
                    alert("修改设备用户密码成功");
                }
                else {
                    alert("修改设备用户密码失败");
                }
            }
        }
        catch (e) {
        }
    }
});
//***********************************比较视频版本号****************** 
//如果不需要更新返回false，否则返回true
jQuery.fn.isUpdateVision = function () {
    var isVision = false;
    try {
        if ($.getCookie("CameraVision", false) != null && $.getCookie("CameraVision", false) != undefined) {
            var ocxCurVision = document.getElementById($(this).attr("id"));
            if (ocxCurVision) {
                var curVision = ocxCurVision.GetVersion().replace(".", "").replace(".", "").replace(".", "").replace(".", "");
                var newVision = $.getCookie("CameraVision", false).replace(".", "").replace(".", "").replace(".", "").replace(".", "");
                if (parseInt(curVision) < parseInt(newVision)) {
                    isVision = true;
                }
            }

        }
    }
    catch (e) {
    }
    return isVision;
};


/******************************************************************************************************************************************
*************************************************会见系统视频和音频调用*******************************************************************
*****************************************************************************************************************************************/

jQuery.fn.extend({
    HJCameraLmtRealPlay: function (lmtIP, lmtPort, lmtUser, lmtPass, lmtType,videoIP, videoPort, videoUser, videoPass, videoChannel, videoServerType,
        audioIP, audioPort, audioUser, audioPass, audioChannel, audioServerType) {
       
        object = document.getElementById($(this).attr("id"));
        if (object) {
            object.SetSelectedWnd(0);

            var index = object.GetSelectedWnd();
            var areaIndex = object.GetAreaByWnd(index);
            //注册设备类型号
            object.SetDeviceType(areaIndex, videoServerType);

            //添加流媒体
            object.AddStreamServer(areaIndex, lmtIP, lmtPort, lmtUser, lmtPass, lmtType);

            //登录视频设备
            var loginId = object.Login(areaIndex, videoIP, videoPort, videoUser, videoPass, 0);
            
            var playId = -1;
            //播放实时视频
            if (loginId >= 0) {
                var playId = object.OpenVideo(areaIndex, videoChannel, 0);
                if (playId >= 0) {
                    if (videoIP == audioIP && videoChannel == audioChannel) {
                        //打开音视频同通道
                        object.VideoSound(areaIndex, 0);
                    }
                    else {
                        //打开音视频同通道
                        object.SetDeviceType(areaIndex + 1, audioServerType);
                        //添加流媒体
                        object.AddStreamServer(areaIndex + 1, lmtIP, lmtPort, lmtUser, lmtPass, lmtType);
                        object.LogIn(areaIndex + 1, audioIP, audioPort, audioUser, audioPass, 0);
                        var audioplayId = object.OpenVideo(areaIndex + 1, audioChannel, 0);
                        if (audioplayId >= 0) {
                            object.VideoSound(areaIndex + 1, 0);
                        }
                    }
                }
                else {
                    alert("实时视频播放失败");
                }
            }
            else {
                alert("视频服务器登录失败");
            }
        }

    },
    HJCameraRealPlay: function (videoIP, videoPort, videoUser, videoPass, videoChannel, videoServerType,
        audioIP, audioPort, audioUser, audioPass, audioChannel, audioServerType) {
        object = document.getElementById($(this).attr("id"));
        if (object) {
            object.SetSelectedWnd(0);

            var index = object.GetSelectedWnd();
            var areaIndex = object.GetAreaByWnd(index);
            //注册设备类型号
            object.SetDeviceType(areaIndex, videoServerType);
            //登录视频设备
            var loginId = object.Login(areaIndex, videoIP, videoPort, videoUser, videoPass, 0);

            var playId = -1;
            //播放实时视频
            if (loginId >= 0) {
                var playId = object.OpenVideo(areaIndex, videoChannel, 0);
                if (playId >= 0) {
                    if (videoIP == audioIP && videoChannel == audioChannel) {
                        //打开音视频同通道
                        object.VideoSound(areaIndex, 0);
                    }
                    else {
                        //打开音视频同通道
                        object.SetDeviceType(areaIndex + 1, audioServerType);
                        object.LogIn(areaIndex + 1, audioIP, audioPort, audioUser, audioPass, 0);
                        var audioplayId = object.OpenVideo(areaIndex + 1, audioChannel, 0);
                        if (audioplayId >= 0) {
                            object.VideoSound(areaIndex + 1, 0);
                        }
                    }
                }
                else {
                    alert("实时视频播放失败");
                }
            }
            else {
                alert("视频服务器登录失败");
            }
        }

    },
    HJCameraPlayBack: function (videoIP, videoPort, videoUser, videoPass, videoChannel, videoServerType,
        audioIP, audioPort, audioUser, audioPass, audioChannel, audioServerType, starttime, endtime) {
        try {
            object = document.getElementById($(this).attr("id"));
            if (object) {
                object.SetSelectedWnd(0);

                var index = object.GetSelectedWnd();
                var areaIndex = object.GetAreaByWnd(index);
                //注册设备类型号
                object.SetDeviceType(areaIndex, videoServerType);
                //登录视频服务器设备
                var loginId = object.LogIn(areaIndex, videoIP, videoPort, videoUser, videoPass, 0);
                var backId = -1;
                if (loginId >= 0) {
                    backId = object.PlayBackByTimeTalk(areaIndex, videoChannel, starttime, endtime);
                    if (backId >= 0) {
                        if (videoIP == audioIP && videoChannel == audioChannel) {
                            //音视频同通道
                            object.VideoSound(areaIndex, 0);
                        }
                        else {
                            object.SetDeviceType(areaIndex + 1, audioServerType);
                            object.LogIn(areaIndex + 1, audioIP, audioPort, audioUser, audioPass, 0);
                            audiobackId = object.PlayBackByTimeTalk(areaIndex + 1, audioChannel, starttime, endtime);
                            if (audiobackId != -1) {
                                object.VideoSound(areaIndex + 1, 0);
                            }
                        }
                    }
                    else {
                        alert("录像播放失败");
                    }
                }
                else {
                    alert("视频服务器登录失败");
                }
            }
        }
        catch (e) {
        }
    },
    //按时间下载到本地(第一次下载视频，第二次下载音频)
    downloadFileByTimeNew: function (videoType, audioType, videoIp, audioIp, videoPort, audioPort, videoUserId, audioUserId, videoPwd, audioPwd,
        videoChannelNum, audioChannelNum, starttime, endtime) {
        var LoadHandleVideo = -1;
        var LoadHandleAudio = -1;
        try {
            var ocx = document.getElementById($(this).attr("id"));
            if (ocx) {
                var index = ocx.GetSelectedWnd();
                var fileName = '';
                var fd = new ActiveXObject("MSComDlg.CommonDialog");
                fd.Filter = "*.mp4";
                fd.FilterIndex = 2;
                fd.MaxFileSize = 128;
                // 显示对话框
                fd.ShowSave();

                if (fd != null && fd.FileName != "") {
                    fileName = fd.FileName + "视频.mp4";
                    if (fileName != '') {
                        LoadHandleVideo = object.DownloadFileByTime(videoType, videoIp, videoPort, videoUserId, videoPwd, videoChannelNum, starttime, endtime, fileName);
                    }
                    else {
                        alert('请在对话框中填写文件名');
                    }

                    fileName = fd.FileName + "音频.mp4";
                    if (fileName != '') {
                        LoadHandleAudio = object.DownloadFileByTime(audioType, audioIp, audioPort, audioUserId, audioPwd, audioChannelNum, starttime, endtime, fileName);
                        if (t) {
                            window.clearInterval(t);
                        }
                        t = window.setInterval(function () {
                            var i = ocx.getDownloadPos(LoadHandleVideo);
                            var k = ocx.getDownloadPos(LoadHandleAudio);
                            if (i == 100 && k == 100) {
                                window.clearInterval(t);
                                if (LoadHandleVideo >= 0 && LoadHandleAudio >= 0) {
                                    ocx.stopDownloadFile(LoadHandleVideo);
                                    ocx.stopDownloadFile(LoadHandleAudio);
                                }
                                //停止下载 
                                $("#spTip").html("下载完成");
                                isLoad = false;
                            }
                            else if (k == -1 || i == -1) {
                                window.clearInterval(t);
                                //停止下载 
                                $("#spTip").html("下载失败");
                                isLoad = false;
                            }
                            else {
                                $("#spTip").html("进度:" + (i + k) / 200 + "/100");
                            }
                        }, 2000);
                    }
                    else {
                        alert('请在对话框中填写文件名');
                    }
                }

            }
        }
        catch (e) {
            alert('请安装弹出路径对话框插件');
        }
        return LoadHandleAudio;
    }
});

//实时或录像时间格式化
Date.prototype.datetimeFormat = function (dateformat) {
    var o = {
        "M+": this.getMonth() + 1, //month 
        "d+": this.getDate(), //day 
        "h+": this.getHours(), //hour 
        "m+": this.getMinutes(), //minute 
        "s+": this.getSeconds(), //second 
        "q+": Math.floor((this.getMonth() + 3) / 3), //quarter 
        "S": this.getMilliseconds() //millisecond 
    }

    if (/(y+)/.test(dateformat)) {
        dateformat = dateformat.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }

    for (var k in o) {
        if (new RegExp("(" + k + ")").test(dateformat)) {
            dateformat = dateformat.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return dateformat;
}