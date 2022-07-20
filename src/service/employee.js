import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const employeeApi = createApi({
  reducerPath: 'employeeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api' }),
  endpoints: (builder) => ({
    getEmployeeByName: builder.query({
      query: () => `employee`,
      providesTags:["employees"]
    }),
    getEmployeeByID: builder.query({
      query: (id) => `employee/${id}`,
      
      providesTags:["singleemployee"]
    }),
  addEmployee: builder.mutation({
      query: post => ({
        url: `/employee`,
        method: 'POST',
        body: post
      }),
      invalidatesTags:["employees","singleemployee"]
    }),
    updateEmployee: builder.mutation({
      query: ({empdata,id})=> ({
        url: `/employee/${id}`,
        method: 'PUT',
        body: empdata
      }),
      invalidatesTags:["employees","singleemployee"]
    }),
    deleteEmployee: builder.mutation({
      query: id => ({
        url: `employee/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags:["employees","singleemployee"]
    })
  }),
  
})
console.log(employeeApi)

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetEmployeeByNameQuery , useAddEmployeeMutation ,useUpdateEmployeeMutation,useDeleteEmployeeMutation,useGetEmployeeByIDQuery} = employeeApi
