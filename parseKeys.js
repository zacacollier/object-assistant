//Takes a 'start' object as initial argument
//
//Filters all the object's keys that cannot be coerced to "number",
//  returns an array of keys that can be coerced -
//  as an array of Numbers, not Strings

const parseKeys = (start) => {
	return Object.keys(start)
	.filter(key => {
		if (!!+key) return key
	})
	.reduce((array, index) => {
		if (!!index) array.push(+index)
		return array
	}, [])
}

// console.log(parseKeys({ 1: 'jerry', 2: 'elaine', 'kramer': 3, 4: 'george' }));
//  -> '[1, 2, 4]'

module.exports = parseKeys
