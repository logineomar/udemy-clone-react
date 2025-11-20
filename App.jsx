import OfferBanner from "./components/OfferBanner";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SkillsSection from "./components/SkillsSection";
import CategoryList from "./components/CategoryList";
import AISection from "./components/AISection";
import CourseList from "./components/CourseList";
import TrustedCompanies from "./components/TrustedCompanies";
import StateDemo from "./components/StateDemo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <OfferBanner />
      <Navbar />
      <Hero />
      <SkillsSection />
      <CategoryList />
      <AISection />
      <CourseList />
      <TrustedCompanies />

      {/* React State Demo Section */}
      <div className="demo-section">
        <h2>React State Demonstration</h2>
        <p>This demonstrates the state concepts from Lab 6:</p>
        <StateDemo />
      </div>
    </div>
  );
}

export default App;
