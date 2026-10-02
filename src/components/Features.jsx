import Feature1 from "../assets/featr1.png";
import Feature2 from "../assets/featr2.png";
import Feature3 from "../assets/featr3.png";

const features = [
  {
    image: Feature1,
    title: "Collaboration Teams",
    text: "Here you can handle projects together with team virtually",
  },
  {
    image: Feature2,
    title: "Cloud Storage",
    text: "No need to worry about storage because we provide storage up to 2 TB",
  },
  {
    image: Feature3,
    title: "Daily Analytics",
    text: "We always provide useful information to make it easier for your everyday",
  },
];

function Features() {
  return (
    <section className="features-section" id="features">
      <div className="features-heading">
        <div>
          <h2>
            Our Features
            <br />
            you cab get
          </h2>
        </div>

        <p>
          We offer a variety of interesting features that you can help increase
          your productivity at work and manage your project easily.
        </p>

        <button className="primary-btn">Get Started</button>
      </div>

      <div className="feature-cards">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-image">
              <img src={feature.image} alt={feature.title} />
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
