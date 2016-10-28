//Takes a 'start' object as initial argument
//
//Filters all the object's keys that cannot be coerced to "number",
//  then returns an array of keys that can -
//  as an array of Numbers, not Strings
const mapKeys = (start) => {
	return Object.keys(start)
	.filter(key => {
		if (!!+key) return key
	})
	.reduce((array, index) => {
		if (!!index) array.push(+index)
		return array
	}, [])
}

// console.log(mapKeys({ 1: 'jerry', 2: 'elaine', 'kramer': 3, 4: 'george' }));
//  -> '[1, 2, 4]'

module.exports = mapKeys
