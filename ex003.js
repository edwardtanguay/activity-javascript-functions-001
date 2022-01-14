const isPlainObject = (potentialObject) => {
	return typeof potentialObject === 'object' && !Array.isArray(potentialObject) && potentialObject !== null;
};

const makePairs = (obj) => {
	return null;
};

module.exports = { isPlainObject, makePairs };