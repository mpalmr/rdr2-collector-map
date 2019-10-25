import React from 'react';
import { render } from 'react-dom';
import App from './components/app';

document.addEventListener('DOMContentLoaded', () => {
	render((
		<App />
	), document.getElementById('root'));
});
