import Head from "next/head";

import Header from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";
import Homebanner from "@/components/HomeBanner";
import ProjectLogo from "@/components/ProjectsLogos";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ajay Gupta</title>
        <meta
          name="description"
          content="All Web Solutions.
        "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Homebanner />
      <ProjectLogo />
      <Footer />
    </>
  );
}
