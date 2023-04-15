import Head from "next/head";
import Home from "./home";
import Header from "../components/layout/Header";
import Input from "../components/form/Input";
import Footer from "@/components/layout/Footer";

export default function Index() {
  return (
    <div>
      <Head>
        <title>Uraz Camping</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </div>
  );
}