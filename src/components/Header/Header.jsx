import "./Header.css";
import title from "../../assets/ICILONDE-title-BK.png";

function Header() {
  return (
    <header>
      <div className="title">
        <img id="title-img" src={title} alt="Ici L'Onde" />
      </div>
    </header>
  );
}

export default Header;
