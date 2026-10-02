const plans = [
  {
    name: "Free",
    description: "Have a go and test your superpowers",
    price: "0",
    button: "Signup for free",
    features: [
      "2 Users",
      "2 Files",
      "Public Share & Comments",
      "Chat Support",
      "New income apps",
    ],
  },

  {
    name: "Pro",
    description: "Experiment the power of infinite possibilities",
    price: "8",
    button: "Go to Pro",
    popular: true,
    features: [
      "4 Users",
      "All apps",
      "Unlimited editable exports",
      "Folders and collaboration",
      "All incoming apps",
    ],
  },

  {
    name: "Business",
    description: "Unveil new superpowers and join the Design League",
    price: "16",
    button: "Go to Business",
    features: [
      "All the features of pro plan",
      "Account success Manager",
      "Single Sign-On (SSO)",
      "Co-operation program",
      "Collaboration-Soon",
    ],
  },
];

function Pricing() {
  return (
    <section className="pricing-section" id="pricing">
      <h2>
        Choose Plan
        <br />
        That's Right For You
      </h2>

      <p className="pricing-description">
        Choose a plan that works best for you, feel free to contact us.
      </p>

      <div className="billing-toggle">
        <button>Bill Monthly</button>

        <button className="selected">Bill Yearly</button>
      </div>

      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div
            className={`price-card ${plan.popular ? "popular-plan" : ""}`}
            key={index}
          >
            <h3>{plan.name}</h3>

            <p className="plan-description">{plan.description}</p>

            <div className="price">
              <span className="currency">$</span>
              {plan.price}
            </div>

            {plan.popular && (
              <span className="savings-badge">Save $50 a year</span>
            )}

            <div className="plan-details">
              <ul>
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <span>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="plan-btn">{plan.button}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
