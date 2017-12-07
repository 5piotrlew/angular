class LetConstVar {

    printNumber(){
        var i = 99;
        for(var i = 0; i<3; i++){
            console.log(i)
        }
        console.log(i);
    }

    checkif() {
        let a = 'Jestem A';

        if (true) {
            let b = 'Jestem B';
            console.log(b);
            console.log(a);
        }
        console.log(b);
    }

    showConst(){
        const num = 100;
        console.log(num);
        
    }
}

let example = new LetConstVar();
example.printNumber();
example.checkif();
example.showConst();