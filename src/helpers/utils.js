export default {
	btoa(stringifiedData) {
		// eslint-disable-next-line no-undef
		return Buffer.from(stringifiedData).toString('base64');
	},
	atob(b64Encoded) {
		// eslint-disable-next-line no-undef
		return Buffer.from(b64Encoded, 'base64').toString();
	},
	isNumber(value) {
		return typeof value === 'number';
	},
};

export const comparator = (arr = [], sortBy) => {
	return arr.sort((a, b) => a[sortBy] - b[sortBy]);
};
