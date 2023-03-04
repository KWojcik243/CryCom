import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Nav from './components/nav'
import Footer from './components/footer'
import Home from './main_page/home'
import Login from './Unauthorized/login'
import Register from './Unauthorized/register'
import Rooms from  './rooms/rooms'
import SpecyficRoom from './rooms/specyfic_room';
import Start from './Unauthorized/start';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='*' element={
          <div>
            {/* <Nav />
            <Home />
            <Footer /> */}
            <Start />
            <Footer />
          </div>
        }></Route>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/rooms' element={
          <div>
           <Nav />
           <Rooms />
           <Footer />
          </div>} />
          <Route path='/rooms/1' element={
          <div>
           <Nav />
           <SpecyficRoom/>
           <Footer />
          </div>} />
      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
