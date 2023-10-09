import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "../layouts/Layout";

import {AuthProvider} from '../context/AuthProvider';
import {PrivateRoute} from "../components/PrivateRoute";
import {Home, Auth, Admin} from "../pages";

export const useRoutes = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={ <Layout> <Home/> </Layout>} />
                    <Route path="/auth" element={<Auth/>}></Route>
                    <Route element={<PrivateRoute />}>
                        <Route path="/admin" element={<Admin/>}></Route>
                    </Route>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default useRoutes