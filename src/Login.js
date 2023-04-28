import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { exec } from "child_process";
import "./Login.css";

function SignupForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    /* exec(`./newuser.sh ${email} ${password}`, (err, stdout, stderr) => {
      if (err) {
        console.error(`Erreur lors de l'exécution du script: ${err}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
    }); */
    navigate("/login");
  };

  return (
    <form className="formu" onSubmit={handleSubmit}>
      <h2>Inscription</h2>
      <div>
        <label>
          Adresse email :
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Mot de passe :
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <button type="submit">S'inscrire</button>
    </form>
  );
}

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/home");
  };

  return (
    <form className="formu" onSubmit={handleSubmit}>
      <h2>Connexion</h2>
      <div>
        <label>
          Adresse email :
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Mot de passe :
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <button type="submit">Se connecter</button>
    </form>
  );
}

export { SignupForm, LoginForm };
