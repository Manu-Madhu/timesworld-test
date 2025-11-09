import {
    createSlice
} from '@reduxjs/toolkit';

const initialState = {
    countries: [],
    displayedCount: 12,
    currentFilter: 'All',
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
        },
        setCurrentFilter: (state, action) => {
            state.currentFilter = action.payload;
        },
    },
});

export const {
    setCountries,
    setDisplayedCount,
    setCurrentFilter
} = countriesSlice.actions;
export default countriesSlice.reducer;