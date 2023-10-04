import { Nav, } from "../components"
import { Footer } from "../sections";

const Layout = ({ children }) => {
    return (
        <div>
            <Nav />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;