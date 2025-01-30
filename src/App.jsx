import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Signup from "./(pages)/public-pages/Signup/Signup";
import AuthProvider from "./contexts/AuthContext";
import Home from "./(pages)/public-pages/Home/Home";
import NotificationPage from "./(pages)/private-pages/notifications/Notification";
import NotificationProvider from "./contexts/NotificationContext";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AuthProvider>
        <NotificationProvider>
          <Routes>
            {/* <Route path='/signup' element={<Signup />}/> */}
            {/* <Route path='/' element={<Home />}/> */}
            <Route path="/notifications" element={<NotificationPage />} />
          </Routes>
        </NotificationProvider>
      </AuthProvider>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
