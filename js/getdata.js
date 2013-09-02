
var Location = (function () {
    function Location(x, y) {
        this.lng = x;
        this.lat = y;
    }

    Location.prototype.getLng = function () {
        return this.lng;
    };

    Location.prototype.getLat = function () {
        return this.lat;
    };

    return Location;
})();

var PointInfo = (function () {
    function PointInfo(x, y, name, address, tel, type) {
        var loc = new Location(x, y);
        this.location = loc;
        this.name = name;
        this.address = address;
        this.tel = tel;
        this.type = type;
    }

    return PointInfo;
})();

var xmlHttp
var baseUrl = "http://www.oneweibo.com/"
function getHealthyServiceData() {
    xmlHttp = GetXmlHttpObject()
    if (xmlHttp == null) {
        alert("Browser does not support HTTP Request")
        return
    }
    var url = baseUrl + "php/getdata.php"
    xmlHttp.onreadystatechange = stateChanged
    xmlHttp.open("GET", url, true)
    xmlHttp.send(null)
}

function stateChanged() {
    if (xmlHttp.readyState == 4 || xmlHttp.readyState == "complete") {
        showData(xmlHttp.responseText);
    }
}

//if (o == undefined) {
//    return "";
//}

function showData(str) {
    str=str.trim();
//    str='﻿{"id":"56","name":"1","address":"2","phone":"3","x":"4","y":"5","description":"6"},{"id":"57","name":"a","address":"b","phone":"c","x":"d","y":"e","description":"f"}';
//    str='{"firstname":"Jesper","surname":"Aaberg","phone":["555-0100","555-0120"]}';
   //str = JSON.stringify(str);
    var arr = JSON.parse(str);
    var string = "";
     var pointArr = Array();
    for (i = 0; i < arr.length; i++) {
        string += arr[i]['id'] + ";\n";
        string += arr[i]['name'] + ";\n";
        string += arr[i]['address'] + ";\n";
        string += arr[i]['phone'] + ";\n";
        string += arr[i]['x'] + ";\n";
        string += arr[i]['y'] + ";\n";
        string += arr[i]['description'] + ";\n";

        var pointInfo = new PointInfo(arr[i]['x'],arr[i]['y'],arr[i]['name'],arr[i]['address'],arr[i]['phone'],arr[i]['description']);
        pointArr.push(pointInfo);
    }
    addmarkers(pointArr);
    document.getElementById('age_text').innerHTML = string;
}

function GetXmlHttpObject() {
    var objXMLHttp = null
    if (window.XMLHttpRequest) {
        objXMLHttp = new XMLHttpRequest()
    }
    else if (window.ActiveXObject) {
        objXMLHttp = new ActiveXObject("Microsoft.XMLHTTP")
    }
    return objXMLHttp
}