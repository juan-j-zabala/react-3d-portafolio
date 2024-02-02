import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello I'm
        <span className="blue-gradient_text font-semibold drop-shadow">
          Juan
        </span>
        👋
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Fast and selftaugh web developer ready for working in your Projects,
          and learn new thing in order to get it done
        </p>
      </div>
    </section>
  );
};

export default About;
