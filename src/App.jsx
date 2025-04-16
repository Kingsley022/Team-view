import React, { createContext, useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Home from './pages/Home'

export const AppContext = createContext();

// client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1
    },
  },
})

const App = () => {
  
  const [members, setMembers] = useState([]);

  return (
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider value={{members, setMembers}}>
        <ChakraProvider>
          <Home />
        </ChakraProvider>
      </AppContext.Provider>
    </QueryClientProvider>
  )
}

export default App
