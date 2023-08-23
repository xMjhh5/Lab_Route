
import './001-style/App.css'
import {Routes , Route} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/Login';
import Contact from './Pages/NotFound';
import Nav from './Components/Nav';
import NotFound from './Pages/NotFound';
function App() {

  return (
    <>
      <Nav></Nav>

      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/About" >
          <Route path=''/>
          <Route path='info' element={<About/>}/>
        </Route>
        <Route path="/Contact" element={<Contact/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default App
