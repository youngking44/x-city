import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SliderState {
  slidingIndex: number;
}

const initialState: SliderState = {
  slidingIndex: 0,
};

const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    updateSlide: (state, action: PayloadAction<number>) => {
      state.slidingIndex = action.payload;
    },
  },
});

export const { updateSlide } = sliderSlice.actions;

export default sliderSlice.reducer;
