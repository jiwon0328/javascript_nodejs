// function example
function teraToGiga(tera) {
  console.log(tera + 'TB는')
  console.log(tera * 1024 +'GB 입니다.')
}

function teraToMega(tera) {
  console.log(tera + 'TB는')
  console.log(tera * 1024 * 1024 + 'MB 입니다.')
}

// TB -> GB 테스트
teraToGiga(2);
// TB -> MB 테스트
teraToMega(2);



// 형 변환(Type Conversion)
// 같음 비교 연산(===, !==, ==, !=)

console.log(1 === '1') // 일치, 불일치(!==) false
console.log(1 === true) // false
console.log(1 == '1') // 동등, 부등(!=) true
console.log(1 == true)  // true

// 템플릿 example1
let year = 2000
let month = 3
let day = 28

console.log('생년월일은 ' + year + '년 ' + month +'월 ' + day + '일 입니다.')
console.log(`생년월일은 ${year}년 ${month}월 ${day}일 입니다.`)

// 템플릿 example2
let myNumber = 3

function getTwice(x) {
  return x * 2
}

console.log(`${myNumber}의 두 배는 ${getTwice(myNumber)}입니다.`)

// Optional Parameters
function introduce(name, age, nationality = '한국') {
  console.log(`제 이름은 ${name}입니다.`)
  console.log(`나이는 ${age}살 이고,`)
  console.log(`국적은 ${nationality}입니다.`)
}

introduce('코드잇', 4, '미국')
console.log('')
introduce('코드잇', 4)