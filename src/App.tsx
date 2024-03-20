import "./App.css";
import Blog from "./components/Blog";
import Footer from "./components/footer";
import Header from "./components/header/header";
import Hero from "./components/hero";
import Section from "./components/section1/section";
import Steps from "./components/steps";
import Testimonial from "./components/testimonials";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Steps />
      <Section />
      <Testimonial />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
