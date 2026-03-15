import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import DropPage from "./pages/DropPage";
import FlashSale from "./pages/FlashSale";
import QueuePage from "./pages/QueuePage";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";

function App(){

  return(

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<HomePage/>}/>
        <Route path="/drop" element={<DropPage/>}/>
        <Route path="/flash-sale" element={<FlashSale/>}/>
        <Route path="/queue" element={<QueuePage/>}/>
        <Route path="/checkout" element={<CheckoutPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/product/:id" element={<ProductPage/>}/>

      </Routes>

    </BrowserRouter>

  )

}

export default App;