console.log('my app is running')
// ========================
// What are the data types in JS
// primitive data types
var stringType = 'I am a string'
var numberType = 9
var booleanType = true
var nullType = null
var undefineType

// complex data type
var objectType = {}
var arrayType = []

// /===========================
// JS Loops
// var num = 0
//
// num++ => 0 the adds 1
// ++num => 1
for (var i = 0; i < 3; i++) {
  console.log(i)
}
var i = 3
while (i > 0) {
  console.log(i)
  i--
}
// conditionals
if (true) {
  console.log('run this if true')
} else {
  console.log('run if not true')
}

if (i === 0 || i === 2) {
  console.log('if one or both are true')
}

if (1 === 1 && 2 === 2) {
  console.log('only if both statements are true')
}

if (true) console.log('I am done in one line')

// Ternary

2 < 3 ? console.log('if true') : console.log('if false')
// ========================
// JS Functions
// parameter is name
// function declaration
function myName (name) {
  console.log(name)
}
// argument is tony
myName('tony')
// function expression
var ageFunc = function (age) {
  console.log(age)
}
ageFunc(99)(
  function hi () {
    var h = 'hello'
    console.log(h)
  }())
// ========================
// ========================
// ========================
// ========================
// ========================
// JS Scope
// Global Scope
var globalA = 'A'
// Local Scope
function localFunc () {
  var localA = 'a'
}
localFunc()
console.log(globalA)
console.log(localA)
// ========================
// ========================
// JS Scope
var a = 'a'

function b () {
  a = 'b'
}
function c () {
  a = 'c'
  b()
}

c()
console.log(a)
// / Execution Context
var a = 'a'

function b () {
  var a = 'b'
  function c () {
    console.log(a)
  }
  c()
}
b()
console.log(a)
// Function Hoisting
// ====================
hoistFunc()

function hoistFunc () {
  console.log('hoisted')
}

var notHoisted = function () {
  console.log('call me after')
}

notHoisted()
