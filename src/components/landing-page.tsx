import { Hero } from "@/app/[locale]/components/Hero/Hero";

import { Trading } from "@/app/[locale]/components/Trading/Trading";
import { Market } from "@/app/[locale]/components/Market/Market";
import { Header } from "@/app/[locale]/components/Header/Header";
import { Footer } from "@/app/[locale]/components/Footer/Footer";


export default function Home() {
  return (
    <main className='min-h-screen'>
      <Header />
      <Hero />
      <Trading />
      <Market />
      <Footer />
    </main>
  );
}
