// components/layout/Layout.js

import Header from "../header/Header";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import { LayoutStyled, LayoutBodyStyled } from "./styles"

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%"
};

const contentStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column"
};

const Layout = props => (
  <div className="Layout" style={layoutStyle}>
    <Header />
    <div className="page ge-page landing-page">
      <NavBar />
      <main class="ge-main" role="main">
          {props.children}
      </main>
    </div>
    <Footer />
  </div>
);

export default Layout;