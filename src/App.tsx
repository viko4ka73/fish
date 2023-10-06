import { Home, Auth } from "./pages";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Admin from "./pages/Admin";

const App = () => {
  return (
    <main className="relative">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={ <Layout> <Home/> </Layout>} />
            <Route path="/auth" element={<Auth/>}></Route>
            <Route path="/admin" element={<Admin/>}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App