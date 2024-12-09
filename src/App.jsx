import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-country-state-city/dist/react-country-state-city.css";

import "./App.css"


import { Outlet } from 'react-router'


const App = () => {
  return (
    <>
      <Outlet />

    </>
  )
}

export default App