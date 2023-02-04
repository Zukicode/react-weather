import { configureStore } from '@reduxjs/toolkit';

//slices
import weather from './slices/weatherSlice';

export const store = configureStore({
	reducer: {
		weather,
	},
});
