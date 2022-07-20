import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CreateEmployee from './CreateEmployee'
import Login from './Login'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import EmployeeList from './EmployeeList';
import { store } from './app/store'

import { Provider } from 'react-redux'
import UpdateEmployee from './UpdateEmployee';
import DisplayEmployee from './DisplayEmployee';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    {/* <Counter/> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/create" element={<CreateEmployee/>}/>
        <Route path="/list" element={<EmployeeList/>}/>
        <Route path="/app" element={<App/>}/>
        <Route path="/update/:id" element={<UpdateEmployee/>}/>
        <Route path="/display/:id" element={<DisplayEmployee/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
