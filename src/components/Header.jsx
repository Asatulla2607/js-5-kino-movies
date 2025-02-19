import { useContext, useState } from "react";
import LOGO from "../img/header-logo.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { LanguageContext } from "../context";

const Header = () => {
  const { mode, setMode } = useContext(LanguageContext);
  const changeTheme = () => {
    setMode(!mode);
    localStorage.setItem("mode", JSON.stringify(!mode));
  };
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleClick = (e) => {
    navigate(`/movies/search-result/${value}`);
    setValue("");
  };
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <Link to="/">
            <img src={LOGO} alt="img" />
          </Link>
          <div className="header-nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Popular">Popular</NavLink>
            <NavLink to="/topRated">TopRated</NavLink>
          </div>
          <div className="search-result">
            <input
              value={value}
              onChange={handleChange}
              type="text"
              placeholder="Search movie..."
            />
            <button onClick={handleClick}>search</button>
          </div>
          <div className="header-buttons">
            <select onChange={(e) => setLanguage(e.target.value)}>
              <option value="en-US">english</option>
              <option value="ru-RU">russian</option>
              <option value="tr-TR">turkce</option>
              <option value="fr-FR">france</option>
            </select>
            <button onClick={changeTheme}>{mode ? "light" : "dark"}</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
