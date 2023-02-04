import React from 'react';
import ReactDOM from 'react-dom/client';

//Redux
import { store } from './redux/store';
import { Provider } from 'react-redux';

//Application
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
