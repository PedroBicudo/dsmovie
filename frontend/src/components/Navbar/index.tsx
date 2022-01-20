import ContactGithub from "../ContactGithub";
import "./styles.css";

export default function Navbar() {
    return (
      <nav className="container">
        <div className="dsmovie-nav">
          <h1 className="dsmovie-nav__title">DSMovie</h1>
          <ContactGithub />
        </div>
    </nav>

    );
}