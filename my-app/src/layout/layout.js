import Footer from "../footer/footer";
import Regis from "../regis/regis";rgba(217, 217, 217, 1)

const Layout = ({children}) => {
  return (
    <>
    <Footer/>
    <main>{children}</main>
    </>
  )
};

export default Layout;

