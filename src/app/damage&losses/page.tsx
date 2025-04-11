'use client'
import React from 'react'

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

export default function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Example />
    </QueryClientProvider>
  )
}

function Example() {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['repoData'],
    queryFn: async () => {
      const response = await fetch(
        'https://bipadportal.gov.np/api/v1/province/',
      )
      return await response.json()
    },
  })

  if (isPending) return 'Loading Data'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <h1>{data.results.title}</h1>
      <p>{data.next}</p>
      <strong>👀 {data.results.code}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
      <div>{isFetching ? 'Updating...' : ''}</div>
    </div>
  )
}

