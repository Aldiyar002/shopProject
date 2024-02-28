import Footer from "../footer/footer";
import Regis from "../regis/regis";

const Layout = ({children}) => {
  return (
    <>
    <Footer/>
    <Regis/>
    <main>{children}</main>
    </>
  )
};

export default Layout;

