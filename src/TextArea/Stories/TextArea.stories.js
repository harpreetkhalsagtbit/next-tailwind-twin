import React from 'react';
import TextArea from '../index';

export default {
	title: 'TextArea/TextArea',
	component: TextArea,
	argTypes: {
		disabled: {
			control: {
				type: 'boolean',
			},
		},
		readOnly: {
			control: {
				type: 'boolean',
			},
		},
	},
};

const Template = (args) => <TextArea {...args} />;
export const DefaultTextArea = Template.bind({});
DefaultTextArea.storyname = 'Default Input Box';
DefaultTextArea.args = {};

export const TextAreaWithValue = Template.bind({});
TextAreaWithValue.storyname = 'Default Input Box';
TextAreaWithValue.args = {
	children: `<script data-cfasync="false" type="text/javascript">
	(function(w, d) {
		var s = d.createElement('script');
		s.src = '//cdn.adpushup.com/43430/adpushup.js';
		s.crossOrigin='anonymous'; 
		s.type = 'text/javascript'; s.async = true;
		(d.getElementsByTagName('head')[0] || d.getElementsByTagName('body')[0]).appendChild(s);
		w.adpushup = w.adpushup || {que:[]};
	})(window, document);
	
	</script>`,
};

export const DisabledTextArea = Template.bind({});
DisabledTextArea.storyname = 'Disabled Input Box';
DisabledTextArea.args = {
	disabled: true,
};

export const FocusedTextArea = Template.bind({});
FocusedTextArea.storyname = 'Focused Input Box';
FocusedTextArea.args = {
	disabled: false,
};
FocusedTextArea.parameters = {
	pseudo: {
		focus: true,
	},
};
