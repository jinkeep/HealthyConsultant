var AF_PRODUCTION = !0;
LazyLoad = function (a) {
    function b(b, c) {
        var i = a.createElement(b), d;
        for (d in c)c.hasOwnProperty(d) && i.setAttribute(d, c[d]);
        return i
    }

    function c(a) {
        var b = f[a], c, i;
        b && (c = b.callback, i = b.urls, i.shift(), h = 0, i.length || (c && c.call(b.context, b.obj), f[a] = null, l[a].length && e(a)))
    }

    function d() {
        var b = navigator.userAgent;
        g = {async: !0 === a.createElement("script").async};
        (g.webkit = /AppleWebKit\//.test(b)) || (g.ie = /MSIE/.test(b)) || (g.opera = /Opera/.test(b)) || (g.gecko = /Gecko\//.test(b)) || (g.unknown = !0)
    }

    function e(o, p, e, w, x) {
        var h =
            function () {
                c(o)
            }, t = "css" === o, u = [], m, s, n, v;
        g || d();
        if (p)if (p = "string" === typeof p ? [p] : p.concat(), t || g.async || g.gecko || g.opera)l[o].push({urls: p, callback: e, obj: w, context: x}); else {
            m = 0;
            for (s = p.length; m < s; ++m)l[o].push({urls: [p[m]], callback: m === s - 1 ? e : null, obj: w, context: x})
        }
        if (!f[o] && (v = f[o] = l[o].shift())) {
            j || (j = a.head || a.getElementsByTagName("head")[0]);
            p = v.urls;
            m = 0;
            for (s = p.length; m < s; ++m)e = p[m], t ? n = g.gecko ? b("style") : b("link", {href: e, rel: "stylesheet"}) : (n = b("script", {src: e}), n.async = !1), n.className = "lazyload",
                n.setAttribute("charset", "utf-8"), g.ie && !t && 10 > i.Version() ? n.onreadystatechange = function () {
                if (/loaded|complete/.test(n.readyState)) {
                    n.onreadystatechange = null;
                    h()
                }
            } : t && (g.gecko || g.webkit) ? g.webkit ? (v.urls[m] = n.href, q()) : (n.innerHTML = '@import "' + e + '";', k(n)) : n.onload = n.onerror = h, u.push(n);
            m = 0;
            for (s = u.length; m < s; ++m)j.appendChild(u[m])
        }
    }

    function k(a) {
        var b;
        try {
            b = !!a.sheet.cssRules
        } catch (i) {
            h += 1;
            200 > h ? setTimeout(function () {
                k(a)
            }, 50) : b && c("css");
            return
        }
        c("css")
    }

    function q() {
        var a = f.css, b;
        if (a) {
            for (b = r.length; 0 <= --b;)if (r[b].href === a.urls[0]) {
                c("css");
                break
            }
            h += 1;
            a && (200 > h ? setTimeout(q, 50) : c("css"))
        }
    }

    var g, j, f = {}, h = 0, l = {css: [], js: []}, r = a.styleSheets, i = {Version: function () {
        var a = 999;
        -1 != navigator.appVersion.indexOf("MSIE") && (a = parseFloat(navigator.appVersion.split("MSIE")[1]));
        return a
    }};
    return{css: function (a, b, c, i) {
        e("css", a, b, c, i)
    }, js: function (a, b, c, i) {
        e("js", a, b, c, i)
    }}
}(this.document);
var mod_mapping = {loader: {min: "loader.js", scripts: "lib/lazyload.js,mods.js,loadmod.js,app/loader-func.js,app/loader-init.js"}, lib: {min: "mod_lib.js", scripts: "lib/class.js,lib/json2.js,lib/underscore.js,lib/CryptoJS/rollups/md5.js"}, jquery: {min: "mod_j.js", scripts: "lib/jquery-1.8.2.min.js,lib/jquery-ui-1.9.1.custom.min.js"}, mapapi: {min: "mod_api.js", scripts: "lib/mapapi/pc.js,lib/mapapi/Plugins/AMap.MouseTool.js,lib/mapapi/Plugins/AMap.OverView.js,lib/mapapi/Plugins/AMap.Scale.js,lib/mapapi/Plugins/AMap.ToolBar.js,lib/mapapi/Plugins/AMap.Hotspot.js,lib/mapapi/Plugins/AMap.MassHotspot.js"},
    core: {min: "mod_c.js", path: "app/core", scripts: "string.js,core-conf.js,core.js,core-event.js,core-cookie.js,core-logger.js,core-shareurl.js,core-state.js,core-helper.js,core-resize.js,core-service.js,core-view.js,core-command.js,city.js,event.js,ad.js,core-sign.js", templates: "core/*.html", depends: "lib,jquery"}, panel: {min: "mod_p.js", path: "app/panel", scripts: "panel-login.js,panel-regionsearch.js,panel-city.js,panel-sms.js,panel-yaanfind.js", templates: "panel/*.html", depends: "core"}, map: {min: "mod_map.js",
        path: "app/map", scripts: "map-conf.js,map.js,map-view.js,map-ui.js,map-state.js,map-event.js,stadiometry.js,mark.js,pano.js", templates: "map/*.html", depends: "core,panel,mapapi"}, search: {min: "mod_s.js", path: "app/search", scripts: "search.js,search-view.js,search-command.js,search-event.js", templates: "search/*.html", depends: "map"}, busline: {min: "mod_bl.js", path: "app/busline", scripts: "busline.js,busline-view.js,busline-command.js,busline-event.js", templates: "busline/*.html", depends: "map"}, route: {min: "mod_r.js",
        path: "app/route", scripts: "route.js,route-view.js,route-command.js,route-event.js", templates: "route/*.html", depends: "map"}, busroute: {min: "mod_br.js", path: "app/busroute", scripts: "busroute.js,busroute-view.js,busroute-command.js", templates: "busroute/*.html", depends: "route"}, drive: {min: "mod_d.js", path: "app/drive", scripts: "drive-conf.js,drive.js,drive-view.js", templates: "drive/*.html", depends: "route"}, walk: {min: "mod_w.js", path: "app/walk", scripts: "walk.js,walk-view.js", templates: "walk/*.html", depends: "route"},
    train: {min: "mod_tra.js", path: "app/train", scripts: "train-view.js", templates: "train/*.html", depends: "core"}, weather: {min: "mod_wea.js", path: "app/weather", scripts: "weather.js,weather-view.js,weather-command.js,weather-event.js", templates: "weather/*.html", depends: "core"}, user: {min: "mod_u.js", scripts: "lib/base64.js,app/user/user.js,app/user/user-command.js,app/user/user-event.js", depends: "core"}, favorite: {min: "mod_fav.js", scripts: "app/favorite/VirtualEarthProjection.js,app/favorite/favorite.js,app/favorite/favorite-view.js,app/favorite/favorite-command.js,app/favorite/favorite-event.js,app/favorite/favorite-service.js,app/favorite/favorite-helper.js",
        templates: "favorite/*.html", depends: "map,user"}, overview: {min: "overview.js", scripts: "lib/lazyload.js,mods.js,loadmod.js,app/overview.js"}}, loadmod = function (a) {
    var b = document.getElementsByTagName("script"), b = b[b.length - 1].src, c = b.substring(0, b.lastIndexOf("/js/") + 4), d = !("undefined" !== typeof AF_PRODUCTION && !0 === AF_PRODUCTION);
    return function (b, k) {
        "string" === typeof b && (b = [b]);
        var q = function (a) {
            return"string" === typeof a ? a.replace(/(^\s+|\s+$)/g, "") : ""
        }, g = {}, j = function (b) {
            for (var c = 0; c < b.length; c++) {
                var i =
                    q(b[c]);
                if (!(1 > i.length)) {
                    var d = a[i];
                    d._loaded || (d = q(d.depends), 0 < d.length && j(d.split(",")), g[i] = a[i])
                }
            }
        };
        j(b);
        var f = [], h;
        for (h in g)for (var l = g[h], r = d && "string" === typeof l.path ? c + l.path + "/" : c, l = d ? l.scripts.split(",") : l.min.split(","), i = 0; i < l.length; i++) {
            var o = q(l[i]);
            0 < o.length && ("http://" === o.toLowerCase().slice(0, 7) ? f.push(o) : f.push(r + o))
        }
        0 < f.length ? LazyLoad.js(f, function () {
            for (var a in g)g[a]._loaded = !0;
            k()
        }) : k()
    }
}(mod_mapping);
(function () {
    for (var a = [], b = 0; 30 > b; b += 2)a.push(String.fromCharCode(Number("686966857195777968696184828569".substr(b, 2))));
    window._LogXEnabled_ = -1 < location.href.indexOf(a.join(""))
})();
function logx(a) {
    window._LogXEnabled_ && console && console.log(a)
}
function setKeyword(a) {
    _.isString(a) && ($("#keywordTxt").val(a), $("#region_search_keyword").val(a))
}
function defaultsearch(a, b, c, d) {
    loadmod("search", function () {
        a = $.trim(a);
        if (!_.isEmpty(a)) {
            AF.Logger.logForm("keywordTxt", {keyword: a});
            AF.Logger.info(AF.Logger.key.temp);
            setKeyword(a);
            var e = AF.Map.getMapObj().getBounds(), k = e.southwest, e = e.northeast;
            (new AF.Command.CitySearch({keyword: a, citycode: _.isEmpty(b) ? AF.StateView.city().citycode : b, region: k.lng + "," + k.lat + ";" + e.lng + "," + e.lat, qii: _.isBoolean(c) ? c : !0, sugg: !0, fitView: d})).run()
        }
    })
}
function queryCircumSearch(a, b, c) {
    loadmod("search", function () {
        a = $.trim(a);
        _.isEmpty(a) || (range = b, (new AF.Command.CircumSearch({keyword: a, refpoi: c, range: range})).run())
    })
}
function regionsearch(a) {
    loadmod("search", function () {
        8 > AF.Map.getMapObj().getZoom() ? defaultsearch(a, "", !0) : (a = $.trim(a), _.isEmpty(a) || (setKeyword(a), AF.Panel.RegionSearch.hide(), $("#regionsearch").children().removeClass("tools_div_click"), displayLeftContainer(), (new AF.Command.RegionSearch({keyword: a})).run()))
    })
}
function loadroute(a) {
    loadmod("route", function () {
        var b = $.trim($("#saddrInput").val()), c = $.trim($("#daddrInput").val());
        !_.isEmpty(b) && !_.isEmpty(c) && (AF.Route.selection(_.isBoolean(a) ? a : !1), AF.rc(null, {data: {saddr: b, daddr: c}, cmd: "confirm"}))
    })
}
function loadbusline(a, b) {
    loadmod("busline", function () {
        var c = a || $.trim($("#busline_input").val());
        if ("" != c) {
            var d = {};
            d.keyword = c;
            b && (d.city = b);
            (new AF.Command.BusLineSearch(d)).run()
        }
    })
}
function highlight(a) {
    $(a).addClass("selected").siblings().removeClass("selected")
}
function iwKeyDownInput(a) {
    $(a).css("color", "black");
    $(".iw_search_detail").hide()
}
function iwBlurInput(a) {
    "" == $.trim(a.value) && ($(a).val("").css("color", "#bbb"), $(".iw_search_detail").show())
}
function iwDetailClick(a, b) {
    var c = $(a).next();
    $(a).next().next();
    c.is(":visible") ? $("#" + b + "_input").focus() : $("#" + b + "_search_input").focus()
}
function setIWAction(a, b, c) {
    var d = ["\u8bf7\u8f93\u5165\u67e5\u8be2\u76ee\u6807", "\u8bf7\u8f93\u5165\u8d77\u70b9", "\u8bf7\u8f93\u5165\u7ec8\u70b9"];
    $(a).addClass("selected").siblings().removeClass("selected");
    var e, a = null;
    switch (c) {
        case "search":
            e = d[0];
            $(".iw_search_detail").css("left", "155px");
            $("#poi_iw_target").hide();
            $("#search_btn_" + b).show();
            $("#route_btn_" + b).hide();
            a = $("#" + b + "_search_input").keydown(function (a) {
                13 === a.keyCode && $("#search_btn_" + b).is(":visible") && $("#search_btn_" + b).children(".poi_infowindow_button").click()
            });
            break;
        case "start":
            e = d[2];
        case "dest":
            e = e || d[1];
            AF._travelFrom = "start" == c;
            $(".iw_search_detail").css("left", "21px");
            $("#search_btn_" + b).hide();
            $("#route_btn_" + b).show();
            a = $("#" + b + "_input");
            break;
        default:
            return
    }
    a.val() ? $(".iw_search_detail").hide() : $(".iw_search_detail").html(e).show()
}
function circumSearch(a, b) {
    $(".iw_search_detail").hide();
    $("#" + b + "_search_input").val(a).css("color", "black");
    $("#search_btn_" + b).is(":visible") && $("#search_btn_" + b).children(".poi_infowindow_button").click()
}
function doCircumSearch(a) {
    loadmod("search", function () {
        var b = AF.el(a + "_input"), c = $.trim(b.value);
        if (!_.isEmpty(c)) {
            var b = AF.eval(b.getAttribute("poi")), d = AF.Map.getMapObj(), e = d.getBounds(), k = e.northeast, e = e.southwest, q = new AMap.LngLat(k.lng, e.lat), k = d.getDistance(k, q), d = d.getDistance(e, q), d = k < d ? k : d;
            (new AF.Command.CircumSearch({keyword: c, refpoi: b, range: 2E3 >= d ? d : 2E3})).run();
            displayLeftContainer()
        }
    })
}
function travel(a, b) {
    loadmod("route", function () {
        AF.Route.mode(a);
        var c = AF.el(b + "_input"), d = $.trim(c.value);
        if (!_.isEmpty(d)) {
            var c = c.getAttribute("poi"), e = {};
            AF._travelFrom ? (AF.Route.start(c), AF.Route.destConfirmed(!1), AF.Route.daddr(d), e.action = "reviewDestByPoi") : (AF.Route.dest(c), AF.Route.startConfirmed(!1), AF.Route.saddr(d), e.action = "reviewStartByPoi");
            AF.rc(null, {data: e, cmd: "confirm"})
        }
    })
}
function setTravelMode(a, b, c) {
    $(b).parent().parent().find("div").each(function () {
        $(this).removeClass("favorite_select")
    });
    $(b).addClass("favorite_select");
    if (a != AF.Route.mode() || !0 == c)AF.Route.mode(a), !1 != c && AF.Route.startConfirmed() && AF.Route.destConfirmed() && (new AF.Command.ConfirmStartEnd).searchRoute()
}
function swapStartDest(a, b) {
    AF.swap(a, b);
    if (AF.Route.startConfirmed() && AF.Route.destConfirmed()) {
        var c = AF.Route.start();
        AF.Route.start(AF.Route.dest());
        AF.Route.dest(c);
        c = AF.Route.selectionKeyWord("start");
        AF.Route.selectionKeyWord("start", AF.Route.selectionKeyWord("dest"));
        AF.Route.selectionKeyWord("dest", c);
        (new AF.Command.ConfirmStartEnd).searchRoute()
    }
}
function changeCity(a) {
    AF.Event.trigger("changecity", a)
}
function displayLeftContainer() {
    "complete" == window.frames.expand_iframe.document.readyState && ($("#main_left").is(":visible") || $("#expandMap", window.frames.expand_iframe.document).click())
}
function overCategory(a) {
    $(a).children(".category_icon_base").css("background-position-y", "-40px");
    $(a).children("a").css({color: "#2273DE", "text-decoration": "underline"})
}
function outCategory(a) {
    $(a).children(".category_icon_base").css("background-position-y", "0");
    $(a).children("a").css({color: "#676767", "text-decoration": "none"})
}
function toggleIWExpand(a) {
    if (!$("#arrowIWExpand" + a).data("events")) {
        var b = function () {
            var b = $("#arrowIWExpand" + a).offset(), d = $("#poi_infowindow_" + a).offset();
            $(document.body).width();
            $("#IWExpand" + a).css({top: b.top - d.top + 13}).show();
            $("#arrowIWExpand" + a).css("border-bottom", "none")
        };
        $("#arrowIWExpand" + a + ",#IWExpand" + a).mouseenter(b).mouseleave(function () {
            $("#IWExpand" + a).hide();
            $("#arrowIWExpand" + a).css("border-bottom", "1px solid #BCBABB")
        }).data("events", !0);
        b()
    }
}
function addFavPoi(a, b) {
    loadFavoriteMod(function () {
        AF.Favorite.addPoi(a, b)
    })
}
function addFavBusline(a) {
    loadFavoriteMod(function () {
        AF.Favorite.addBusline(a)
    })
}
function addFavBusRoute(a) {
    loadFavoriteMod(function () {
        a()
    })
}
function addFavRoute(a) {
    loadFavoriteMod(function () {
        AF.Favorite.addDirve(a)
    })
}
function addFavWalk(a) {
    loadFavoriteMod(function () {
        AF.Favorite.addWalk(a)
    })
}
function loadRouteMod(a) {
    _.isFunction(a) || (a = function () {
        (new AF.Command.DisplayRouteEntry).run()
    });
    loadmod("route", a)
}
function loadBusRouteMod(a) {
    _.isFunction(a) || (a = function () {
    });
    loadmod("busroute", a)
}
function loadDriveRouteMod(a) {
    _.isFunction(a) || (a = function () {
    });
    loadmod("drive", a)
}
function loadWalkRouteMod(a) {
    _.isFunction(a) || (a = function () {
    });
    loadmod("walk", a)
}
function loadBuslineMod(a) {
    _.isFunction(a) || (a = function () {
        (new AF.Command.DisplayBus).run()
    });
    loadmod("busline", a)
}
function loadFavoriteMod(a) {
    _.isFunction(a) || (a = function () {
        (new AF.Command.DisplayFavorite({forceReLoadView: !1})).run()
    });
    loadmod("favorite", a)
}
function loadWeatherMod(a) {
    _.isFunction(a) || (a = function () {
        (new AF.Command.DisplayWeather).run()
    });
    loadmod("weather", a)
}
function sharePoi(a) {
    var b = "shareurl_" + a, a = $("#" + b).val();
    $("#" + b).parent().show();
    AF.ShortUrl.getShortUrl(a, function (a) {
        "E0" == a.status && $("#" + b).val(a.url).parent().show()
    })
}
function msgPoi(a) {
    a = AF.eval($("#" + a).attr("afcd"));
    AF.SMS.Panel.msgPoi(a.sms, a.shareUrl, a)
}
function msgCar(a) {
    a = AF.eval($("#" + a).attr("afcd"));
    AF.SMS.Panel.msgCar(a.sms, a.shareUrl, a)
}
function msgDriveRoute() {
    AF.SMS.Panel.msgDriveRoute()
}
function msgWalkRoute() {
    AF.SMS.Panel.msgWalkRoute()
}
function copyCode(a) {
    a = $("#" + a).val();
    !1 != copy2Clipboard(a) && alert("\u751f\u6210\u7684\u94fe\u63a5\u5730\u5740\u5df2\u7ecf\u590d\u5236\u5230\u7c98\u8d34\u677f\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528Ctrl+V \u8d34\u5230\u9700\u8981\u7684\u5730\u65b9\u53bb\u4e86\u54e6\uff01 ")
}
function copy2Clipboard(a) {
    var b, c = navigator.userAgent.toLowerCase(), d;
    c.match(/msie ([\d.]+)/) || c.match(/firefox\/([\d.]+)/) || ((d = c.match(/chrome\/([\d.]+)/)) ? b = d[1] : c.match(/opera.([\d.]+)/) || c.match(/version\/([\d.]+).*safari/));
    if (b)return alert("\u60a8\u7684Chrome\u5b89\u5168\u9650\u5236\u9650\u5236\u60a8\u8fdb\u884c\u526a\u8d34\u677f\u64cd\u4f5c\uff0c\u8bf7\u5728\u94fe\u63a5\u6587\u672c\u6846\u4e2d\u9009\u62e9\u94fe\u63a5\u590d\u5236\uff08Ctrl+C\uff09\u540e\u5728\u7c98\u8d34\uff08Ctrl+V\uff09\u5230\u522b\u7684\u5730\u65b9"),
        !1;
    if (window.clipboardData)window.clipboardData.clearData(), window.clipboardData.setData("Text", a); else if (-1 != navigator.userAgent.indexOf("Opera"))window.location = a; else if (window.netscape) {
        try {
            netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect")
        } catch (e) {
            return alert("\u60a8\u7684firefox\u5b89\u5168\u9650\u5236\u9650\u5236\u60a8\u8fdb\u884c\u526a\u8d34\u677f\u64cd\u4f5c\uff0c\u8bf7\u6253\u5f00'about:config'\u5c06 signed.applets.codebase_principal_support'\u8bbe\u7f6e\u4e3atrue'\u4e4b\u540e\u91cd\u8bd5"),
                !1
        }
        if (b = Components.classes["@mozilla.org/widget/clipboard;1"].createInstance(Components.interfaces.nsIClipboard))if (c = Components.classes["@mozilla.org/widget/transferable;1"].createInstance(Components.interfaces.nsITransferable)) {
            c.addDataFlavor("text/unicode");
            d = {};
            d = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
            d.data = a;
            c.setTransferData("text/unicode", d, 2 * a.length);
            if (!b)return!1;
            b.setData(c, null, Components.interfaces.nsIClipboard.kGlobalClipboard)
        }
    }
}
function initFeedbackData(a, b) {
    var c = {};
    switch (a) {
        case "poi":
            c.id = b.pid || b.id || b.pguid || b.poiid;
            c.name = b.name;
            c.citycode = b.citycode;
            c.address = b.citycode ? b.address : "";
            c.tel = b.tel;
            c.x = b.x;
            c.y = b.y;
            break;
        case "busline":
            c.id = b.line_id;
            c.citycode = AF.StateView.city().citycode;
            c.name = b.name;
            c.start_time = b.start_time;
            c.end_time = b.end_time;
            c.price = b.total_price;
            c.company = b.company;
            if (b.stationdes && b.stationdes[0] && b.stationdes[0].xy) {
                var d = b.stationdes[0].xy.split(",");
                d && 2 == d.length && (c.x = d[0], c.y = d[1])
            }
            break;
        case "poi_list":
        case "busline_list":
            c.name = b || "";
            break;
        case "road":
            c.name = "road";
            break;
        case "line_bus":
            c.start = AF.Route.start().name;
            c.dest = AF.Route.dest().name;
            c.points = AF.Route.start().x + "," + AF.Route.start().y + "|" + AF.Route.dest().x + "," + AF.Route.dest().y;
            c.type = AF.RouteBusCache.getRouteTypeName();
            c.name = AF.RouteBusCache.showName;
            break;
        case "line_walk":
            c.start = AF.Route.start().name;
            c.dest = AF.Route.dest().name;
            c.points = AF.Route.start().x + "," + AF.Route.start().y + "|" + AF.Route.dest().x + "," + AF.Route.dest().y;
            break;
        case "line_drive":
            c.start = AF.Route.start().name;
            c.dest = AF.Route.dest().name;
            c.type = AF.RouteDrivingCache.getRouteTypeName();
            d = AF.RouteDrivingCache.getAllPoints();
            d.unshift(AF.Route.start().x + "," + AF.Route.start().y + "|" + AF.Route.dest().x + "," + AF.Route.dest().y);
            c.points = d.join("|");
            break;
        default:
            return""
    }
    return JSON.stringify(c)
}
function openFeedback(a, b, c) {
    c = {type: a || "", data: b || "", method: c || "", place: "", tel: "", email: ""};
    "poi" == a && (c.data = AF.eval($("#" + b).attr("afcd")).feedback);
    "poi_not_found" == a && (c.type = "poi");
    if (a = AF.Map.getMapObj())c.place = {center: a.getCenter(), level: a.getZoom()};
    if (a = AF.User.cache())c.tel = a.mobile1 || a.mobile2 || a.mobile3 || "", c.email = a.email || "";
    a = "help/index.html";
    b = "?";
    for (key in c) {
        var d = c[key];
        "" != d && (_.isString(d) || (d = JSON.stringify(d)), a += b + key + "=" + encodeURIComponent(d), b = "&")
    }
    window.open(a);
    return!1
}
function displayInfoLayer(a) {
    loadmod("search", function () {
        AF.Map.displayInfoLayer($("#" + a).is(":checked"))
    })
}
function helpYaan(a, b) {
    AF.Event.trigger("log", {oprCategory: "special-yaan", type: a || ""});
    a = a || "bdp";
    b = b || "028";
    loadmod("search", function () {
        (new AF.Command.SpecialYaan({sugg: !1, type: a, donationCity: b})).run()
    })
}
function donationCity(a) {
    helpYaan("donation", a)
}
function findYaanPerson() {
    var a = $("#personName_input").val();
    loadmod("search", function () {
        (new AF.Command.SpecialYaan({sugg: !1, type: "find", personName: a})).run()
    })
}
function showSatellite(a, b) {
    AF.Map.getMapObj().setZoomAndCenter(16, new AMap.LngLat(a, b));
    $("#displaySatellite").is(":visible") && $("#displaySatellite").click()
}
(function () {
    var a = !1, b = function (b, c) {
        if (!a) {
            a = !0;
            AF.Resize.resizeMap();
            AF.Map.init("map", b, function () {
                (new AF.State.CurrentCityUpdater).run()
            });
            var d = AF.View.getContainer("main_left_container");
            _.isFunction(d.clear2) || (d.clear2 = d.clear, d.clear = function () {
                d.clear2();
                AF.Resize.getDefaultScrollbar().hide()
            });
            AF.View.mainContainer = d;
            AF.Event.init();
            AF.Resize.resizeLeftContainer();
            AF.Event.trigger("pageresize", {height: AF.Resize.height, width: AF.Resize.width});
            AF.iepngfix();
            c && c()
        }
    }, c = function (a) {
        var c =
            AF.ShareUrl.parse(a || location.href);
        if (c)switch (c.type) {
            case "redirect":
                window.location = c.data;
                return;
            case "special":
                if ("yaan" == c.data) {
                    b({}, function () {
                        helpYaan("find")
                    });
                    return
                }
            case "poi":
                c.data.t = c.data.t || "m";
                var g = function (a, d) {
                        var f = new AMap.LngLat(a.x, a.y);
                        a.z = a.z || 13;
                        b({center: f, level: a.z}, function () {
                            var b = AF.View.mainContainer;
                            b.clear();
                            b.add(new AF.View.Default);
                            c.data.t && "k" == c.data.t && $("#displaySatellite").trigger("click");
                            a.pguid = "null" == a.pguid ? null : a.pguid;
                            a.poiid = "null" == a.poiid ? null :
                                a.poiid;
                            a.pid = "null" == a.pid ? null : a.pid;
                            a.id = "null" == a.id ? null : a.id;
                            var g = a.poiid || a.pid || a.id || a.pguid || "";
                            /\w+/.test(g) ? AF.DeepInfo.getByIds([g], function (b) {
                                var c = b.list[g];
                                c ? (b = a.markerId = AF.uniqueId("marker"), b = AF.MapUI.addPoiMarker({id: b, position: f}), _.extend(a, c), c = new AF.View.DeepInfoWindow(_.extend(a, c)), c = AF.MapUI.createPoiIW(c.getHtml(), {offset: {x: -101, y: -77}}), AF.MapUI.bindMarkerIW(b, c), AF.MapUI.openMarkerIW(b)) : AF.Map.addMarkerIW(null, f, a, !0)
                            }) : AF.Map.addMarkerIW(null, f, a, !0);
                            d && d()
                        })
                    },
                    j = c.data;
                j.pid ? loadmod("search", function () {
                    AF.PoiService.poiDetail(j.pid, function (a) {
                        "E0" == a.status && a.poi && 0 < a.poi.length ? g(a.poi[0]) : _.isEmpty(j.name) && _.isEmpty(j.address) ? d(function () {
                            var b = AF.View.mainContainer;
                            b.clear();
                            b.add(new AF.View.Close);
                            b.add(new AF.View.PoiNotFound(_.extend({scope: "\u7cfb\u7edf\u5185", keyword: j.pid}, a)))
                        }) : (delete j.pid, g(j))
                    })
                }) : g(j);
                return;
            case "cmSearch":
                var f = c.data;
                f.t = f.t || "m";
                g = function () {
                    var a = f.z, c = {x: f.x, y: f.y}, d = new AMap.LngLat(f.x, f.y);
                    b({center: d, level: a},
                        function () {
                            f.t && "k" == f.t && $("#displaySatellite").trigger("click");
                            queryCircumSearch(f.name, f.radius, c)
                        })
                };
                g();
                return;
            case "search":
                f = c.data;
                f.t = f.t || "m";
                g = function (a) {
                    var c = f.z || AF.City.getPreferZoom(a.name), d = new AMap.LngLat(a.x, a.y);
                    b({center: d, level: c}, function () {
                        f.t && "k" == f.t && $("#displaySatellite").trigger("click");
                        defaultsearch(f.keyword, a.citycode)
                    })
                };
                "\u4e2d\u56fd" == f.city && (f.city = "\u5168\u56fd");
                var h = AF.City.getCity(f.city);
                h ? g(h) : e(function (a) {
                    g(a)
                }, function () {
                    g(AF.City.getCity("\u5168\u56fd"))
                });
                return;
            case "busline":
                f = c.data;
                f.t = f.t || "m";
                g = function (a) {
                    var c = AF.City.getPreferZoom(a.name), d = new AMap.LngLat(a.x, a.y);
                    b({center: d, level: c}, function () {
                        f.t && "k" == f.t && $("#displaySatellite").trigger("click");
                        loadbusline(f.bus, a.citycode)
                    })
                };
                "\u4e2d\u56fd" == f.city && (f.city = "\u5168\u56fd");
                (h = AF.City.getCity(f.city)) ? g(h) : e(function (a) {
                    g(a)
                }, function () {
                    g(AF.City.getCity("\u5168\u56fd"))
                });
                return;
            case "direction":
                g = function (a) {
                    c.data.t = c.data.t || "m";
                    var d = AF.City.getPreferZoom(a.name), f = new AMap.LngLat(a.x,
                        a.y);
                    b({center: f, level: d}, function () {
                        loadRouteMod(function () {
                            var b = c.data, d = 0, f = {};
                            c.data.t && "k" == c.data.t && $("#displaySatellite").trigger("click");
                            var g = function (c, e, g) {
                                f.drive = g;
                                g = function (b) {
                                    return(b = b ? AF.City.getCity(b) : a) ? b.citycode : a.citycode
                                };
                                c && c.x && c.y ? (AF.Route.start(c), f.saddr = c.name, d = 1) : c ? (AF.Route.saddr(c.name), d = 2) : d = 3;
                                AF.Route.start().citycode = g(b.scity);
                                e && e.x && e.y ? (AF.Route.dest(e), f.daddr = e.name, d += 10) : e ? (AF.Route.daddr(e.name), d += 20) : d += 30;
                                AF.Route.dest().citycode = g(b.dcity);
                                AF.Route.mode(b.dirflgType);
                                AF.Route.sort(b.sortType);
                                switch (d) {
                                    case 11:
                                        (new AF.Command.ConfirmStartEnd(f)).searchRoute();
                                        return;
                                    case 12:
                                        f.action = "reviewStartByPoi";
                                        break;
                                    case 21:
                                        f.action = "reviewDestByPoi";
                                        break;
                                    case 22:
                                        break;
                                    case 33:
                                        return;
                                    default:
                                        (new AF.Command.DisplayRouteEntry).run();
                                        return
                                }
                                (new AF.Command.ConfirmStartEnd(f)).run()
                            }, e = b.saddrinfo, h = b.daddrinfo, k = b.mradinfo;
                            if (e && e.x && e.y && "\u6211\u7684\u4f4d\u7f6e" == e.name) {
                                var j = new AMap.LngLat(e.x, e.y);
                                (new AF.Geocoder).regeocode(j, function (a) {
                                    var b = "\u672a\u77e5\u9053\u8def";
                                    if ("E0" == a.status)try {
                                        b = "" != a.list[0].poilist ? a.list[0].poilist[0].name + "\u9644\u8fd1" : a.list[0].roadlist[0].name + "\u9644\u8fd1"
                                    } catch (c) {
                                    }
                                    e.name = b;
                                    g(e, h, k)
                                })
                            } else h && h.x && h.y && "\u6211\u7684\u4f4d\u7f6e" == h.name ? (j = new AMap.LngLat(h.x, h.y), (new AF.Geocoder).regeocode(j, function (a) {
                                var b = "\u672a\u77e5\u9053\u8def";
                                if ("E0" == a.status)try {
                                    b = "" != a.list[0].poilist ? a.list[0].poilist[0].name + "\u9644\u8fd1" : a.list[0].roadlist[0].name + "\u9644\u8fd1"
                                } catch (c) {
                                }
                                h.name = b;
                                g(e, h, k)
                            })) : g(e, h, k)
                        })
                    })
                };
                e(function (a) {
                        g(a)
                    },
                    function () {
                        g(AF.City.getCity("\u5168\u56fd"))
                    });
                return;
            case "pano":
                var l = function () {
                    AF.Event.unbind("citychanged", l);
                    AF.Event.trigger("EnablePano", c.data)
                };
                AF.Event.bind("citychanged", l)
        }
        a = function () {
            var a = AF.View.mainContainer;
            a.clear();
            a.add(new AF.View.Default)
        };
        AF.State.init();
        var r = AF.State.map();
        if (r.cc && (h = AF.City.getCity(r.cc))) {
            r = AF.City.getPreferZoom(h.name);
            h = new AMap.LngLat(h.x, h.y);
            b({center: h, level: r}, a);
            return
        }
        d(a)
    };
    window.reinitapp = function (b) {
        a = !1;
        c(b)
    };
    var d = function (a) {
        e(function (c) {
            c =
            {center: new AMap.LngLat(c.x, c.y), level: AF.City.getPreferZoom(c.name)};
            b(c, a)
        }, function () {
            b(null, a)
        })
    }, e = function (a, b) {
        _.isFunction(b) && setTimeout(function () {
            b()
        }, 2E3);
        _.isFunction(a) && $.getScript("http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js", function () {
            try {
                var c = AF.City.getCity(remote_ip_info.city);
                a(c)
            } catch (d) {
                b()
            }
        })
    };
    loadmod(["core"], function () {
        loadmod(["map", "search"], function () {
            "undefined" !== typeof RESIZE_TOP_HEIGHT && (AF.Resize.topHeight = RESIZE_TOP_HEIGHT);
            c();
            $("#city_iframe").attr("src",
                "/frm/panel-city.html");
            $("#expand_iframe").attr("src", "/frm/panel-expandmap.html");
            loadmod("user", function () {
                AF.User.loadLoginInfo()
            })
        })
    })
})();
window.onload = function () {
    LazyLoad.js("http://s14.cnzz.com/stat.php?id=5371206&web_id=5371206&show=pic1");
    var a = window._gaq = a || [];
    a.push(["_setAccount", "UA-34876405-1"]);
    a.push(["_trackPageview"]);
    a = document.createElement("script");
    a.type = "text/javascript";
    a.async = !0;
    a.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
    var b = document.getElementsByTagName("script")[0];
    b.parentNode.insertBefore(a, b)
};
