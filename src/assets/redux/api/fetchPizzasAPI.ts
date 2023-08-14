import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PizzaFromApi } from '../../ts/interfacePizza'

interface PizzaQueryParams {
  category: number | string,
  sortBy: string,
  order: string,
}

// Define a service using a base URL and expected endpoints
export const pizzasApi = createApi({
  reducerPath: 'pizzasApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://64ca3494b2980cec85c315c6.mockapi.io' }),
  tagTypes: ['Pizzas'],
  endpoints: (builder) => ({
    getPizzas: builder.query<PizzaFromApi[], PizzaQueryParams>({
      query: ({ category, sortBy, order }) => `/items?category=${category}&sortBy=${sortBy}&order=${order}`,
      providesTags: (result) => // Something
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Pizzas' as const, id })),
            { type: 'Pizzas', id: 'LIST' },
          ]
          : [{ type: 'Pizzas', id: 'LIST' }],
    }),
    getPizza: builder.query<PizzaFromApi, string>({
      query: (id) => `/items/${id}`,
    }),
    addPizza: builder.mutation({
      query: (body) => ({
        url: 'items',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Pizzas', id: 'LIST' }],
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPizzasQuery, useGetPizzaQuery, useAddPizzaMutation } = pizzasApi;