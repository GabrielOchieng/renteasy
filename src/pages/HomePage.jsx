import Explore from "../components/Explore";
import Faq from "../components/Faq";
import Header from "../components/Header";
import Listing from "../components/Listing";
import Manage from "../components/Manage";
import Ownership from "../components/Ownership";
import Renting from "../components/Renting";
import Streets from "../components/Streets";

const HomePage = () => {
  return (
    <div className="bg-gray-50">
      <Header />
      <Explore />
      <Listing />
      <Ownership />
      <Manage />
      <Renting />
      <Streets />
      <Faq />
    </div>
  );
};

export default HomePage;
