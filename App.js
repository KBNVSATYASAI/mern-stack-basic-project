import React from 'react'
import Twitterloginclone from './ui/twitterloginclone'
import Main from './calculatorbalu/main'
import { LogoutRounded } from '@mui/icons-material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Appbarcomponent from './routingconcept/Appbarcomponent'
import First from './routingconcept/first'
import Second from './routingconcept/second'
import Third from './routingconcept/third'

import Home from './routingconcept/home'
import About from './routingconcept/about'
import Navgationbarcomponent from './routingconcept/navgationbarcomponent'
import Ramu, { Balu, Kavya, Lakshmi } from './nestedrouting/Ramu'
import Contact from './nestedrouting/contact'
import Designappbar from './nestedrouting/designappbar'
import Login from './loginform/login'
export default function App() {
 return (
  <div>
    <Login/>
  </div>
  /* <BrowserRouter>
     <Appbarcomponent />
     <Routes>
      <Route   path='/' element={<First  />}  >    </Route>
       <Route  path='/second' element={<Second  />}  >   </Route> 
       <Route   path='/third' element={<Third  />}  >   </Route>
     </Routes>
     </BrowserRouter>
     */


    /* <BrowserRouter>
     <Navgationbarcomponent/>
     <Routes>
       <Route path='/home' element={<Home />} />
       <Route path='/about' element={<About />} />
      </Routes>
      </BrowserRouter>
        */
      /*<BrowserRouter>
      <Designappbar/>
      <Routes>
        <Route path='/' element={<Contact />} />
        <Route path='ramu' element={<Ramu />}>
          <Route path='balu' element={<Balu />}/>
          <Route path='kavya' element={<Kavya />}/>
          <Route path='lakshmi' element={<Lakshmi />}/>

        </Route>
      </Routes>
      </BrowserRouter>*/

     /*  <div>
       <center><    Twitterloginclone /></center> 
      </div>*/

 )
}