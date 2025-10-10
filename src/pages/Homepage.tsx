import AboutSection from "../components/section/HomeSection/AboutSection";
import bannerImage from "../assets/HomeImages/banner-img.avif"
import PropertySection from "../components/section/HomeSection/PropertySection";
import WhyUsSection from "../components/section/HomeSection/WhyUsSection";
import Banner from "../components/Layout/Banner";
import Testimonials from "../components/section/HomeSection/Testimonials";
import UpcomingProjects from "../components/section/HomeSection/UpcomingProjects";

interface HomeProps {
  onNavigate: (page: string) => void;
  title: string;
}

function Homepage({ onNavigate }: HomeProps) {
  return (
    <div className="">
      <Banner
        title="Find Your Dream Property Today"
        subtitle="Discover exceptional residential and commercial properties with expert guidance every step of the way."
        buttonText="Browse Properties"
        backgroundImage={bannerImage}
        onButtonClick={() => onNavigate("properties")}
      />
      <PropertySection />
      <WhyUsSection />
      <UpcomingProjects/>
      <AboutSection onNavigate={onNavigate} />
      <Testimonials/>
    </div>
  );
}

export default Homepage;
