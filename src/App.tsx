import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"

import { ThemeProvider } from "./components/mood/DarkMood"
import UpEve from "./pages/UpEve"
import SigEve from "./pages/SigEve"
import AboutUs from "./pages/AboutUs"
import ConTact from "./pages/ConTact"
import VariFy from "./pages/VariFy"
import SiGnup from "./pages/SiGnup"
import SigNi from "./pages/SigNi"
import AdminLaout from "./pages/admin/AdminLaout"
import AdminDeshboard from "./pages/admin/AdminDeshboard"
import AdminEvent from "./pages/admin/AdminEvent"


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
        <Route path="signup" element={<SiGnup/>}/>
        <Route path="signin" element={<SigNi/>}/>
        <Route path="/admin" element={<AdminLaout/>}>
          <Route index element={<AdminDeshboard/>}/>
          <Route path="events" element={<AdminEvent/>}/> 
        </Route>

      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
