import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    // o layout envolvendo esse componente possibilita que o navbar e o footer sejam usados globalmente
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
