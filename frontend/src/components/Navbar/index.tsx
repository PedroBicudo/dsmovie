import ThemeToggler from "components/ThemeToggler/ThemeToggler";
import ContactGithub from "../ContactGithub";
import "./styles.css";

export default function Navbar() {
    return (
      <nav className="container">
        <div className="dsmovie-nav">
          <h1 className="dsmovie-nav__title">DSMovie</h1>
          <div className="d-flex align-items-center gap-3">
            <ThemeToggler />
            <ContactGithub />
          </div>
        </div>
    </nav>

    );
}