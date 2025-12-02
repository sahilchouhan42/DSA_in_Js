let data = [20, 40, 60, 5, 10, 70, 80, 99]
let item = 70
let index = undefined

for(let i=0; i<data.length; i++){
    // console.log(i, data[i])
    if(data[i]===item){
        index = i;
        break;
    }

}
console.log(index)
console.log(data.indexOf(item))