let ArrObj = [
	{
		name: "Flash",
		age: 25,
	},
	{
		name: "Goku",
		age: 30,
	},
	{
		name: "Luffy",
		age: 18,
	},
]

console.log(ArrObj)

// To access object with age 18

const idx = ArrObj.findIndex(function (element) {
	return element.age === 18
})

console.log("Printing the accessed object index : ", idx)
console.log("Fetched the object : ", ArrObj[idx])

// use map() to get an array of age so that we can sum them using reduce()
const straightArr = ArrObj.map(function (element) {
	return element.age
})
console.log(straightArr)

// apply reduce on straightArr to get sum
let sum = straightArr.reduce((accumulator, current) => {
	return accumulator + current
}, 0) //0 is initial value

console.log(sum)

let sum2 = ArrObj.reduce(function (accumulator, current) {
	return accumulator + current.age
}, 0)

console.log("Sum using only reduce : ", sum2)

const sum3 = ArrObj.map(function (element) {
	return element.age
}).reduce((accumulator, current) => {
	return accumulator + current
}, 0)

console.log("Chained reduce and map : ", sum3)
