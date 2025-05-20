import type { Route } from "./+types/main";
import Navigation from "~/navigation/navigation";
import About from "../main/about/about";
import ClientLogo from "../main/client-logo/client-logo";
import Masthead from "../main/masthead/masthead";
import Product from "../main/product/product";
import Results from "../main/results/results";
import Testimonials from "../main/testimonials/testimonials";
import Footer from "~/footer/footer";
import LandingPage from "../main/landing/landing";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Technical Assessment from GrowthOps 2025" },
    { name: "description", content: "This is the technical assessment done in React by HowJun." },
  ];
}

export default function Main() {
  const navigate = useNavigate();
  const [isPreloading, setIsPreloading] = useState<boolean>(true);
  const navigateContact = () => {
    navigate("/contact");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPreloading(false);
    }, 3000)

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={`relative bg-black grid grid-cols-1 ${isPreloading ? 'h-screen overflow-hidden' : null}`}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"></link>
      {
        isPreloading ? 
          <LandingPage />
        :
        <>
          <Navigation />
          <Masthead />
          <About />
          <Product />
          <Results />
          <Testimonials />
          <ClientLogo />
          
          <div className="relative w-fit flex justify-self-center mt-65 rounded-[48px] order-7">
            <button className="w-[177px] h-[54px] rounded-[48px] bg-[#33FF85] shadow-[0_0_16px_rgba(255,51,102,0.5)] font-[montserrat] font-extrabold text-lg/none tracking-[0.02em] text-white hover:cursor-pointer" onClick={navigateContact}>Let&apos;s chat</button>
          </div>
          
          <Footer />
       </>
      }
          
    </main>
  )
}