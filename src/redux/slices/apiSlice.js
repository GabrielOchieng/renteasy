import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000",
  // baseUrl: "https://swap-society-api.onrender.com",

  prepareHeaders: (headers, { getState }) => {
    const authState = getState().auth; // Access auth state
    const token = authState?.userInfo?.accessToken; // Access token from auth state

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: "api", // Optional reducer path for easier identification
  baseQuery,
  tagTypes: ["User", "House"], // Tag type for user data
  endpoints: (builder) => ({}), // Define your API endpoints here
});
