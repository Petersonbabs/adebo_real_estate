import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/layouts/Navbar"
import Home from "./(pages)/public-pages/Home/Home"
import PageNotFound from "./components/commons/PageNotFound"
import Properties from "./(pages)/public-pages/Properties/Properties"

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />

        {/*  */}
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App