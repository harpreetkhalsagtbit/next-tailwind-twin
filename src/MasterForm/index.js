import { useForm } from 'react-hook-form';
import Form from '../../../components/commons/Form';
import Button from '../../../components/commons/Button';
import ProcessFormSchema from './ProcessSchema';
import StyledGridLayout from '../../../components/Layouts/Columns.style';

const CustomForm = ({ formSchema }) => {
	const defaultValues = {
		firstName: '',
		allowAccess: true,
		// interval: options[1],
		// billingInterval: [adpushupDropdownDataFormat[1]],
		adFormat: { display_name: 'Last 30 Days', value: 'Last 30 Days' },
	};

	const {
		register,
		formState: { errors },
		handleSubmit,
		getValues,
		control,
	} = useForm({
		mode: 'all',
		reValidateMode: 'onChange',
		defaultValues,
	});
	const onSubmit = (data) => {
		console.log(JSON.stringify(data));
	};

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<StyledGridLayout cols={1} rows={2}>
				<ProcessFormSchema
					schema={formSchema}
					register={register}
					control={control}
					defaultValues={defaultValues}
					errors={errors}
				></ProcessFormSchema>
			</StyledGridLayout>
			<Button primary type="submit">
				Save
			</Button>
			<pre>{JSON.stringify(getValues(), null, 3)}</pre>
		</Form>
	);
};

export default CustomForm;
