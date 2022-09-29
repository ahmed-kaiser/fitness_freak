import './App.css';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';

function App() {
  return(
    <>
      <Navbar/>
      <Main/>
      <Blog/>
      <Footer/>
    </>
  );
}

export default App;
