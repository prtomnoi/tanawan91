import React, { Children, ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
interface BodyProps {
    children: any;
}

const Layout: React.FC<BodyProps> = ({ children }) => {
  return (
    <div>
      <Header />
        <main className="mx-auto">
            {children}
        </main>
      <Footer />
    </div>
  );
};

export default Layout;