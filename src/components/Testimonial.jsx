import ellipse1 from "../assets/Ellipse1.png";
import ellipse2 from "../assets/Ellipse2.png";
import ellipse3 from "../assets/Ellipse3.png";
import ellipse4 from "../assets/Ellipse4.png";
import ellipse5 from "../assets/Ellipse5.png";
import double from "../assets/double.png";
import circ from "../assets/circ.png";

function Testimonial() {
  return (
    <section className="testimonial-section" id="about">
      <div className="testimonial-content">
        <h2>
          People are Saying
          <br />
          About DoWhith
        </h2>

        <p>
          Everything you need to accept to payment and grow your money of manage
          anywhere on planet
        </p>

        <div className="quote">
          <img src={double} alt="Double Quote" />
        </div>

        <p className="testimonial-text">
          I am very helped by this E-wallet application, my days are very easy
          to use this application and its very helpful in my life, even I can
          pay a short time
        </p>

        <strong>- Aria Zinanrio</strong>

        <div className="people">
          <img src={ellipse1} alt="Person 1" />
          <img src={ellipse2} alt="Person 2" />
          <img src={ellipse3} alt="Person 3" />
          <img src={ellipse4} alt="Person 4" />
          <img src={ellipse5} alt="Person 5" />
        </div>
      </div>

      <div className="contact-card">
        <div className="contact-icon">
          <img src={circ} alt="Contact" />
        </div>

        <h3>Get Started</h3>

        <label>Email</label>

        <input type="email" placeholder="Enter your email" />

        <label>Message</label>

        <textarea placeholder="What are you say ?"></textarea>

        <button className="request-btn">Request Demo</button>

        <small>or Start Free Trial</small>
      </div>
    </section>
  );
}

export default Testimonial;
