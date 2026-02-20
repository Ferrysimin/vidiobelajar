import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { Outlet, useLocation } from "react-router-dom";

const Root = () => {
    const location = useLocation();
    const isNotLoginOrRegister = !(
        location.pathname === "/login" || location.pathname === "/register"
    );

    return (
        <div className="min-h-screen flex flex-col">
            <Nav isNotLoginOrRegister={isNotLoginOrRegister} />
            <Outlet />
            {isNotLoginOrRegister && <Footer />}
        </div>
    );
};

export default Root;
