import React from 'react';

//Components
import ContentInfo from './components/ContentInfo/ContentInfo';
import Header from './components/Header/Header';

//Redux
import { fetchWeather, setCity } from './redux/slices/weatherSlice';
import { useDispatch } from 'react-redux';

//styles
import './styles/app.scss';
import './styles/normalize.scss';

function App() {
	const dispatch = useDispatch();
	React.useEffect(() => {
		if (localStorage.getItem('activeCity')) {
			dispatch(fetchWeather(localStorage.getItem('activeCity')));
			dispatch(setCity(localStorage.getItem('activeCity')));
		} else {
			dispatch(fetchWeather('Kyiv'));
		}
	}, []);
	return (
		<div className='app-wrapper'>
			<div className='content'>
				<Header />

				<ContentInfo />
			</div>
		</div>
	);
}

export default App;
