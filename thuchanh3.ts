class Product {
    private name : string;
    private price : number;
    constructor(name:string,price:number) {
        this.name=name;
        this.price=price;
    }
    getName():string{
        return this.name
    }
    setName(name:string){
        this.name=name
    }
    getPrice():number{
        return this.price
    }
    setPrice(price:number){
        this.price = price
    }
}
class ProductManager {
    private products : Product[]=[];
    constructor() {
    }
    getAll():Product[]{
       return this.products
    }
    add(product:Product){
        this.products.push(product)
    }

}
let laptop=new Product('dell',1000);
let phone = new Product('samsung',2000)
let productManger = new ProductManager();
productManger.add(laptop)
productManger.add(phone)
console.log(productManger.getAll())