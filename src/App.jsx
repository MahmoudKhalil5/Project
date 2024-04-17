import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Pages/Nav";
import Footer from "./components/Pages/Footer";
import Home from "./components/Pages/Home/index";
import About from "./components/Pages/About/index";
import Menu from "./components/Pages/Menu/index";
import OrderOnline from "./components/Pages/OrderOnline";
import Login from "./components/Pages/Login";
import BookingPage from "./components/Pages/Booking/index";
import ConfirmationBookingPage from "./components/Pages/Booking/ConfirmedBooking";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" exact element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Booking" element={<BookingPage />} />
        <Route path="/OrderOnline" element={<OrderOnline />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/confirmed-booking" element={<ConfirmationBookingPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;