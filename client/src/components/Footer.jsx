import "../styles/Footer.scss";
import { LocationOn, LocalPhone, Email } from "@mui/icons-material";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer_left">
          <a href="/">
            <img src="/assets/logo.png" alt="logo" />
          </a>
          <p className="tagline">
            <strong>WanderNest</strong> – Your Trusted Companion on Every Journey.
          </p>
          <p className="info-note">
            We blend technology with hospitality to help you explore the world with ease and confidence.
          </p>
        </div>

        <div className="footer_center">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/refund-policy">Refund Policy</a>
            </li>
          </ul>
          <p className="extra-info">
            Have questions or need help? Our support team is available 24/7 to assist you.
          </p>
        </div>

        <div className="footer_right">
          <h3>Contact</h3>
          <div className="footer_right_info">
            <LocalPhone />
            <p>+91 88268 34155</p>
          </div>
          <div className="footer_right_info">
            <Email />
            <p>wandernest@support.com</p>
          </div>
          <div className="footer_right_info">
            <LocationOn />
            <p>
              2262 Heritage Avenue<br />
              Delhi Cantonment,<br />
              New Delhi – 110010, India
            </p>
          </div>
          <img src="/assets/payment.png" alt="payment methods" />
        </div>
      </div>

      <div className="footer_bottom">
        <p>© 2025 WanderNest. All rights reserved.</p>
        <p className="footer_wish">
          We wish you a pleasant stay, memorable adventures, and safe travels — wherever your journey takes you. 🌍✨
        </p>
      </div>
    </>
  );
};

export default Footer;
