import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  // baseUrl: "http://localhost:5000",
  baseUrl: "https://rent-api-7hnw.onrender.com",

  prepareHeaders: (headers, { getState }) => {
    const authState = getState().auth; // Access auth state
    console.log(authState);
    const token = authState?.userInfo?.token; // Access token from auth state
    console.log(token);
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
