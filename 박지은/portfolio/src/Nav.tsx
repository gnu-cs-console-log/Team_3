import "./styles.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <br />
      <p>JIEUN</p>
      <div>
        <Link to="/">Profile</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <a href="">Contact</a>
      </div>
    </nav>
  );
}
