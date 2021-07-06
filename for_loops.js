// var a = [1,2,3,4,5]

// for(var i = 0;i<a.length;i++){
//     a[i] += 1
// }
// console.log(a)

// var sum = 0
// for(var i = 0;i<a.length;i++){
//     sum += a[i]
// }
// console.log("Tong la: " + sum)

// a.push(-1)
// a.push(69)
// a.push(5.5)
// console.log(a)

// var max_num = 0
// for(var i = 0;i<a.length;i++){
//     if(a[i] > max_num){
//         max_num = a[i]
//     }
// }
// console.log("So lon nhat la: " + max_num)

// a = a.sort()
// console.log(a)


var a = [1,2,3,4,5]

// 5 phan tu 1,2,3,4,5
// --> 5 phan tu moi 2,3,4,5,6
for(var i = 0; i<5; i++){
    // code
    a[i] += 1 // i chạy từ 0 -> 4 
}
console.log(a)

var sum = 0;
for(var i = 0; i<5; i++){
    sum += a[i]
}
console.log(sum)

a.push(5)
a.push(10)
a.push(-1)
console.log(a)

var lon_nhat = a[0]
for(var i = 1;i<8;i++){
    if(lon_nhat < a[i]){
        lon_nhat = a[i]
    }
}
console.log(lon_nhat)

a = a.sort((a,b) => a-b)
console.log(a)