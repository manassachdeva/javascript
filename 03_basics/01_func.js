function myne(n1,n2){
    return n1+n2
}
const result=myne(3,5)

console.log(result)
function mq(...num1){
    console.log(num1)
}
console.log(mq(2,3,4,5))
const user={
    name:"mnas",
    price:123
}
function tr2(anyobj){
    console.log(`username is ${anyobj.name} and price is ${anyobj.price}`)
}
tr2(user)