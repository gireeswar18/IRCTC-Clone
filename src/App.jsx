import ExploreHoliday from "./components/ExploreHoliday";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OurServices from "./components/OurServices";
import Search from "./components/Search";
import gif from "./assets/bot.gif";
import Footer from "./components/Footer";
import Sponsors from "./components/Sponsors";
import Rights from "./components/Rights";


function App() {
  return (
    <div className="font-[poppins] bg-slate-100 min-h-screen">
      <Navbar /> {/* Done */}
      <Hero />{/* Done */}
      <Search />
      <OurServices />
      <ExploreHoliday />
      <Footer />
      <Sponsors />
      <Rights />
      <div className="fixed bottom-28 right-24">
        <img
          src={gif}
          alt=""
          height={80}
          width={80}
          className="fixed cursor-pointer"
        />
      </div>
    </div>
  );
}

export default App;
