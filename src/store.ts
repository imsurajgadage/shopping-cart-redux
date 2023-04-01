import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./features/Cart/CartSlice";
import AdminSlice from "./features/Admin/AdminSlice";

export const store = configureStore({
  reducer: {
    cart: CartSlice,
    admin: AdminSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
