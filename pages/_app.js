import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'
import { Provider } from 'react-redux'
import cartReducer from '../redux/reducers/cartReducer'
import { createStore } from 'redux'

function MyApp({ Component, pageProps }) {
  const store = createStore(cartReducer);
  return ( 
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
