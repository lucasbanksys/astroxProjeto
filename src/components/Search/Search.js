import "./Search.css";

import { FaSearchPlus } from "react-icons/fa";

export default function Search() {
  return (
    <div className="search">
      <form className="search-input">
        <FaSearchPlus />
        <input
          className="type"
          type="text"
          placeholder="Ex.: Final Fantasy"
        ></input>
        <input className="btn" type="submit" value="Procurar" />
      </form>
    </div>
  );
}
