import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DropPage from "./pages/DropPage";
import FlashSale from "./pages/FlashSale";
import QueuePage from "./pages/QueuePage";
import CheckoutPage from "./pages/CheckoutPage";
import AdminDashboard from "./pages/AdminDashboard";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route path="/drops" element={<DropPage />} />

        <Route path="/flash-sale" element={<FlashSale />} />

        <Route path="/queue" element={<QueuePage />} />

        <Route path="/checkout" element={<CheckoutPage />} />

        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="/home" element={<HomePage />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;