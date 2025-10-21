import React, { useState } from "react";
//import "./Login.css";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {}

  return (
    <div>
      <form>
        <h2>Agenda de Contatos</h2>
        <p>Faça login para continuar</p>
        <input
          type="text"
          placeholder="Usuario (admin)"
          value={username}
          onChange={(e) => setUsername(e.targer.value)}
        />
        <input
          type="password"
          placeholder="Senha (123)"
          value={password}
          onChange={(e) => setPassword(e.targer.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
