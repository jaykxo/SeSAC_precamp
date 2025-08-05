/* 📱 휴대폰 인증번호 만들기 실습 */

/* ✅ Step 1. 숫자 랜덤 생성 */
Math.random()
// 0.6418706284299483

Math.random() * 1000000
// 421236.62318516144

Math.floor(Math.random() * 1000000)
// 379783

const 나의인증번호 = Math.random() * 1000000
// undefined

나의인증번호
// 284548.43266715255

Math.floor(나의인증번호)
// 284548

Math.random() * 1000000
// 573586.4318990811

Math.floor(Math.random() * 1000000)
// 914567

Math.floor(Math.random() * 1000000)
// 91456

/* ✴️ 여기까지의 과정은 Math.random()이 0~1 사이 소수이기 때문에  
   Math.floor(Math.random() * 1000000)을 하더라도  
    자릿수가 6자리가 아닐 수 있음  
   (예: 091456 → 앞자리 0이 사라져서 91456으로 출력됨) */

/* ✅ Step 2. 숫자를 문자열로 변환 */
String(Math.floor(Math.random() * 1000000))
// '229043'

String(Math.floor(Math.random() * 1000000))
// '39831'

/* ✅ Step 3. 문자열을 고정된 6자리로 포맷팅 */
"1234".padStart(6, "0")
// '001234'

"1234".padStart(6, "N") // ✴️ 숫자가 아닌 문자도 사용 가능
// 'NN1234'

String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
// '090032'

const 인증번호 = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
// undefined

인증번호
// '623864'

인증번호
// '623864'

/* ✴️ 인증번호 변수를 고정값으로 선언하면,  
    다시 실행해도 랜덤 숫자가 계속 바뀌지 않음.  
   → 매번 새로 생성하고 싶으면 '함수'로 만들어야 함 */

/* ✅ Step 4. 랜덤 인증번호 생성 함수로 만들기 */
function 인증번호생성() {
    const 인증번호 = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    console.log(인증번호)
}
// undefined

인증번호생성()
// 714870

인증번호생성()
// 126727

인증번호생성()
// 257588

/* 성공~! */