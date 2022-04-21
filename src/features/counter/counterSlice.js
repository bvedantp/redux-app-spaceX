import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  status: 'idle',
  mainState: 0
};

export const updateByQuery = createAsyncThunk(
  'counter/updateCount',
  async (query) => {
    const response = await fetch(`https://api.spacexdata.com/v4/launches/${query}`);
    return response.json();
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    
    updateByDate: (state, action) => {
      const updatedState = state.mainState.filter((item)=> {
        const date = new Date(`${item.date_utc}`)
        const start = new Date(`${action.payload.startDate}`)
        const end = new Date(`${action.payload.endDate}`)
        if(date >= start && date <= end) {
          return item
        }
      })
      state.value = updatedState
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateByQuery.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateByQuery.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
        state.mainState = action.payload;
      });
  },
});

export const { updateByDate } = counterSlice.actions;

export default counterSlice.reducer;
