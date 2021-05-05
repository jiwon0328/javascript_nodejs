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

// 객체와 프로퍼티
// Property Name : Property value
// propertyName은 암묵적으로 string 취급
// example
let codit = {
  name: '코드잇',
  'born Year' : 2017,
  isVeryNice : true,
  worstCourse : null,
  bestCourse : {
    title : '자바스크립트 프로그래밍 기초',
    language : 'JavaScript'
  }
}

console.log(codeit.name)              // OK
console.log(codit['born year'])       // OK
console.log(codeit['born ' + 'year']) // OK
let propertyName = 'name'             
console.log(codeit[propertyName])     //OK
console.log(codeit.teacher)           // undefined

codeit.teacher = '강영훈'
console.log(codeit.teacher)           // OK

codeit.name = 'codeit'
delete codeit.worstCourse

console.log('name' in codeit)         // OK

// for...in
for (let key in codeit) {
  console.log(key)
  console.log(codeit[key])
}

// method
let greetings = {
  sayHello : function() {
    console.log('Hello!')
  },
  sayHi : function(name) {
    console.log('Hi! ' + name)
  },
  sayBye: function() {
    console.log('Bye!')
  } 
}

greetings.sayHi('Codeit')
greetings['sayHi']('Codeit')


// array
// spllice(startIndex, deleteCount, items)
// shift(), pop(), unshift(value), push(value)
// for...of