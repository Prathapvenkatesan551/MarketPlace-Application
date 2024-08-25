import Footer from './Components/Footer'
import Home from './Components/Home'
import Login from './Components/Login'
import NavBar from './Components/NavBar'
import Signup from './Components/Signup'
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
    <>
      <NavBar/>
      
        <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='/Login' element={<Login/>}/>
        </Routes>
        <Home/>
      <Footer/>
      {/* <Signup/> */}
    </>
  )
}

export default App
