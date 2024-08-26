import { apiSlice } from "./apiSlice";

// const HOUSES_URL = "http://localhost:5000/houses";
const HOUSES_URL = "https://rent-api-7hnw.onrender.com/houses";

export const housesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getHouses: builder.query({
      query: (houses) => ({
        url: `${HOUSES_URL}`,
        params: {
          houses,
        },
      }),
    }),
    getHouse: builder.query({
      query: (id) => ({
        url: `${HOUSES_URL}/${id}`,
      }),
    }),

    // Get user's products
    getUserHouses: builder.query({
      query: (userId) => `${HOUSES_URL}/${userId}/houses`, // Include user ID in URL
    }),
    createHouse: builder.mutation({
      query: (house) => ({
        url: `${HOUSES_URL}`,
        method: "POST",
        body: house,
      }),
    }),
    updateHouse: builder.mutation({
      query: (house) => ({
        url: `${HOUSES_URL}/${house._id}`,
        method: "PUT",
        body: house,
      }),
    }),
    deleteHouse: builder.mutation({
      query: (id) => ({
        url: `${HOUSES_URL}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetHousesQuery,
  useGetHouseQuery,
  useGetUserHousesQuery,
  useCreateHouseMutation,
  useUpdateHouseMutation,
  useDeleteHouseMutation,
} = housesApiSlice;
