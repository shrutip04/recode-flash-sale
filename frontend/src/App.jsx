import { Routes, Route } from "react-router-dom"

import HomePage from "./pages/HomePage"
import DropPage from "./pages/DropPage"
import FlashSale from "./pages/FlashSale"
import QueuePage from "./pages/QueuePage"
import ProductPage from "./pages/ProductPage"
import CategoryPage from "./pages/CategoryPage"
import CheckoutPage from "./pages/CheckoutPage"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import AdminDashboard from "./pages/AdminDashboard"

function App() {

  return (

    <Routes>

      <Route path="/" element={<HomePage />} />

      <Route path="/drop" element={<DropPage />} />

      <Route path="/flash" element={<FlashSale />} />

      <Route path="/queue" element={<QueuePage />} />

      <Route path="/product" element={<ProductPage />} />

      <Route path="/categories" element={<CategoryPage />} />

      <Route path="/checkout" element={<CheckoutPage />} />

      <Route path="/login" element={<LoginPage />} />

      <Route path="/signup" element={<SignupPage />} />

      <Route path="/admin" element={<AdminDashboard />} />

    </Routes>

  )

}

export default App