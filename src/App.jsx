import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Contact from './Pages/Contact'
import FlashScreen from './components/FlashScreen'
import Guest from './Pages/Guest'
import "react-country-state-city/dist/react-country-state-city.css";
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FlashScreen/>}/>
          <Route path='/host' element={<Contact />} />
          <Route path='/guest' element={<Guest/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
