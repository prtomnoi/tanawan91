import React, { Children, ReactNode } from "react";
import Header from "./header";
import HeaderMobile from "./headerMobile";
import Footer from "./footer";
import FooterMobile from "./footerMobile";


interface BodyProps {
    children: any;
}

const Layout: React.FC<BodyProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <HeaderMobile />
        <main className="mx-auto">
            {children}
        </main>
      <Footer />
      <FooterMobile />
    </div>
  );
};

export default Layout;