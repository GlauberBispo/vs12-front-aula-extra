import logoSVG from "../../assets/logo.svg";
import "./Header.css";

export function Header() {
  return (
    <header>
      <img src={logoSVG} alt="logo react" />
      <h1>React todo</h1>
    </header>
  );
}
