import logo from "../assets/logo-header.png";
import "../styles/Banner.css";

function Banner() {
  return (
    <div className="kasa-banner">
      <img src={logo} alt="Kasa Logo" className="kasa-logo" />
      <h1>kasa</h1>
    </div>
  );
}

export default Banner;
