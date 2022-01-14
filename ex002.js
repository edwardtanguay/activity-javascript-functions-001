const isPlainObject = (potentialObject) => {
	return typeof potentialObject === 'object' && !Array.isArray(potentialObject);
};

//1
const data = { a: 1 };
//write your code here 
console.log(isPlainObject(data));
console.log(isPlainObject({ name: 'ok' }));
console.log(isPlainObject([]));
console.log(isPlainObject(1));
console.log(isPlainObject('ok'));