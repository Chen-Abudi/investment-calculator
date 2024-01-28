import "./Header.css";
import logo from "../../assets/investment-calculator-logo.png";

function Header() {
  return (
    <header className="header">
      <img
        src={logo}
        alt="A logo showing money green bag with money"
        className="header__logo"
      />
      <h1 className="header__title">Investment Calculator</h1>
    </header>
  );
}

export default Header;
