import "./Profile.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Profile(props) {
  const [user, setUser] = useState({});
  const [mounted, setMounted] = useState(false);
  const [notLogged, setNotLogged] = useState(true);

  useEffect(() => {
    setMounted(true);

    if (localStorage.token) {
      const token = localStorage.token;

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      axios.get("/auth/me", config).then((response) => {
        setNotLogged(false);
        setUser(response.data);
      });
    }
  }, [mounted]);

  return (
    <div className="profile">
      <div className="profile-img">
        <img
          src="https://i.pinimg.com/originals/d8/73/8f/d8738fa59987df02a2d52d7295b32c70.jpg"
          alt="Astro"
        />
      </div>
      {!notLogged ? (
        <>
          <h2>{user.name}</h2>
          <span>Email: {user.email}</span>
          <span>Membro desde: {user.createdAt}</span>
        </>
      ) : (
        <h2>Faça login ou crie sua conta!</h2>
      )}
    </div>
  );
}
