var string = prompt("String typidagi malumot kiriting")
var nub = +prompt("Number tyipdagi malumot kiriting")
var hayoq = prompt("boolean typidagi malumot kiriting")
alert("hamma malumotlarni to'g'ri kiritganingizga ishonchingiz komilmi?")
alert(`
  ${string} so'z ${typeof string} tipiga mansul
  ${nub} raqami ${typeof nub} tipiga mansul
  ${hayoq} so'z ${typeof Boolean(hayoq)} tipiga mansul
`)