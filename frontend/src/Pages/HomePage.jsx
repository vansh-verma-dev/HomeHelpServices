
import FAQ from "../components/Faqsection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MobileHero from "../components/MobileHero";
import MobileNavbar from "../components/MobileNavbar";
import MobileNavigat from "../components/MobileNavigation";
import MobileServices from "../components/MobileServices";
import Navbar from "../components/Navbar";
import Reviews from "../components/ReviewSection";
import SearchBar from "../components/SearchBar";
import ServiceMarquee from "../components/ServiceMarquee";
import ServicesSection from "../components/Services";
import WhyChooseUs from "../components/WhyChooesUs";

function HomePage() {
    return (
        <>
            <MobileNavbar />
            <Navbar />
            <SearchBar />
            <MobileHero />
            <Hero />
            <MobileServices />
            <ServiceMarquee />
            <ServicesSection/>
            <WhyChooseUs />
            <Reviews/>
            <FAQ/>
            <Footer />
            <MobileNavigat />
        </>
    )
}
export default HomePage;