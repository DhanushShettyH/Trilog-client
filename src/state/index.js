import { createSlice } from "@reduxjs/toolkit";

//this is global state we can get this data any were
const initialState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
};


//reducers contain functions which can change this global states
//reducer functions to define how the state can be updated

export const authSlice = createSlice({
  name: "auth",										//Creating a slice requires a string name to identify the slice
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {              //actions are just parameter contain data to store inside state
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("user friends non-existent :(");
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },
  },
});

// We can read data from the store with useSelector
// dispatch actions using useDispatch

// export functions
export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } =
  authSlice.actions;
export default authSlice.reducer;
