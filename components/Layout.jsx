import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div>
      {/* possibilita que o navbar e o footer sejam usados globalmente, vide _app.js */}
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
