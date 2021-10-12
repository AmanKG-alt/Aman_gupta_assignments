//Qus-1

const a = 5;
console.log(a);
const a = 7;// shows error
 console.log(a);
 // value of a can't changed because it is already assign  5

 //Qus-2
 var a=5;
 if (a==5){
  const b=10;
     console.log(b);
     
 }
 console.log(b); //shows error b is defined only in if block

 //Qus-3
 var Order = {"id":100,"title":"Mobile","price":"Rs."+2000,
printOrder(){
    console.log("Id:"+this.id);
    console.log("Title:"+this.title);
    
},
getPrice(){
    console.log("Price:"+this.price);
}

}

Order.printOrder();
Order.getPrice();
let Order1=Object.assign(Order);

//Qus-4
let Array = ["tom","heena","Akhila"];
    var len=Array.length,output=[]; 
     for(var i=0;i<len;i++)
     {
         output.push(srray[i],someJasonArray[i].length);
       
     }     
    console.log(output);

//Qus-5(a)
function add(a=5,b=10){
	let sum =0;
	sum=a+b;
	return sum;
}
	const Add = add(15,20)
	console.log(Add)


//(b) 
function user(username,...friends){
    console.log("Username: "+ username)
    console.log("List of friends:")
    for ( let i in friends){
        console.log(friends[i])
    }
}
var friends = ["Aasu","Mannu","Deepu"];
user("Aman",...friends);

//(c)
function printCapitalNames(...capitals){
    for( let i in capitals){
        console.log(capitals[i].toUpperCase())
    }
}
 var capitals=["Sonbhadra","Ranchi","Bengaluru","Bhopal","Delhi"];
printCapitalNames(...capitals);


//Qus-6

let n="Aman";
const deskNo=145;
let laptopModel ="thinkpad";
let message= `Hello SYSNET, My name is ${n}, There is some problem raising in my laptop, Laptop model is ${laptopModel} 
and Desk number is ${deskNo}. Please resolve the issue.Thanks`;
console.log(message);


//Qus-7(a)
var arr=["Cricket","Football","Hockey","Tennis"];
for (let i of arr){
    if(i.match(/Hoc/g)){
        document.write(i)
    }
}


//Qus-7(b)

var organization = {name:"Aasu",address:
{
    city: "churk", pincode: 231206
}};   
let {name,address}=organization;
console.log(address.pincode);


//Qus-8

class Account
{
    name: any;
    id: any;
    balance: any;
    constructor(id: any,name: any,balance: any)
    {
        this.id = id;
        this.name = name;
        this.balance = balance; 
    }
}
class SavingsAccount extends Account{
    interest: number;
    constructor(id: number,name: string,balance: number,interest: number)
    {
        super(id,name,balance);
        this.interest = interest;
    }
    totalBalance = () => { this.balance += this.interest;
        console.log(this.balance);};
}
class CurrentAccount extends Account{
    cashCredit: number;
    constructor(id: number,name: string,balance: number,cashCredit: number)
    {
        super(id,name,balance);
        this.cashCredit = cashCredit;
    }
    totalBalance = () => { this.balance += this.cashCredit;
        console.log(this.balance);};
}

let S1 = new SavingsAccount(31,"Aman",300,800);
let S2 = new CurrentAccount(31,"Sumit",400, 500);
S1.totalBalance();
S2.totalBalance();
