const isPlainObject = (potentialObject) => {
	return typeof potentialObject === 'object' && !Array.isArray(potentialObject);
};

module.exports = { isPlainObject };