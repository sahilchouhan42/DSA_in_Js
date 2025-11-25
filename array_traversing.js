let data = [9, 45, 2, 8, 45, 23, 7, 78, 0, 11, 41, 77]

function findElement(element){
    for(let i=0;i<data.length; i++){
    if(element===i){
        return data[i] = data[element]
    }
} console.log(data[element])
}

console.log(findElement(5))