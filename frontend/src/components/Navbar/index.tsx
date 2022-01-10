import ContactGithub from "../ContactGithub";
import "./styles.css";

export default function Navbar() {
    return (
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <ContactGithub />
        </div>
    </nav>

    );
}