var mapObj;
var marker = new Array();
var windowsArr = new Array();
function initialize_amap() {
    var position = new AMap.LngLat(116.404, 39.915);//创建中心点坐标
    mapObj = new AMap.Map("map_container", {center: position});//创建地图实例

    mapObj.plugin(["AMap.ToolBar", "AMap.OverView", "AMap.Scale"], function () {
        toolbar = new AMap.ToolBar();
        toolbar.autoPosition = false; //加载工具条
        mapObj.addControl(toolbar);
        overview = new AMap.OverView(); //加载鹰眼
        mapObj.addControl(overview);
        scale = new AMap.Scale(); //加载比例尺
        mapObj.addControl(scale);
    });

    listener = AMap.event.addListener(mapObj, 'click', getXY);
}

function placeSearch(str) {
    mapObj.clearMap();
    document.getElementById("txt_name").value = str;
    var MSearch;
    mapObj.plugin(["AMap.PlaceSearch"], function () {
        MSearch = new AMap.PlaceSearch({ //构造地点查询类
            city: "0571" //城市
        });
        AMap.event.addListener(MSearch, "complete", keywordSearch_CallBack);//返回地点查询结果
        MSearch.search(str); //关键字查询
    });
}

//添加marker&infowindow
function addmarker(i, d) {
    var lngX = d.location.getLng();
    var latY = d.location.getLat();
    var markerOption = {
        map: mapObj,
        icon: "http://api.amap.com/webapi/static/Images/" + (i + 1) + ".png",
        position: new AMap.LngLat(lngX, latY)

    };
    var mar = new AMap.Marker(markerOption);

    marker.push(new AMap.LngLat(lngX, latY));

    var infoWindow = new AMap.InfoWindow({
        content: "<h3><font color=\"#00a6ac\">&nbsp;&nbsp;" + (i + 1) + ". " + d.name + "</font></h3>" + TipContents(d.type, d.address, d.tel),
        size: new AMap.Size(300, 0),
        autoMove: true,
        offset: new AMap.Pixel(0, -30)
    });
    windowsArr.push(infoWindow);
    var aa = function (e) {
        document.getElementById("txt_name").value = d.name;
        document.getElementById("txt_address").value = d.address;
        document.getElementById("txt_phone").value = d.tel;
        document.getElementById("txt_description").value = d.type;
        infoWindow.open(mapObj, mar.getPosition());
    };
    AMap.event.addListener(mar, "click", aa);
}
//回调函数
function keywordSearch_CallBack(data) {
    var resultStr = "";
    var poiArr = data.poiList.pois;
    var resultCount = poiArr.length;

    for (var i = 0; i < resultCount; i++) {
//        resultStr += "<div id='divid" + (i + 1) + "' onmouseover='openMarkerTipById1(" + i + ",this)' onmouseout='onmouseout_MarkerStyle(" + (i + 1) + ",this)' style=\"font-size: 12px;cursor:pointer;padding:0px 0 4px 2px; border-bottom:1px solid #C1FFC1;\"><table><tr><td><img src=\"http://api.amap.com/webapi/static/Images/" + (i + 1) + ".png\"></td>" + "<td><h3><font color=\"#00a6ac\">名称: " + poiArr[i].name + "</font></h3>";
//        resultStr += TipContents(poiArr[i].type, poiArr[i].address, poiArr[i].tel) + "</td></tr></table></div>";
        addmarker(i, poiArr[i]);
    }
    mapObj.setFitView();
    //document.getElementById("result").innerHTML = resultStr;
}
function TipContents(type, address, tel) {  //窗体内容
    if (type == "" || type == "undefined" || type == null || type == " undefined" || typeof type == "undefined") {
        type = "暂无";
    }
    if (address == "" || address == "undefined" || address == null || address == " undefined" || typeof address == "undefined") {
        address = "暂无";
    }
    if (tel == "" || tel == "undefined" || tel == null || tel == " undefined" || typeof address == "tel") {
        tel = "暂无";
    }

    var str = "&nbsp;&nbsp;地址：" + address + "<br />&nbsp;&nbsp;电话：" + tel + " <br />&nbsp;&nbsp;类型：" + type;
    return str;
}
function openMarkerTipById1(pointid, thiss) {  //根据id 打开搜索结果点tip
    thiss.style.background = '#CAE1FF';
    windowsArr[pointid].open(mapObj, marker[pointid]);
}
function onmouseout_MarkerStyle(pointid, thiss) { //鼠标移开后点样式恢复
    thiss.style.background = "";
}