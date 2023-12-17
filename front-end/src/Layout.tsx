import { ReactNode } from "react";
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import "./styles/components/layout.scss";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <div className="main">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
