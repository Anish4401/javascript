let name="anish"    
let age=33
let marks=null
console.log(marks);
console.log(typeof name);
/* datatypes--
string=""
number=2 to power of 54
undefined==
boolean=true/false
null=standlone value
symbol=unique

Note--
type of null is object but undefined is undefined.
*/
console.log(typeof age);
console.log(typeof marks);
/* 
comparison between datatypes\
when we compare null with 0 then we get flase as output but when equalise and comapare then it treats null as value 0 which makes it true 
*/
console.log(null>=0);
console.log(null>0);
console.log(null<0);

/* reference datatype (non primittive)--
object , Array , function 
datatypes of object & Array is function and datatype of function is object function .
*/
let myworld= function(){
    name:"anish"
}
console.log(typeof myworld);

let num= ["anish", 1 ,"manish"];
console.log(typeof num);


let id=Symbol(123)
let id1=Symbol(123)
console.log(id===id1); 
 // symbol gives unique value it stores every values uniquely .so if values are same they treats them as different.
console.log(typeof id);


/* stack and heap memory 
here all the primitive datatypes are stored in stack memory where it gets copied but 
in case of heap it gives reference to allocated memory.so if one thing is updated it will 
reference all in the memory on the otherside data remmains same it only copies the data into 
another space.*/


// stack memory 
let name1="anish";
let name2=name1
name2="manish"
console.log(name1);
console.log(name2);

//heap memory

let userone ={
    email:"anishku1686.com",
    age :"22"

}
let usertwo=userone
usertwo.email="manishasn97.com"
console.log(userone.email)
console.log(userone);
