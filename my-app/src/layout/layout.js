import Footer from "../footer/footer";
import Regis from "../regis/regis";

const Layout = ({children}) => {
  return (
    <>
    <Footer/>
    <main>{children}</main>
    </>
  )
};

export default Layout;

