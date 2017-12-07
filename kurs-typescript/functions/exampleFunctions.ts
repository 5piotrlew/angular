class ExampleFunctions {

    msg: string = 'Hello świecie';

    showMsg(): void{
        console.log(this.msg);
    }
    hello(): string {
        return 'Hello świecie, funkcja hello'
    }

    hello1(message: string){
console.log(message)
    }

    hello2(message: string, message2?: string){
        console.log(message + ' ' + message2);
    }

    hello3(message: string, message2 = 'hello3'){
        console.log(message + ' ' + message2);
    }

    hello4 = message => console.log('Witaj świecie, funkcja anonimowa fat arrow' + message);

    hello5 = () => console.log('hello5 bez parametrow');

    hello6 = (message: string): string => {return 'Witaj świecie, funkcja anonimowa fat arrow'}
    
}

var example = new ExampleFunctions();
example.showMsg();
example.hello1('Witaj swiecie, hello1');
example.hello2('Witaj swiecie');
example.hello3('Witaj swiecie');
example.hello4('wywolana');
example.hello5();
example.hello6();