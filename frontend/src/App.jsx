import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import DropPage from "./pages/DropPage";
import FlashSale from "./pages/FlashSale";
import QueuePage from "./pages/QueuePage";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {

  return (

    <Routes>

      <Route path="/" element={<HomePage />} />

      <Route path="/drop" element={<DropPage />} />

      <Route path="/flash" element={<FlashSale />} />

      <Route path="/queue" element={<QueuePage />} />

      <Route path="/checkout" element={<CheckoutPage />} />

      <Route path="/login" element={<LoginPage />} />

      <Route path="/signup" element={<SignupPage />} />

    </Routes>

  );

}

export default App;