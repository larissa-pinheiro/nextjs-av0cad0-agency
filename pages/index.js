import Head from "next/head";
import Intro from "../components/Intro";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import { data } from "../data";

export default function Home({ services }) {
  return (
    <div>
      <Head>
        <title>AV0CAD0 Agency</title>
        <meta name="description" content="Av0cad0 Digital Product Agency" />
      </Head>
      <Intro />
      <Services services={services} />
      <Testimonials />
    </div>
  );
}

// this method allows to fetch any data before rendering components or pages
// after declaring it we have to put it as a prop in the function
export const getStaticProps = async () => {
  const services = data;
  return {
    props: { services },
  };
};
