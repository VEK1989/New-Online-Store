import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter/AppRouter'
import store from './store/store'
import style from './App.module.css'
import NavBar from './components/NavBar/NavBar'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={style.wrapper}>
        <Provider store={store}>
          <NavBar />
          <AppRouter />
        </Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
