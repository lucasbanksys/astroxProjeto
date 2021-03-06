import "./Login.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const login = {
      email: email,
      password: password,
    };

    axios
      .post("/auth/login", login)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("token", token);
        navigate("/profile");
      })
      .catch((err) => {
        console.log(err);
        console.log({ message: "usuário ou senha não encontrados" });
        alert("Usuário ou senha inválidos");
      });
  };

  return (
    <div className="login">
      <h2 className="login-title">Conta AstroX</h2>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Endereço de e-mail"
            required
            onChange={(event) => setEmail(event.target.value)}
          />

          <input
            type="password"
            placeholder="Senha"
            onChange={(event) => setPassword(event.target.value)}
          />

          <div className="login-ok">
            <a href="!#">
              <span>Esqueceu sua senha?</span>
            </a>
            <input className="fazer-login" type="submit" value="Fazer login" />
          </div>
        </form>
        <div className="login-create">
          <span>Ainda não possui uma conta?</span>
          <a className="btn-create" href="/register">
            Criar uma nova conta
          </a>
        </div>
      </div>
    </div>
  );
}
