import SectionOne from "./components/SectionOne";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SectionTwo from "./components/SectionTwo";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });
  return (
    <div>
      <SectionOne />
      <SectionTwo />
    </div>
  );
};

export default App;
