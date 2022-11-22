
import{BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topmenu from './Topmenu';

import Home from './Home';
import Product from './Product';
import Contact from './Contact';
import About from './About';
import Footer from './Footer';


const App=()=>
{
 
  return(
     <>


  <Router>
       <Topmenu />
         
      
      <Routes>
         <Route exact path="/" element={ <Home/> } />
         <Route path='/Home' element={<Home/>} />
         <Route path='/About' element={<About/>}/>
         <Route path='/Product' element={<Product/>} />         
         <Route path='/Contact' element={<Contact/>}/>

  </Routes>
    
  </Router>

  
     </>
  );
}
 export default App;
