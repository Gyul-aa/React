import React from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import './App.css'
import Home from './component/Home'
import Header from './component/Header'
import Footer from './component/Footer'
import Comp1 from './component/Comp1'
import Comp2 from './component/Comp2'
import Comp3 from './component/Comp3'
import Param1 from './component/Param1'
import Param2 from './component/Param2'

function App() {
  return (
    <div>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/'element={<Home/>}></Route>
                <Route path='/comp1' element= { <Comp1/>} />
                <Route path='/comp2' element={<Comp2/>} />
                <Route path='/comp3' element={<Comp3/>} />

                <Route path='/param/:id' element={<Param1></Param1>}/>
                <Route path='/param' element={<Param2></Param2>}/>
            </Routes>
            <Footer />  
        </BrowserRouter>
    </div>
  );
}
export default App
