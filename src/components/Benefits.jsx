import benefit from "../assets/benefit.png";
import group1 from "../assets/Group1.png";
import group2 from "../assets/Group2.png";
import group3 from "../assets/Group3.png";
import group4 from "../assets/Group4.png";

function Benefits() {
  return (
    <section className="benefits-section">
      <div className="benefits-container">
        <div className="benefits-content">
          <h2>
            What Benefit Will
            <br />
            You Get
          </h2>

          <ul>
            <li>
              <span>✓</span>
              Free Consulting With Expert Saving Money
            </li>

            <li>
              <span>✓</span>
              Online Banking
            </li>

            <li>
              <span>✓</span>
              Investment Report Every Month
            </li>

            <li>
              <span>✓</span>
              Saving Money For The Future
            </li>

            <li>
              <span>✓</span>
              Online Transaction
            </li>
          </ul>
        </div>

        <div className="benefits-image">
          <img src={benefit} alt="Benefits" className="benefit-photo" />

          <img
            src={group1}
            alt="Amanda Young notification"
            className="benefit-avatar"
          />
          <img
            src={group2}
            alt="Total income $245.00"
            className="benefit-income"
          />
          <img src={group3} alt="" className="benefit-badge" />
          <img
            src={group4}
            alt="Money transfer successful"
            className="benefit-transfer"
          />
        </div>
      </div>
    </section>
  );
}

export default Benefits;
