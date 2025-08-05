const 오늘날짜 = new Date()
// undefined
오늘날짜.getMonth()
// 7
// getMonth()는 0부터 시작하니까 항상 +1 해줘야 진짜 월 !! 띠용
오늘날짜.getDate()
// 5
오늘날짜.getFullYear()
// 2025