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
    var arr = JSON.parse(str);
    var string = "";
    // var onerow = arr[0]
    for (i = 0; i < arr.length; i++) {
        string += arr[i]['id'] + ";\n";
        string += arr[i]['name'] + ";\n";
        string += arr[i]['address'] + ";\n";
        string += arr[i]['phone'] + ";\n";
        string += arr[i]['x'] + ";\n";
        string += arr[i]['y'] + ";\n";
        string += arr[i]['description'] + ";\n";
    }
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