import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PizzaFromApi } from '../../ts/interfacePizza'

// Define a service using a base URL and expected endpoints
export const pizzaApi = createApi({
  reducerPath: 'pizzaApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://64ca3494b2980cec85c315c6.mockapi.io' }),
  endpoints: (builder) => ({
    getPizza: builder.query<PizzaFromApi, string>({
      query: (id) => `/items/${id}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPizzaQuery } = pizzaApi;