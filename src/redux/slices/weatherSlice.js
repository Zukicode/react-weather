import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

//axios
import axios from 'axios';

//Options For Fetch
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9e867b2923msh8f17763c8e9c08ap173a34jsn799b267eaa5b',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
	},
};

export const fetchWeather = createAsyncThunk(
	'pizzas/fetchWeather',
	async city => {
		const { data } = await axios.get(
			`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,
			options
		);

		localStorage.setItem('activeCity', city);

		return data;
	}
);

const initialState = {
	info: {},
	status: 'loading', // loading, success, error
	activeCity: 'Kyiv',
};

export const weatherSlice = createSlice({
	name: 'weather',
	initialState,
	reducers: {
		setCity(state, action) {
			state.activeCity = action.payload;
		},
	},
	extraReducers: {
		[fetchWeather.pending]: state => {
			state.status = 'loading';
		},

		[fetchWeather.fulfilled]: (state, action) => {
			state.info = action.payload;
			state.status = 'success';
		},

		[fetchWeather.rejected]: state => {
			state.status = 'error';
			state.info = {};
		},
	},
});

export const { setCity, setWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
