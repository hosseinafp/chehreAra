import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Products from './components/Products';

function App() {
  return (
    <div className="App mx-md-5">
        <Header/>
        <Products/>
        <Footer/>
    </div>
  );
}

export default App;
