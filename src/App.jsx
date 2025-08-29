import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Home page with all products */}
          <Route path="/" element={<ProductList />} />

          {/* Details page for each product */}
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
