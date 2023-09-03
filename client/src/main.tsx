import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux';
import { store } from './store/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
      <App />
      <ToastContainer position='bottom-left' autoClose={3000}/>
    </Provider>
)
