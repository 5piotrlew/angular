var ExampleFunctions = /** @class */ (function () {
    function ExampleFunctions() {
        this.msg = 'Hello świecie';
        this.hello4 = function (message) { return console.log('Witaj świecie, funkcja anonimowa fat arrow' + message); };
        this.hello5 = function () { return console.log('hello5 bez parametrow'); };
        this.hello6 = function (message) { return 'Witaj świecie, funkcja anonimowa fat arrow'; };
    }
    ExampleFunctions.prototype.showMsg = function () {
        console.log(this.msg);
    };
    ExampleFunctions.prototype.hello = function () {
        return 'Hello świecie, funkcja hello';
    };
    ExampleFunctions.prototype.hello1 = function (message) {
        console.log(message);
    };
    ExampleFunctions.prototype.hello2 = function (message, message2) {
        console.log(message + ' ' + message2);
    };
    ExampleFunctions.prototype.hello3 = function (message, message2) {
        if (message2 === void 0) { message2 = 'hello3'; }
        console.log(message + ' ' + message2);
    };
    return ExampleFunctions;
}());
var example = new ExampleFunctions();
example.showMsg();
example.hello1('Witaj swiecie, hello1');
example.hello2('Witaj swiecie');
example.hello3('Witaj swiecie');
example.hello4('wywolana');
example.hello5();
example.hello6();
