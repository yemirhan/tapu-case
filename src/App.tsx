import { LoadingSpinner } from 'components/LoadingSpinner';
import { NavigationBar } from 'components/NavigationBar';
import { Account } from 'containers/Account/Account';
import { Cart } from 'containers/Cart/Cart';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { useAuthContext } from 'providers/AuthProvider';
import React, { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { start } from 'redux/reducers/user';

import { Login } from './containers/Login/Login';
function App() {

  const { loggedIn, loading } = useAppSelector(state => state.$user)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(start())

    return () => {

    }
  }, [])

  return (
    <BrowserRouter>
      <div className='flex flex-col md:flex-row md:h-screen w-full overflow-y-scroll'>
        <NavigationBar />
        {
          loading
            ?
            <LoadingSpinner />
            :
            <div className='md:container md:mx-auto px-6 md:px-0  '>
              <Routes>
                <Route path='/' element={loggedIn === false ? <Login /> : <Account />} />

                <Route path='/cart' element={loggedIn === false ? <Navigate replace to={"/"} /> : <Cart />} />
              </Routes>
            </div>
        }


      </div>

    </BrowserRouter>
  );
}

export default App;
