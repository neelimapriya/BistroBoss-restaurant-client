import { Outlet, useLocation} from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navigation from "../Pages/Shared/Navbar/Navigation";

const Main = () => {
    const location= useLocation()
    const noNavFooter =location.pathname.includes('login') || location.pathname.includes('signup')
    console.log(location)
    return (
        <div >
            {noNavFooter || <Navigation></Navigation>}
            <Outlet></Outlet>
            {noNavFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;