import NavBar from './Components/NavBar'
import Signup from './Components/Signup'
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
    <>
      <NavBar/>
     
        <Routes>
          <Route path='/' element={<Signup/>}/>
        </Routes>
      
      {/* <Signup/> */}
    </>
  )
}

export default App
