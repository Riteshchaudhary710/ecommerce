import logo from './logo.svg';
import './App.css';
import Header from './components/header_component/Header';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProductListing from './components/product_component/ProductListing';
import ProductDetails from './components/product_component/ProductDetail';

function App() {
  return (
    <div className="wrap">
      <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<ProductListing/>} exact />
        <Route path="/product/:productId" element={<ProductDetails/>} exact />
        <Route>4O4 Not Found</Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
