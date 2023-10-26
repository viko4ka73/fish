import { Nav } from "../components"
import { Footer } from "../sections";

const Layout = ({ children }) => {
    return (
        <div >
            <div > 
            <Nav/>
            </div>
            {children}
            <Footer />
        </div>
    );
};

export default Layout;