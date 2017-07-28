let name: string = 'muuu'

let isBoole: boolean = false

let number: number = 10;

let arr:number[] = [1,2,3,4,5];
let arr2:Array<number> = [1,2,3,4,5]

let arr3:string[] = ['1', '2'];
let arr4:Array<string> = ['1', '2'];

enum Role {Employee = 3, Mangeer, Admin}
let role: Role = Role.Employee
console.log(role)  //3

let notSure:any = 10;
let notSure2:any[] = [1, '2', false];

function alertName(): void {
    console.log('HAHAHHAHAHAHHAH');
}

传统的JavaScript程序使用函数和基于原型的继承来创建可重用的组件，但对于熟悉使用面向对象方式的程序员来讲就有些棘手，因为他们用的是基于类的继承并且对象是由类构建出来的。
从ECMAScript 2015，也就是ECMAScript 6开始，JavaScript程序员将能够使用基于类的面向对象的方式。 

class Person {
    name:string;
    age:number;
    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }
    print() {
        return this.name + this.age;
    }
}

let persong:Person = new Person('muyy', 23)
console.log(person.print())   //muyy23

class Student extendsPerson {
    gender:string;
    constructor(gender:string) {
        super('muyy',23);
        this.gender = gender;
    }
    tell() {
        console.log(this.name + this.age + this.gender);
    }
}

var student = new Student('mail');
student.tell();    //muyy23mail

class Hello {
    private _name: string;
    private _age: number;
    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this.name = value;
    }
    get age(): number {
        return this._age;
    }
    set age(age: number) {
        if(age>0 && age<100) {
            console.log('age bettwon 0~100');
            return;
        }
        this._age = age;
    }
}

let hello = new Hello();
hello.name = 'muyy';
hello.age = 23
console.log(hello.name)

interface LabelValue {
    label: string;
}

function printLabel(label: LabelValue) {
    console.log(labelObj.label);
}

let myObj = {
    'label' : 'hello Interface'
};

printLabel(myObj);

interface Person {
    name?:string;
    age?:number;
}
function printInfo(info:Person) {
    console.log(info);
}
let info = {
    'name':'muyy',
    'age':23
};

printInfo(info); // {"name": "muyy", "age": 23}
let info2 = {
    "name":"muyy"
};
printInfo(info2); // {"name": "muyy"}


interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) {}
}



aHR0cHM6Ly9naXRodWIuY29tL011WXVueXVu




