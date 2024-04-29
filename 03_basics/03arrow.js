const user={
    username:"manas",
    price:999,
    welcome:function(){
        console.log(`${this.username} welcome to website`)
    }

}
user.welcome()
const add=(num1,num2)=>{
    return num1+num2
}
console.log(add(2,3))