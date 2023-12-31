import { Outlet } from "react-router-dom";
import HeaderOld from "../HeaderOld/HeaderOld";
import Footer from "../Footer/Footer";
import "../../styles/App.scss";

function DefaultLayout() {
    return (
        <>
            <HeaderOld />
            <div className="container-xl g-0">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default DefaultLayout;
