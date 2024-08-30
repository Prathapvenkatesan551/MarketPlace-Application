import Footer from './Components/Footer'
import Home from './Components/Home'
import Login from './Components/Login'
import NavBar from './Components/NavBar'
import NewMobile from './Components/NewMobile'
import Signup from './Components/Signup'
import {Route,Routes} from 'react-router-dom'
import NewLap from './Components/NewLap'
import NewBooks from './Components/NewBooks'
function App() {
  return (
    <>
      <NavBar/>
      
        <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/NewMobiles' element={<NewMobile/>}/>
          <Route path='/NewLaptops' element={<NewLap/>}/>
          <Route path='/NewBooks' element={<NewBooks/>}/>
        </Routes>
        {/* <Home/> */}
      <Footer/>
      {/* <Signup/> */}
    </>
  )
}

export default App
