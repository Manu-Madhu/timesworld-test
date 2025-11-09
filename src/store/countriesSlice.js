import {
    createSlice
} from '@reduxjs/toolkit';

const initialState = {
    countries: [],
    displayedCount: 12
};

const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        setCountries: (state, action) => {
            state.countries = action.payload;
        },
        setDisplayedCount: (state, action) => {
            state.displayedCount = action.payload;
        }
    },
});

export const {
    setCountries,
    setDisplayedCount
} = countriesSlice.actions;
export default countriesSlice.reducer;