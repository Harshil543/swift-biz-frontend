import Blog from "../Blog";
import Footer from "../footer";
import Header from "../header/header";
import Hero from "../hero";
import Section from "../section1/section";
import Steps from "../steps";
import Testimonial from "../testimonials";
import Videos from "../videos";
export default function LeadingPage() {
  return (
    <>
      <Header />
      <Hero />
      <Steps />
      <Section />
      <Testimonial />
      <Blog />
      <Videos />
      <Footer />
    </>
  );
}
