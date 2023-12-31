import React from 'react';
import ReactDOM from 'react-dom/client';
import Heading from './Header';
import Menu from './Menu';
import UserList from './UserList'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  
  <React.StrictMode>
  <Heading/>
  <Menu/>
  <UserList/>
  

  </React.StrictMode>

 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

