import { useState } from "react";
import { categories } from "../data/courses";

export default function CategoryList() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <section className="category-section">
      <div className="container">
        <h2 className="section-title">
          Skills to transform your career and life
        </h2>
        <p className="section-description">
          From critical skills to technical topics, Udemy supports your
          professional development.
        </p>

        <div className="categories-container">
          <div className="categories-scroll">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
