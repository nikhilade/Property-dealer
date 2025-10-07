import AboutSection from "../components/section/HomeSection/AboutSection";
import HomeBanner from "../components/section/HomeSection/HomeBanner";
import PropertySection from "../components/section/HomeSection/PropertySection";
import WhyUsSection from "../components/section/HomeSection/WhyUsSection";


interface HomeProps{
  onNavigate:(page: string) => void;
  title:string;
}

function Homepage({ onNavigate }:HomeProps) {
  return (
    <div className="pt-16">
      <HomeBanner onNavigate={onNavigate}/>
      <PropertySection/>
      <WhyUsSection/>
      <AboutSection onNavigate={onNavigate}/>
    </div>
  );
}

export default Homepage;
