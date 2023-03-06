// eslint-disable-next-line no-undef
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'adp-red': '#eb575c',
				'accent-blue': '#337ab7',
				'adp-gray': '#ebf1f2',
				'adp-dark-gray': '#555',
				'adp-primary': '#EA575C',
				'adp-primary-active': '#E62930',
				'adp-border': '#adadad',
				'adp-secondary': '#F5F5F5',
				'adp-tertiary': '#DDDDDD',
				'adp-text-tertiary': '#333333',
				'adp-quarternary': '#D9D9D9',
				'adp-input': '#fff',
				'adp-input-border': '#ccc',
				'adp-input-text-with-value': '#555555',
				'adp-input-disabled': '#FAFAFA',
				'adp-input-focus-border': '#66afe9',
				'adp-input-error': '#c3272b',
				'adp-icon': '#eee',
				'adp-icon-text': '#89949b',
				'adp-textarea-disabled': '#333',
				'adp-green': '#14a314',
				'adp-toggle-gray': '#919191',
				'adp-toggle-disabled': '#eee',
				'adp-list-border': '#8C8C8C',
				'adp-list-active': '#E6E6E6',
				'adp-list-highlight': '#337AB8',
				'adp-list-disabled': '#777',
				'adp-list-open': '#E5E5E5',
				'adp-list-chevron-hover': '#999',
				'adp-list-chevron-active': '#333434',
				'adp-list-text': '#555555',
				'adp-list-hover': '#b3b3b3',
				'adp-table-text': '#555',
				'adp-table-border-heading': 'rgba(0,0,0,.05)',
				'adp-table-border-body': 'rgba(0,0,0,.02)',
				'adp-table-background': '#f7f7f7',
				'adp-table-hover': '#f2f2f2',
				'adp-table-url': '#15c',
				'adp-table-url-hover': '#23527c',
			},
			backgroundImage: {
				'adp-main-bg': "url('/public/assets/images/adp-main-bg.jpg')",
				'adp-logo': "url('/public/assets/images/logo-full.png')",
				'adp-header-logo': "url('/public/assets/images/adpushup-header-logo.png')",
				'adp-loader-logo': "url('/public/assets/images/loaderLogo.png')",
			},
			boxShadow: {
				adp: '0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%)',
				adpInputFocus: 'inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%)',
				adpTableHeader: '0 2px 15px 0 rgb(0 0 0 / 15%)',
				adpTableHeadCell: 'inset 0 -3px 0 0 rgb(0 0 0 / 60%)',
			},
			opacity: {
				65: '.65',
			},
			placeholderColor: {
				'adp-input-placeholder': '#747474',
			},
			margin: {
				'5px': '5px',
				'7px': '7px',
			},
			width: {
				'400px': '400px',
			},
			padding: {
				'5px': '5px',
				'7px': '7px',
			},
			transitionDuration: {
				3000: '3000ms',
			},
			height: {
				'combobox-input': '2.25rem',
			},
			transitionTimingFunction: {
				'adp-table-shadow': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
			},
			fontSize: {
				'15px': '15px',
			},
			fontWeight: {
				425: '425',
			},
		},
	},
	plugins: [],
};
