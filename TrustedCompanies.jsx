import { companies } from "../data/companies";

export default function TrustedCompanies() {
  return (
    <section className="trusted-section">
      <div className="container">
        <h3 className="trusted-title">
          Trusted by over 17,000 companies and millions of learners around the
          world
        </h3>

        <div className="companies-grid">
          {companies.map((company, index) => (
            <div key={index} className="company-logo">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
