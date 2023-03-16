import { configureStore } from '@reduxjs/toolkit';
import aboutCarouselReducer from '../features/AboutCarousel/AboutCarouselReducer';
import AuthReducer from '../features/Auth/AuthReducer';
import CatalogueQueryReducer from '../features/CatalogueQuery/CatalogueQueryReducer';
import TabReducer from '../features/Tab/TabReducer';
import UserCartReducer from '../features/userCart/UserCartReducer';

export const store = configureStore({
  reducer: {
    aboutCarousel: aboutCarouselReducer,
    tab: TabReducer,
    catalogueQuery: CatalogueQueryReducer,
    auth: AuthReducer,
    userCart: UserCartReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
