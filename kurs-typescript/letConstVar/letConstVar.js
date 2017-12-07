var LetConstVar = /** @class */ (function () {
    function LetConstVar() {
    }
    LetConstVar.prototype.printNumber = function () {
        var i = 99;
        for (var i = 0; i < 3; i++) {
            console.log(i);
        }
        console.log(i);
    };
    LetConstVar.prototype.checkif = function () {
        var a = 'Jestem A';
        if (true) {
            var b = 'Jestem B';
            console.log(b);
            console.log(a);
        }
        console.log(b);
    };
    LetConstVar.prototype.showConst = function () {
        var num = 100;
        console.log(num);
    };
    return LetConstVar;
}());
var example = new LetConstVar();
example.printNumber();
example.checkif();
example.showConst();
