import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "../layouts/Layout";
import {Home, Products, AboutUs, DeliveryPayment, Contacts, Cart} from "../pages/user";

import {AuthProvider} from '../context/AuthProvider';
import {PrivateRoute} from "../components/PrivateRoute";
import {Auth, Admin, Product, Add, Edit, Delete} from "../pages/admin"
import Error from "../pages/user/Error";
import CartShop from "../pages/user/CartShop";
import { useEffect, useState } from "react";

interface Product {
    description: string;
    id: number;
    name: string;
    photos: string[];
    price: number;
    category: string;
    slug: string;
}
export const useRoutes = () => {
    const [carts, setCarts] = useState<Product[]>([]); 
    const addToCart = (product: Product) => {
        console.log("click");
        console.log(product);
        setCarts((prevCarts) => [...prevCarts, product]);        
    }

    useEffect(() => {
        console.log("Updated carts:", carts);

      }, [carts]);
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Layout><Home/></Layout>}/>
                    <Route path="/home" element={<Layout><Home/></Layout>}/>
                    <Route path="/products" element={<Layout><Products addToCart={addToCart} /></Layout>}></Route>
                    <Route path="/products/:slug" element={<Layout><Products addToCart={addToCart} /></Layout>}></Route>
                    <Route path="/about-us" element={<Layout><AboutUs/></Layout>}></Route>
                    <Route path="/delivery-payment" element={<Layout><DeliveryPayment/></Layout>}></Route>
                    <Route path="/contacts" element={<Layout><Contacts/></Layout>}></Route>
                    <Route path="/order" element={<Layout><CartShop carts={carts} /></Layout>}></Route>
                    <Route path="/auth" element={<Auth/>}></Route>
                    <Route path="/:random" element={<Layout><Error/></Layout>}></Route>
                 
                    
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