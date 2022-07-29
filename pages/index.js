import Head from "next/head";
import Intro from "../components/Intro";

export default function Home() {
  return (
    <div>
      <Head>
        <title>AV0CAD0 Agency</title>
        <meta name="description" content="Av0cad0 Digital Product Agency" />
      </Head>
      <Intro />
    </div>
  );
}
