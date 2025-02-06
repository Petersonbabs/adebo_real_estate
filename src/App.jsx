import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Home from "./(pages)/public-pages/Home/Home";
import PageNotFound from "./components/commons/PageNotFound";
import Properties from "./(pages)/public-pages/Properties/Properties";
import Signup from "./(pages)/public-pages/(auth)/Signup/Signup";
import AuthProvider from "./contexts/AuthContext";
import { Toaster } from "sonner";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Toaster position="top-left" richColors visibleToasts={1}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/signup" element={<Signup />} />

          {/*  */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
