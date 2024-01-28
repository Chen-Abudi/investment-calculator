import "./Header.css";
import logo from "../../assets/investment-calculator-logo.png";

function Header() {
  return (
    <header className="header">
      <img
        src={logo}
        alt="This is a logo showing a green bag with money"
        className="header__logo"
      />
      <h1 className="header__title">Investment Calculator</h1>
    </header>
  );
}

export default Header;
