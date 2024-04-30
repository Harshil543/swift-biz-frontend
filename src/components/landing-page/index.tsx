import Blog from "../landing_component/Blog";
import Footer from "../landing_component/footer";
import Header from "../landing_component/header";
import Hero from "../landing_component/hero";
import Section from "../landing_component/features";
import Steps from "../landing_component/steps";
import Testimonial from "../landing_component/testimonials";
import Videos from "../landing_component/videos";
import { data } from "../../constant/features";
import csvDownload from "json-to-csv-export";
import Button from "../common/button";

export default function LeadingPage() {
  const dataToConvert: any = {
    data: data.data,
    filename: "data",
    delimiter: ",",
    headers: ["id", "img", "title", "Description"]
  };
  return (
    <>
      <Header isLanding={true} />
      <Hero />
      <Steps />
      <Section />
      <Button
        label={"Download CSV"}
        onClick={() => {
          debugger;
          csvDownload(dataToConvert);
        }}
      ></Button>
      <Testimonial />
      <Blog />
      <Videos />
      <Footer />
    </>
  );
}
