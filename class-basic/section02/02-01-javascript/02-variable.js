let 나의변수 = "철수"
// undefined
나의변수
// '철수'
나의변수 = "영희"
// '영희'
const 친구이름 = "철수"
// undefined
친구이름
// '철수'
친구이름 = "영희"
// VM354:1 Uncaught TypeError: Assignment to constant variable.
//     at <anonymous>:1:6
// (anonymous) @ VM354:1Understand this error
const 철수가진돈 = 5000
// undefined
const 영희가진돈 = 3000
// undefined
const 합계금액 = 철수가진돈 + 영희가진돈
// undefined
합계금액
// 8000
const 철수가진돈2 = "5000"
// undefined
const 영희가진돈2 = "3000"
// undefined
const 합계금액2 = 철수가진돈2 + 영희가진돈2
// undefined
합계금액2
// '50003000'
const 철수가진돈3 = "1000"
// undefined
const 영희가진돈3 = 5000
// undefined
const 합계금액3 = 철수가진돈3 + 영희가진돈3
// undefined