import "./Header.scss";
import arrowLeft from "../../assets/icons/small-left.png";
import arrowRight from "../../assets/icons/small-right.png";
import search from "../../assets/icons/search.png";

function Header() {
  return (
    <nav className="header-nav">
      <div className="header-nav__arrows">
        <button className="arrow-left">
          <img src={arrowLeft} alt="Seta esquerda" />
        </button>
        <button className="arrow-right">
          <img src={arrowRight} alt="Seta direita" />
        </button>
      </div>

      <div className="header-nav__search">
        <img src={search} alt="" />
        <input
          type="search-input"
          id="search-input"
          maxlength="800"
          placeholder="O que você quer ouvir?"
        />
      </div>

      <div className="header-nav__login">
        <button className="subscribe">Inscreva-se</button>
        <button className="login">Login</button>
      </div>
    </nav>
  );
}

export default Header;
