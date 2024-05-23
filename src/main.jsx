import React from 'react';
import ReactDOM from 'react-dom/client';
import "./main.css";
import Tabs from "./Tabs.jsx";
import Header from "./Header.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Tabs />
  </React.StrictMode>
)