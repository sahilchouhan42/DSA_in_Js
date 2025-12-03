let data1 = [3,7,12,34, 56, 90]
let data2 = [20, 30, 40, 50]
let mergedArray = []

for(let i=0; i<data1.length; i++){
    // console.log(i, data1[i])
    mergedArray[i] = data1[i] 
} 
for(let i=0; i<data2.length; i++){
    mergedArray[data1.length+i] = data2[i]
}
console.log(mergedArray)
    