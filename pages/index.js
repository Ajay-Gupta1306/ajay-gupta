import Head from "next/head";

import Header from "@/components/Common/Header";
import Homebanner from "@/components/HomeBanner";
import Services from "@/components/Services";
import ProjectLogo from "@/components/ProjectsLogos";
import Technologies from "@/components/Technologies";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Common/Footer";

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
      <Services />
      <Technologies />
      <Testimonials />
      <Footer />
    </>
  );
}
