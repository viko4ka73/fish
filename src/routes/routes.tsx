import {Route, Routes} from "react-router-dom";
import Layout from "../layouts/Layout";
import {Auth, Home} from "../pages";
import PrivateRoute from "../components/PrivateRoute";

export const useRoutes = () => {
    return (
            <Routes>
                <Route path="/" element={ <Layout> <Home/> </Layout>} />
                <Route path="/auth" element={<Auth/>}></Route>

                <Route element={<PrivateRoute />}>
                    <Route path="/admin" element={"KYS"}></Route>
                </Route>
            </Routes>
    )
}

export default useRoutes