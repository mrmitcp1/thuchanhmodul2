class Instructor {
    name:string;
    role:string
    // @ts-ignore
    constructor({name,role="assistant"}={}) {
        this.name = name;
        this.role = role
    }
    renderDetails(){
        console.log(`${this.name} - ${this.role}`)
    }
    static helloWorld(){
        console.log('HelloWorld')
    }
    static CanTeach(instructor: Instructor):boolean{
        return (instructor.role ==='classroom')
    }
}
let junior = new Instructor({'name':'mit'})
let senior = new Instructor({'name':'aice','role':'classroom'})
junior.renderDetails()
senior.renderDetails()
console.log(`${junior.name} can teach ${Instructor.CanTeach(junior)}`);
console.log(`${senior.name} can teach ${Instructor.CanTeach(senior)}`)