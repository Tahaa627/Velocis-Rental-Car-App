import Hero from "../../components/home/Hero";
import SearchBox from "../../components/home/SearchBox";
import FeaturedCars from "../../components/home/FeaturedCars";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import Testimonials from "../../components/home/Testimonials";
import CTA from "../../components/home/CTA";

const Home = () => {
  return (
    <>
      <Hero />
      <SearchBox />
      <FeaturedCars />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;