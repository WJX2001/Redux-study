import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' },
];

export const postSlice = createSlice({
  name: 'posts',
  initialState: {
    postsArr: initialState
  },
  reducers: {},
});



export default postSlice.reducer;