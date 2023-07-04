import { ReactElement } from "react";
import "./layout.scss"
import NavBar from "../NavBar";

interface LayoutProps {
    children: ReactElement;
}

const Layout: React.FC<LayoutProps> = ({children}) => {

    return (<>
        <div className="layout flex">
            <nav className="layout__nav">
                <NavBar />
            </nav>

            <main className="layout__content">
                {children}
            </main>

            <footer className="layout__footer">

            </footer>
        </div>
    </>)
}

export default Layout;
