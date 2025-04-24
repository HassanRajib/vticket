import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"

import { ThemeProvider } from "./components/mood/DarkMood"

function App() {
 
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
