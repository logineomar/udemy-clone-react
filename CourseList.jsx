import { aiCourses } from "../data/courses";

export default function CourseList() {
  return (
    <section className="courses-section">
      <div className="container">
        <h2 className="section-title">Artificial Intelligence (AI)</h2>

        <div className="courses-grid">
          {aiCourses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-image">
                <div className="image-placeholder">[Course Image]</div>
              </div>

              <div className="course-content">
                <h3 className="course-title">{course.title}</h3>
                <p className="course-instructor">{course.author}</p>

                <div className="course-meta">
                  <span
                    className={`course-badge ${course.badge
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {course.badge}
                  </span>
                  <div className="course-rating">
                    <span className="rating-stars">⭐</span>
                    <span className="rating-value">{course.rating}</span>
                    <span className="rating-count">({course.reviews})</span>
                  </div>
                </div>

                <div className="course-price">
                  <span className="current-price">{course.price}</span>
                  <span className="original-price">{course.originalPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="show-all-container">
          <button className="show-all-btn">
            Show all Artificial Intelligence (AI) courses →
          </button>
        </div>
      </div>
    </section>
  );
}
