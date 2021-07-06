var dishes = ["pho","bun","com"]
var new_dish = prompt("Nhap mon moi")
dishes.push(new_dish)

var main = document.getElementById("main")
var first_dish = document.createElement("div") // tạo biến tên là first_dish, biến này hoạt động như một thẻ div
first_dish.innerHTML = dishes[0] // đổi innerHTML là dishes[0] -> "pho"
main.appendChild(first_dish) // thêm thẻ div first_dish vào div có id main

var last_dish = document.createElement("div")
last_dish.innerHTML = dishes[3]
main.appendChild(last_dish)

console.log(dishes)
console.log(dishes.length)
dishes.splice(2,1)

var menu = document.createElement("div")
menu.innerHTML = dishes.join(" ")
main.appendChild(menu)