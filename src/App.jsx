import { useEffect,useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-country-state-city/dist/react-country-state-city.css";

import "./App.css"


import { Outlet } from 'react-router'
import FlashScreen from './components/FlashScreen';



const App = () => {
  const [flashEnd, setFlashEnd] = useState(false);
 
  

  useEffect(() => {
    if (flashEnd) {
      document.body.style.overflowY = "auto";
    } else {
      document.body.style.overflowY = "hidden";
    }

    return () => {
      document.body.style.overflowY = "";
    };
  }, [flashEnd]);


  return (
    <>
     <FlashScreen onScrollComplete={() => setFlashEnd(true)} flashEnd={flashEnd} />
      <Outlet />

    </>
  )
}

export default App