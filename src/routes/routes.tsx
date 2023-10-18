import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "../layouts/Layout";
import {Home, Products, AboutUs, DeliveryPayment, Contacts, Cart} from "../pages";

import {AuthProvider} from '../context/AuthProvider';
import {PrivateRoute} from "../components/PrivateRoute";
import {Auth, Admin, Product, Add, Edit, Delete} from "../admin"

export const useRoutes = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Layout><Home/></Layout>}/>
                    <Route path="/products" element={<Layout><Products/></Layout>}></Route>
                    <Route path="/about-us" element={<Layout><AboutUs/></Layout>}></Route>
                    <Route path="/delivery-payment" element={<Layout><DeliveryPayment/></Layout>}></Route>
                    <Route path="/contacts" element={<Layout><Contacts/></Layout>}></Route>
                    <Route path="/order" element={<Cart/>}></Route>
                    <Route path="/auth" element={<Auth/>}></Route>

                    <Route element={<PrivateRoute/>}>
                        <Route path="/admin" element={<Admin/>}></Route>
                        <Route path="/admin/:id" element={<Product/>}></Route>
                        <Route path="/admin/add" element={<Add/>}></Route>
                        <Route path="/admin/edit/:id" element={<Edit/>}></Route>
                        <Route path="/admin/delete/:id" element={<Delete/>}></Route>
                    </Route>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default useRoutes