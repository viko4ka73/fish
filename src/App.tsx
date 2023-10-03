import { Nav, } from "./components"
import { Home } from "./pages";
import Admin from "./pages/Admin";
import { Footer } from "./sections";
import { Routes, Route, BrowserRouter } from "react-router-dom";




const App = () => {
  return (
    <main className="relative">
    
      <BrowserRouter>
        <Nav />
        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  

    </main>
  )
}

export default App