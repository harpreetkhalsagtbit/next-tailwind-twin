import { renderFormElements } from './helper';

const ProcessFormSchema = ({ schema, register, control, defaultValues, errors }) => {
	return schema.map(({ type, name, placeHolder = '', widgetOptions, errorMessage }) => {
		const commonProps = {
			name: name,
			placeHolder: placeHolder,
			formRegisterProps: register(name, widgetOptions),
			formControl: control,
			defaultValue: defaultValues[name] || null,
		};
		return renderFormElements({
			name,
			type,
			placeHolder,
			widgetOptions,
			register,
			errors,
			errorMessage,
			commonProps,
		});
	});
};

export default ProcessFormSchema;
