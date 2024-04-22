const tineruser=new Object();// singelton 
//const tinderuser={} //non singleton 
tineruser.id="123"
tineruser.name="manas"
//console.log(tineruser)

const tine={
    email:"ms@mail.com",
    firstname:{
        username:{
            first:"manas"
        }
    }
}
// console.log(tine.firstname.username)
const a1={1:"a",2:"b"}
const a2={3:"c",4:"d"}
const a3=Object.assign({},a1,a2)
console.log(a3)

console.log(Object.keys(tineruser))