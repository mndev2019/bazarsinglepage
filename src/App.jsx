import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Contact from './Pages/Contact'
import FlashScreen from './components/FlashScreen'
import Guest from './Pages/Guest'
import "react-country-state-city/dist/react-country-state-city.css";
import AppRedirect from './AppRedirect'
import Community from './Community'
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FlashScreen />} />
          <Route path='/host' element={<Contact />} />
          <Route path='/guest' element={<Guest />} />
          <Route path='/appredirect' element={<AppRedirect />} />
          <Route path='/community/:id' element={<Community />} />



        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
