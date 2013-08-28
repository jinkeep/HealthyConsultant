/**
 * Created with IntelliJ IDEA.
 * User: Louis
 * Date: 13-8-28
 * Time: 上午10:32
 * To change this template use File | Settings | File Templates.
 */
class Greeter {
    constructor(public greeting: string) { }
    greet() {
        return "<h1>" + this.greeting + "</h1>";
    }
};

class v{

}

var greeter = new Greeter("Hello, world!!");
var str = greeter.greet();
document.body.innerHTML = str;