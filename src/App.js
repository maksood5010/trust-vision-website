import logo from './logo.svg';
import './App.css';
import Slider from './Components/Slider/Slider';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import AboutUs from './Components/AboutUs/AboutUs';
import React, { useState } from 'react';
import News from './Components/News/News';
import ContactUs from './Components/ContactUs/ContactUs';
import Blog from './Components/Blog/Blog';
import FloatingMenu from './Components/FloatingMenu/FloatingMenu';
function App() {

  const [activeComponent, setActiveComponent] = useState('home');
  const handleComponentChange = (component) => {
  
    console.log(component)
    setActiveComponent(component);

  };

  return (
    <div>
      <Navbar onComponentChange={handleComponentChange}/>
      {activeComponent === 'home' && <Home onComponentChange={handleComponentChange} />}
      {activeComponent === 'about' && <AboutUs onComponentChange={handleComponentChange} />}
      {activeComponent === 'news' && <News onComponentChange={handleComponentChange} />}
      {activeComponent === 'contact' && <ContactUs onComponentChange={handleComponentChange} />}
      {activeComponent === 'blog' && <Blog onComponentChange={handleComponentChange} />}


<FloatingMenu />
      <Footer />
    </div>


  );
}

export default App;
