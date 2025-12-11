// function apple(x){
//     console.log(x)
//     if(x<10){
//         apple(x+1)
//     }
// }
// let data = 0
// apple(data)

function factorial(item){
    if(item==0){
        return 1
    }
    return item*factorial(item-1)
}
let data = 5
console.log(factorial(data))