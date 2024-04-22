 const myarr=[1,2,3,4,5]
const myarr1=myarr.join() // convert to string
// console.log(myarr[0])
// myarr.push(8)
// myarr.pop()
// console.log(myarr)
myarr.unshift(9)  // add in start
myarr.shift()  // remove from starting
//console.log(myarr)
//console.log(myarr1)

//slice and splice
//const mynew1=new Array("a",myarr)
//console.log(mynew1)  //['a'[1,2,3,4,5]]

console.log("a",myarr)
const mynew1=myarr.slice(1,3)
console.log(mynew1)
console.log("-----------------------------")

const mynew2=myarr.splice(1,3)
console.log("b",myarr)
console.log(mynew2)

