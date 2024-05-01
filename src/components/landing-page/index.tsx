import Blog from "../landing_component/Blog";
import Footer from "../landing_component/footer";
import Header from "../landing_component/header";
import Hero from "../landing_component/hero";
import Section from "../landing_component/features";
import Steps from "../landing_component/steps";
import Testimonial from "../landing_component/testimonials";
import Videos from "../landing_component/videos";

export default function LeadingPage() {
  return (
    <>
      <Header isLanding={true} />
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
