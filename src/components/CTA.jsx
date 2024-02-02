import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section>
      <p>
        Have a project in mind? <br />
        Let's build something together
      </p>
      <Link to="/contact" />
    </section>
  );
};

export default CTA;
