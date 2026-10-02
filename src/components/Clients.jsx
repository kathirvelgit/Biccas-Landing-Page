import unsp from "../assets/unsp.png";
import not from "../assets/not.png";
import inter from "../assets/inter.png";
import union from "../assets/Union.png";
import ref from "../assets/ref.png";

function Clients() {
  return (
    <section className="clients">
      <h2>More than 25,000 teams use Collabs</h2>

      <div className="client-list">
        <span>
          <img src={unsp} alt="Unsplash" />
          Unsplash
        </span>

        <span>
          <img src={not} alt="Notion" />
          Notion
        </span>

        <span>
          <img src={inter} alt="Intercom" />
          INTERCOM
        </span>

        <span>
          <img src={union} alt="Union" />
          descript
        </span>

        <span>
          <img src={ref} alt="Refactoring" />
          grammarly
        </span>
      </div>
    </section>
  );
}

export default Clients;
