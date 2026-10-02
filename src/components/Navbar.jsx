function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="logo">Biccas</div>

        <nav className="nav-links">
          <a href="#home" className="active">
            Home
          </a>

          <a href="#product">Product</a>

          <a href="#faq">FAQ</a>

          <a href="#blog">Blog</a>

          <a href="#about">About Us</a>
        </nav>

        <div className="nav-actions">
          <a href="#login" className="login">
            Login
          </a>

          <button className="signup-btn">Sign Up</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
