import './App.css';
import './assets/css/bootstrap.min.css';
import './assets/css/fontawesome-all.min.css';
import './assets/css/themify-icons.css';
import './assets/css/animate.min.css';
import './assets/css/magnific-popup.css';
import './assets/css/meanmenu.css';
import './assets/css/slick.css';
import './assets/css/default.css';
import './assets/css/style.css';
import './assets/css/responsive.css';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div classNameNameName="App">
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
