import { Home, Admin } from "./pages";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";

const App = () => {
  return (
    <main className="relative">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={ <Layout> <Home/> </Layout>} />
            <Route path="/auth" element={<Admin/>}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App