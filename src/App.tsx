import {useRoutes} from "./routes/routes";

const App = () => {
  const routes = useRoutes()
  return (
    <main className="relative">
        {routes}
    </main>
  )
}

export default App