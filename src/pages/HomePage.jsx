import Explore from "../components/Explore";
import Faq from "../components/Faq";
import Header from "../components/Header";
import Listing from "../components/Listing";
import Manage from "../components/Manage";
import Ownership from "../components/Ownership";
import Renting from "../components/Renting";
import Streets from "../components/Streets";
import { Fade } from "react-awesome-reveal";

const HomePage = () => {
  return (
    <div className="bg-gray-50 overflow-hidden">
      <Header />
      <Explore />

      <Fade duration={500} delay={500}>
        <Listing />
      </Fade>
      <Fade duration={500} delay={500}>
        <Ownership />
      </Fade>
      <Fade duration={500} delay={500}>
        <Manage />
      </Fade>
      <Fade duration={500} delay={500}>
        <Renting />
      </Fade>
      <Fade duration={500} delay={500} direction="right">
        <Streets />
      </Fade>
      <Fade duration={500} delay={500} direction="left">
        <Faq />
      </Fade>
    </div>
  );
};

export default HomePage;
