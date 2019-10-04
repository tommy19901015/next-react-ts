import React from 'react'
import Layout from '../components/Layout'
import Count from '../components/Count'
import Text from '../components/Text'

import { createStore } from 'redux'
import rootReducer from '../reducers'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
  rootReducer,
  composeWithDevTools()
)


const Index: React.FunctionComponent  = () => {
  
  return (
    <Provider store={ store }>
      <Layout title="Home">
        {/* <h1>Hello Next.js 👋</h1> */}
      </Layout>
      <Count />
      <Text />
    </Provider>    
  )
}
export default Index