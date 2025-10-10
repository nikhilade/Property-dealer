import Aboutus from "../components/section/AboutUs/Aboutus";
import MissionVision from "../components/section/AboutUs/MissionVision";
import Testimonials from "../components/section/HomeSection/Testimonials";
import Banner from "../components/Layout/Banner";
import bannerImage from "../assets/HomeImages/banner-img.avif";

function AboutUs() {
  return (
    <div className="">
      <Banner
        title="About Our Company"
        subtitle="We’ve been helping people find their perfect homes for over 20 years."
        backgroundImage={bannerImage}
      />
      <Aboutus />
      <MissionVision />
      <Testimonials/>
    </div>
  );
}

export default AboutUs;
