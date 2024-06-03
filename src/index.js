import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { NetflixRegisterComponent } from './components/NetflixRegisterComponents';
import NetflixIndexComponent from './components/NetflixIndexComponent';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import RegisterComponent from './components/RegisterComponent';
import DataBindingComponent from './components/DataBindingComponent';
import ShoppingComponent from './components/ShoppingComponent';
import EventBindingComponent from './components/EventBindingComponent';
import TwoWayBinding from './components/TwoWayBinding';
import TwoWayClassDemo from './components/TwoWayClassDemo';
import ShoppingClassDemo from './components/ShoppingClassDemo';
import ShoppingClassDemo2 from './components/ShoppingClassDemo2';
import LoginComponent from './components/LoginComponent';
import FormComponent from './components/FormComponent';
// import FormikValidation from './components/FormikValidation';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <FormComponent/> */}
    {/* <FormikValidation/> */}
    {/* <LoginComponent/> */}
    {/* <ShoppingClassDemo2/> */}
    {/* <TwoWayClassDemo/> */}
    {/* <TwoWayBinding/> */}
    {/* {<EventBindingComponent/>} */}
    <ShoppingComponent/>
    {/* <DataBindingComponent /> */}
    {/* <NetflixIndexComponent /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
