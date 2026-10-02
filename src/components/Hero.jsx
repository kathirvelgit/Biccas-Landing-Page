import heroImage from "../assets/hero.png";
import heroPlay from "../assets/heroplay.png";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>
          We're here to
          <br />
          Increase your
          <br />
          Productivity
        </h1>

        <div className="hero-line"></div>

        <p>
          Let's make your work more organize and easily using the Taskio
          Dashboard with many of the latest features managing work every day.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Try free trial</button>

          <button className="demo-btn">
            <img src={heroPlay} alt="Play" className="play-icon" />

            <span>View Demo</span>
          </button>
        </div>
      </div>

      <div className="hero-image">
        <img
          src={heroImage}
          alt="Hero illustration"
          className="hero-main-image"
        />
      </div>
    </section>
  );
}

export default Hero;
