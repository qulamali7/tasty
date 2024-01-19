import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.scss";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Wishlist from "./pages/Wishlist";
import Detail from "./pages/Detail";
import Basket from "./pages/Basket";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Add />} />
            <Route path="/wishlist" element={<Wishlist/>} />
            <Route path="/detail/:id" element={<Detail/>} />
            <Route path="/basket" element={<Basket/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
