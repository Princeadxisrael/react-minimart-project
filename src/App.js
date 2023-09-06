import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductInfo from "./pages/ProductInfo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:id" element={<ProductInfo />} />
      </Routes>
    </div>
  );
}

export default App;
