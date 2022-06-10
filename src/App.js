import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import Hero from './components/Home/Hero';
import About from './components/Home/About';
import Services from './components/Home/Services';
import Portfolio from './components/Home/Portfolio';
import Blogs from './components/Home/Blogs';
import Contact from './components/Home/Contact';
import SiteDetails from './components/Home/SiteDetails';

function App() {
  return (
    <>
      <Navbar>
        <Routes>
          <Route path='/' element={<Hero></Hero>}></Route>
          <Route path='/home' element={<Hero></Hero>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/services' element={<Services></Services>}></Route>
          <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/details/:id' element={<SiteDetails></SiteDetails>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
