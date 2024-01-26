import "./Sidebar.scss";
import logoSpotify from "../../assets/icons/logo-spotify.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faBook,
  faPlus,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar__navigation">
        <div className="logo">
          <a href="#">
            <img src={logoSpotify} alt="Logo do spotify" />
          </a>
        </div>
        <ul>
          <li>
            <a href="#">
              <span className="icon">
                <FontAwesomeIcon icon={faHouse} size="lg" />
              </span>
              <span>Início</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
              </span>
              <span>Buscar</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="library">
        <div className="library__content">
          <button className="library__button">
            <span className="icon">
              <FontAwesomeIcon icon={faBook} size="lg" />
            </span>
            <span>Biblioteca</span>
          </button>
          <span className="icon fa-plus">
            <FontAwesomeIcon icon={faPlus} size="lg" />
          </span>
        </div>

        <section className="playlist">
          <div className="playlist__content">
            <span className="text title">Crie sua primeira playlist</span>
            <span className="text subtitle">É fácil, vamos te ajudar</span>
            <button className="playlist__button">Criar playlist</button>
          </div>
        </section>

        <div className="languages">
          <button className="languages__button">
            <span className="icon">
              <FontAwesomeIcon icon={faGlobe} size="lg" />
            </span>
            <span>Português do Brasil</span>
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
