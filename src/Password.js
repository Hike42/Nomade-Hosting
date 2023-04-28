import React, { useState } from "react";
import axios from "axios";
import "./Password.css";

function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      setErrorMessage("The new passwords do not match");
      return;
    }

    try {
      const response = await axios.post("/api/change-password", {
        currentPassword,
        newPassword,
      });
      console.log(response.data);
      // Password changed successfully
    } catch (error) {
      console.error(error);
      setErrorMessage("Failed to change password");
    }
  };

  return (
    <div className="container">
      <p>Modifiez le mot de passe : </p>
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
      <div>
        <label htmlFor="current-password">Mdp actuel : </label>
        <input
          type="password"
          id="current-password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="new-password">Nouveau Mdp : </label>
        <input
          type="password"
          id="new-password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="confirm-password">Confirmez Mdp : </label>
        <input
          type="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button onClick={handleChangePassword}>Modifez Mdp</button>
    </div>
  );
}

export default ChangePassword;
