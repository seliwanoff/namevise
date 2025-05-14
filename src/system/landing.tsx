import SectionFour from "../components/landing/sectionFour";
import SectionOne from "../components/landing/sectionOne";
import SectionThree from "../components/landing/sectionThree";
import SectionTwo from "../components/landing/sectionTwo";
import Footer from "../components/nav/footer";
import HomePageHeader from "../components/nav/header";

const LandingPage = () => {
  return (
    <div className="relative">
      <HomePageHeader />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Footer />
    </div>
  );
};

export default LandingPage;
