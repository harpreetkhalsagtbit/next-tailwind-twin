// helper funcs for ComboBox
export const parseNestedOptions = (nestedOptions) => {
	let count = 0;
	return nestedOptions.reduce((acc, item, index) => {
		const { options = [] } = item;
		acc.push(...options);

		if (acc[count] && nestedOptions[index] && nestedOptions[index].type) {
			acc[count].type = nestedOptions[index].type;
			acc[count].count = options.length;
			count += options.length;
		}

		return acc;
	}, []);
};
