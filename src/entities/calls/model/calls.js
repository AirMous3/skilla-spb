import { createSlice } from '@reduxjs/toolkit';

import { callsAPI } from '@/app/api';

const initialState = {
  data: [],
};

export const callsSlice = createSlice({
  name: 'calls',
  initialState,
  reducers: {
    getCalls(state, action) {
      return void (state.data = action.payload.calls);
    },
  },
});

export const callsReducer = callsSlice.reducer;
export const { getCalls } = callsSlice.actions;

// THUNK
export const getCallsTH = (dateStart, dateEnd) => async (dispatch) => {
  const result = await callsAPI.getCalls(dateStart, dateEnd);
  dispatch(getCalls({ calls: result }));
};
