//singelton
//object literals
const mysym=Symbol("mykey1")
const jsuser={
    name:"manas",
    age:21,
    [mysym]:"mykey4",
    location:"kanpur",
    email:"manas@gmail.com",
    isloggedin:false,
    lastloggedin:["monday","saturday"]
}
// console.log(jsuser["age"])
// console.log(typeof jsuser[mysym])

// jsuser.email="manss@gmail.com"
// Object.freeze(jsuser)
// jsuser.email="ms"
// console.log(jsuser)
jsuser.greeting=function(){
    console.log("hello js user")
}
jsuser.greetin=function(){
    console.log(`hello js user,${this.name}`)
}
console.log(jsuser.greeting())
console.log(jsuser.greetin())