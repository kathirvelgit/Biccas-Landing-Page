function Footer() {
  return (
    <footer className="footer" id="blog">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>Biccas</h2>

          <p>Get started now try our product</p>

          <div className="email-box">
            <input type="email" placeholder="Enter your email here" />

            <button>→</button>
          </div>
        </div>

        <div className="footer-column">
          <h4>Support</h4>

          <a href="#">Help centre</a>
          <a href="#">Account information</a>
          <a href="#">About</a>
          <a href="#">Contact us</a>
        </div>

        <div className="footer-column">
          <h4>Help and Solutions</h4>

          <a href="#">Talk to support</a>
          <a href="#">Support docs</a>
          <a href="#">System status</a>
          <a href="#">Covid response</a>
        </div>

        <div className="footer-column">
          <h4>Product</h4>

          <a href="#">Update</a>
          <a href="#">Product support</a>
          <a href="#">Beta test</a>
          <a href="#">Pricing product</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2022 Biccas Inc. Copyright and rights reserved</p>

        <div>
          <a href="#">Terms and Conditions</a>
          <span>•</span>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
