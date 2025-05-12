import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"

import { ThemeProvider } from "./components/mood/DarkMood"
import UpEve from "./pages/UpEve"
import SigEve from "./pages/SigEve"
import AboutUs from "./pages/AboutUs"
import ConTact from "./pages/ConTact"
import VariFy from "./pages/VariFy"

function App() {
 
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="upevent" element={<UpEve/>}/>
        <Route path="event" element={<SigEve/>}/>
        <Route path="about" element={<AboutUs/>}/>
        <Route path="contact" element={<ConTact/>}/>
        <Route path="varify" element={<VariFy/>}/>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
