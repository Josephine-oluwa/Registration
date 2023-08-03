import { Provider } from "react-redux"
import { RouterProvider } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import {store }from './global/store'

import {
  persistStore,
} from 'redux-persist'
import { mainRouter } from "./routes/mainRoute"

let persistor = persistStore(store)

import { PersistGate } from 'redux-persist/integration/react'
let client = new QueryClient()

const App = () => {
  return (
    <div>
      < Provider store={store} >
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={client} >
            <RouterProvider router={mainRouter} />
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </div>
  )
}

export default App