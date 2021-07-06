var a = [1,3,4,2,5,6,2,4,5,2]

// BAI 1: TÌM SỐ LỚN THỨ HAI TRONG ARRAY
a.sort((a,b) => a-b)
console.log(a[a.length-2])

// BÀI 2: ĐẾM SỐ LƯỢNG PHẦN TỬ DƯƠNG:
var b = [1,-1,2,-2,3,4,-4,5,6,-7,-8]
var so_luong_so_duong = 0
for(var i = 0;i<b.length;i++){
    if(b[i] > 0){
        so_luong_so_duong++
    }
}
console.log(so_luong_so_duong)