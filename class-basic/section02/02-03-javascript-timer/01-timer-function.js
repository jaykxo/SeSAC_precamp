function 나의기능() {
    alert("기능이 실행됐어요!")
}
// undefined
setTimeout(나의기능, 3000)
// 3
setTimeout(나의기능, 3000)
// 4
setInterval(나의기능, 2000)
// 5
clearInterval(5)
// undefined