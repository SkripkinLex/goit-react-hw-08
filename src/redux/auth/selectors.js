export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectAuthIsRefreshing = (state) => state.auth.isRefreshing;
export const selectIsLoading = (state) => state.auth.loading;
export const selectError = (state) => state.auth.error;