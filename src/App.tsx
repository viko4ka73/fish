import { Home, Auth } from "./pages";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import useRoutes from "./routes/routes";
import routes from "./routes/routes";

const App = () => {
  const routes = useRoutes()
  return (
    <main className="relative">
        {routes}
    </main>
  )
}

export default App