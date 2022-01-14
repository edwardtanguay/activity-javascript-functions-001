const isPlainObject = (potentialObject) => {
	return typeof potentialObject === 'object' && !Array.isArray(potentialObject) && potentialObject !== null;
};

module.exports = { isPlainObject };