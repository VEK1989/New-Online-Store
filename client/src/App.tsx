import { Provider, useDispatch } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter/AppRouter'
import store from './store/store'
import style from './App.module.css'
import NavBar from './components/NavBar/NavBar'
import { useEffect } from 'react'
import { AuthActionCreator } from './store/action-creators/authActionCreator'

const App: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(AuthActionCreator.checkAuth())
    }
  }, [])

  return (
    <BrowserRouter>
      <div className={style.wrapper}>
        <NavBar />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
