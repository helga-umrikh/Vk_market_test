import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Item } from '../models/Item';

export const itemAPI = createApi({
  reducerPath: 'itemAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com',
  }),
  endpoints: (build) => ({
    fetchAllItems: build.query<Item[], void>({
      query: () => ({
        url: '/products'
      }),
    }),
  })
})