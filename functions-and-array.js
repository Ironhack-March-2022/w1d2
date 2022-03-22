// functions

function greet(word, name) {
	// console.log('hello ironhackers')
	return word + ' ' + name
}

const greeting = greet('hello', 'jonas')

console.log(greeting)

// const greet = () => {
// 	console.log('hello')
// }

// const name = 'jonas'
// const greeting = greet(name)
// console.log(greeting)

function addNumbers(a, b) {
	const sum = a + b
	return sum
	console.log('hi')
}

function checkNumber(num) {
	if (num === 7) {
		return 'it is seven'
	}
	return 'it is not seven'
}

console.log(checkNumber(7))
const result = addNumbers(5, 3)
console.log(result)


// Arrays - ordered collection of multiple (different) values

const numbers = [2, 4, 6, 8]
// console.table(numbers)
// console.log(numbers[4])

const empty = []
// empty[0] = 'x'
// empty[4] = 'y'
// empty[4] = 'z'
// console.log(typeof empty[1])

// push() -> adds an element to the end of the array
empty.push('a')
empty.push('c')
empty.push('b')
// pop() -> removes an element from the end of the array
empty.pop()


// shift() and unshift()
empty.unshift('x')
empty.shift('g')
console.log(empty)

// check if an array contains a specific element

console.log(empty.indexOf('c'))
if (empty.indexOf('c') !== - 1) {
	console.log('it contains c')
}

// includes() -> returns true or false
if (empty.includes('c')) {
	console.log('it contains c')
}

// splice()
const c = ['usa', 'france', 'uruguay', 'england', 'poland']
// const copy = countries
// countries.splice(1, 1, 'italy')
// console.log(countries)

// write a function 'filterCountries' that get's the countries array
// and returns an array ouf countries that start with the letter 'u'

function filterCountries(countries) {
	// create a new array
	// iterate over countries
	// check the first letter of the country that we are at in the loop 
	// if the letter is a 'u' -> add this country to the filtered array
	const filtered = []
	for (let i = 0; i < countries.length; i++) {
		if (countries[i][0] === 'u') {
			filtered.push(countries[i])
		}
	}
	return filtered
}
const countriesWithU = filterCountries(['uu', 'aa', 'u'])
console.log(countriesWithU)

// for (let i = 0; i < countries.length; i++) {
// 	console.log(countries[i], countries[i + 1])

// }

// for of loop
// for (<one of the elements> of <name of the array>)
// for (let country of countries) {
// 	console.log(country)
// }
