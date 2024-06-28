import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";
import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-#9d174d">
        <div>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="bg-warning">
          <h1 className="text-2xl font-bold text-black	">
            Hello, Tailwind CSS!
          </h1>
          <Contact />
        </div>
      </div>
      ;
    </BrowserRouter>
  );
};

export default App;
