export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-section">
        <h1 className="logo">Udemy</h1>
        <button className="categories-btn">Categories</button>
      </div>

      <div className="search-section">
        <div className="search-container">
          <button className="search-btn">🔍</button>
          <input
            type="text"
            placeholder="Search for anything"
            className="search-input"
          />
        </div>
      </div>

      <div className="nav-section">
        <a href="#" className="nav-link">
          Udemy Business
        </a>
        <a href="#" className="nav-link">
          Teach on Udemy
        </a>
        <a href="#" className="nav-link">
          My learning
        </a>
      </div>

      <div className="nav-section">
        <button className="icon-btn">❤️</button>
        <button className="icon-btn">🛒</button>
        <button className="icon-btn">🔔</button>
        <button className="profile-btn">👤</button>
      </div>

      <div className="nav-section">
        <button className="login-btn">Log in</button>
        <button className="signup-btn">Sign up</button>
        <button className="language-btn">🌐</button>
      </div>
    </nav>
  );
}
