/**
* Created with IntelliJ IDEA.
* User: Louis
* Date: 13-8-28
* Time: 上午10:32
* To change this template use File | Settings | File Templates.
*/
var Greeter = (function () {
    function Greeter(greeting) {
        this.greeting = greeting;
    }
    Greeter.prototype.greet = function () {
        return "<h1>" + this.greeting + "</h1>";
    };
    return Greeter;
})();
;

var v = (function () {
    function v() {
    }
    return v;
})();

var greeter = new Greeter("Hello, world!!");
var str = greeter.greet();
document.body.innerHTML = str;
//# sourceMappingURL=greeter.js.map
