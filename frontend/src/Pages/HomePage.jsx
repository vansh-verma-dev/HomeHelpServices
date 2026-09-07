import Footer from "../components/Footer";
import HeroSection from "../components/Hero";
import MobileNavbar from "../components/MobileNavbar";
import MobileNavigat from "../components/MobileNavigation";
import Navbar from "../components/Navbar";
import ReviewsSection from "../components/RiviewSection";
import SearchBar from "../components/SearchBar";
import ServiceMarquee from "../components/ServiceMarquee";
import WhyChooseUs from "../components/WhyChooseUs";

function HomePage(){
    return(
        <>
        <MobileNavbar/>
        <Navbar/>
        <SearchBar/>

        <HeroSection/>
        <ServiceMarquee/>
        <WhyChooseUs/>
        <ReviewsSection/>
        <ReviewsSection/>
        <Footer/>
        <MobileNavigat/>
        </>
    )
}
export default HomePage;