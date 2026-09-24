import Navbar from './components/navbar'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import Home from './components/home'
import ContactUs from './components/contactus'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
 
 

function App() {
   

  return (
    <>
      
      
         <BrowserRouter>
            <Navbar/>
            <Routes>
               <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/> 
               <Route path='/projects' element={<Projects/>}/>
                <Route path='/skills' element={<Skills/>}/>
                <Route path='/contactus' element={<ContactUs/>}/>

            </Routes>
         
         </BrowserRouter>
    </>
   
  )
}


export default App
