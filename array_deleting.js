let data = [30, 20,45, 75, 20, 80]
let position = 3
for(let i =position; i<data.length-1; i++){
    data[i] = data[i+1]
    // console.log(i, data[i])
}
data.length = data.length-1
console.log(data)