import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' },
];

export const postSlice = createSlice({
  name: 'posts',
  initialState: {
    postsArr: initialState,
  },
  reducers: {
    postAdded(state, action) {
      state.postsArr.push(action.payload);
    },
    postUpdated(state, action) {
      // 更新文章内容
      const { id, title, content } = action.payload;
      const existingPost = state.postsArr.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
  },
});

export const selectAllPosts = (state: any) => state.posts.postsArr;

export const selectPostById = (state, postId) =>
  state.posts.postsArr.find((post) => post.id === postId);

export const { postAdded, postUpdated } = postSlice.actions;

export default postSlice.reducer;
