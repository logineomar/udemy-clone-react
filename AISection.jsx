import { useState } from "react";

export default function AISection() {
  const [features] = useState([
    { id: 1, text: "Learn AI and more", checked: true },
    { id: 2, text: "Prep for a certification", checked: false },
    { id: 3, text: "Practice with AI coaching", checked: true },
    { id: 4, text: "Advance your career", checked: false },
  ]);

  return (
    <section className="ai-section">
      <div className="container">
        <div className="ai-content">
          <h2 className="section-title">Reimagine your career in the AI era</h2>
          <p className="section-description">
            Future-proof your skills with Personal Plan. Get access to a variety
            of fresh content from real-world experts.
          </p>

          <div className="features-list">
            {features.map((feature) => (
              <div key={feature.id} className="feature-item">
                <span
                  className={`feature-checkbox ${
                    feature.checked ? "checked" : ""
                  }`}
                >
                  {feature.checked ? "✓" : "○"}
                </span>
                <span className="feature-text">{feature.text}</span>
              </div>
            ))}
          </div>

          <div className="pricing-section">
            <span className="price">Starting at E£1,294,300/month</span>
            <button className="cta-button">Learn more</button>
          </div>
        </div>
      </div>
    </section>
  );
}
