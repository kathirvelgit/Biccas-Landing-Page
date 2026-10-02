import activity from "../assets/activity.png";
import pie from "../assets/pie.png";
import command from "../assets/command.png";

function Support() {
  return (
    <section className="support-section">
      <div className="support-left">
        <h2>
          How we support our
          <br />
          partner all over the world
        </h2>

        <p>
          SaaS become a common delivery model for many business applications,
          including office software, messaging software, payroll processing
          software, DBMS software, management software.
        </p>

        <div className="ratings">
          <div className="rating">
            <div className="stars">★★★★★</div>

            <strong>4.9 / 5 rating</strong>

            <span>databricks</span>
          </div>

          <div className="rating">
            <div className="stars">★★★★☆</div>

            <strong>4.8 / 5 rating</strong>

            <span>chainalysis</span>
          </div>
        </div>
      </div>

      <div className="support-right">
        <div className="support-item">
          <div className="support-icon">
            <img src={activity} alt="Activity" />
          </div>

          <div>
            <h3>Publishing</h3>

            <p>
              Plan, collaborate, and publishing your content that drives
              meaningful engagement and growth for your brand.
            </p>
          </div>
        </div>

        <div className="support-item">
          <div className="support-icon">
            <img src={pie} alt="Analytics" />
          </div>

          <div>
            <h3>Analytics</h3>

            <p>Analyze your performance and create gorgeous report.</p>
          </div>
        </div>

        <div className="support-item">
          <div className="support-icon">
            <img src={command} alt="Command" />
          </div>

          <div>
            <h3>Engagement</h3>

            <p>Quickly navigate you and engage with your audience.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Support;
