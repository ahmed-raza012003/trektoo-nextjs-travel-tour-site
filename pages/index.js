import Head from 'next/head';
import Navbar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import DestinationGrid from '../components/DestinationGrid';
import AboutSection from '../components/AboutSection';
import TourPackages from '../components/TourPackages';
import Testimonials from '../components/Testimonials';
import BlogSection from '../components/BlogSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>GoWilds Clone</title>
      </Head>
      <Navbar />
      <HeroSection />
      <DestinationGrid />
      <AboutSection />
      <TourPackages />
      <Testimonials />
      <BlogSection />
      <Footer />
    </>
  );
}
