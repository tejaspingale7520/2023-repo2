import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyComp from './components/MyComp';
import MyClassComp from './components/MyClassComp';
import CountClassComp from './components/CountClassComp';
import CounterComp from './components/CounterComp';
import ConditionamRend from './components/ConditionalRend';
import Multimedia from './components/Multimedia';
import ToggleImg from './components/ToggleImg';
import Parent from './components/Parent';
import Pcolor from './components/Pcolor';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import ComponentOne from './components/ComponentOne';
import Counterincrement from './components/Counterincrement';
import Hovercounter from './components/Hovercounter';
import RefComp from './components/RefComp';
import User from './components/User';
import ErrorBoundary from './components/ErrorBoundary';
import UserForm from './components/UserForm';
import PageNotFound from './components/PageNotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
     
   {/* <Pcolor/> */}
    
  {/* <ComponentOne/> */}
  {/* <Counterincrement/> */}
  {/* <Hovercounter/> */}
  {/* <RefComp/> */}
  {/* <ErrorBoundary>
  <User name="Sanket"/>
  </ErrorBoundary>
  <ErrorBoundary>
  <User name="Shubham"/>
  </ErrorBoundary>
  <ErrorBoundary>
  <User name="Sudhir"/>
  </ErrorBoundary>
  <ErrorBoundary>
  <User name="Suhas"/>
  </ErrorBoundary> */}
  {/* <UserForm/> */}
  {/* <PageNotFound/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
