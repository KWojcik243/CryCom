import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Nav from './components/nav'
import Footer from './components/footer'
import Home from './authorized/main_page/home'
import Login from './Unauthorized/login'
import Register from './Unauthorized/register'
import Rooms from  './authorized/rooms/rooms'
import SpecificRoom from './authorized/rooms/specific_room';
import Start from './Unauthorized/start';
import PrivateRoute from './utils/PrivateRoute';
import "./index.css";
import {AuthProvider} from './context/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='*' element={
          <div>
            <Start />
            <Footer />
          </div>}>
        </Route>
        <Route path='/login' element={
          <AuthProvider>
            <Login />
          </AuthProvider>
        }/>
        <Route path='/register' element={
          <AuthProvider>
            <Register />
          </AuthProvider>
        }/>
        <Route path='/home' element={
          <AuthProvider>
            <PrivateRoute component={
              <div>
                <Nav />
                <Home />
                <Footer />
              </div>}>
            </PrivateRoute>
          </AuthProvider>
          
        }></Route>

        
        <Route path='/rooms' element={
          <AuthProvider>
            {/* <PrivateRoute component={ */}
              <div>
                <Nav />
                <Rooms />
                <Footer />
              </div> 
            {/* </PrivateRoute> */}
          </AuthProvider>
          
          }></Route>
          <Route path='/rooms/:roomId' element={
            <AuthProvider>
              <PrivateRoute component={
                <div>
                  <Nav />
                  <SpecificRoom />
                  <Footer />
                </div>} >
              </PrivateRoute>
            </AuthProvider>
          }></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
