var xmlHttp
var baseUrl = "http://www.oneweibo.com/"
function showUser() {
    xmlHttp = GetXmlHttpObject()
    if (xmlHttp == null) {
        alert("Browser does not support HTTP Request")
        return
    }
    var url = baseUrl + "php/getdata.php"
//    url=url+"?q="+str
//    url=url+"&sid="+Math.random()
    xmlHttp.onreadystatechange = stateChanged
    xmlHttp.open("GET", url, true)
    xmlHttp.send(null)
}

function stateChanged() {
    if (xmlHttp.readyState == 4 || xmlHttp.readyState == "complete") {
        showData(xmlHttp.responseText);
        //xmlDoc = xmlHttp.responseXML;
//        document.getElementById("firstname").innerHTML =
//            xmlDoc.getElementsByTagName("firstname")[0].childNodes[0].nodeValue;
//        document.getElementById("lastname").innerHTML =
//            xmlDoc.getElementsByTagName("lastname")[0].childNodes[0].nodeValue;
//        document.getElementById("job").innerHTML =
//            xmlDoc.getElementsByTagName("job")[0].childNodes[0].nodeValue;
//        document.getElementById("age_text").innerHTML = "Age: ";
//        document.getElementById("age").innerHTML =
//            xmlDoc.getElementsByTagName("age")[0].childNodes[0].nodeValue;
//        document.getElementById("hometown_text").innerHTML = "<br/>From: ";
//        document.getElementById("hometown").innerHTML =
//            xmlDoc.getElementsByTagName("hometown")[0].childNodes[0].nodeValue;
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