class Application {
    private name :string;
    static count:number = 0
    constructor(name:string,) {
        this.name=name;
        Application.count++
    }
}
let app1=new Application('a');
let app2=new Application('b');
let app3=new Application('c');
console.log(Application.count)