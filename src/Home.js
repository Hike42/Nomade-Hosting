import React, { useState } from "react";
import Dropzone from "react-dropzone";
import "./Home.css";
import Password from "./Password";

function Home() {
  const [files, setFiles] = useState([]);

  const handleDrop = (droppedFiles) => {
    // Lire le contenu des fichiers et les stocker en local
    const reader = new FileReader();
    reader.onload = (e) => {
      const fileData = {
        name: droppedFiles[0].name,
        size: droppedFiles[0].size,
        content: e.target.result,
      };
      setFiles([...files, fileData]);
    };
    reader.readAsText(droppedFiles[0]);
  };

  const totalSize = files.reduce((acc, file) => acc + file.size, 0);
  const totalSizeMb = (totalSize / (1024 * 1024)).toFixed(2);

  return (
    <div>
      <h2>Page d'accueil</h2>
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p className="upload">
              Glissez-déposez des fichiers ici, ou cliquez pour sélectionner des
              fichiers
            </p>
          </div>
        )}
      </Dropzone>
      {files.length > 0 && (
        <div className="files">
          <h3>Vos fichiers mis en ligne :</h3>
          <h5>Serveur 1</h5>
          <ul>
            {files.map((file, index) => (
              <li key={index}>
                {file.name} ({file.size} octets)
              </li>
            ))}
          </ul>
          <p className="total">Espace Utilisé : {totalSizeMb} Mb</p>
          <p className="total2">Espace Autorisé : 90 Mb</p>
          <button className="save">
            Télécharger une sauvegarde compressée (.zip)
          </button>
          <button className="save">
            Télécharger une sauvegarde compressée (.tar.gz)
          </button>
        </div>
      )}
      <div className="add">
        <h4>Espace dépassé ? Ouvrez un autre serveur : </h4>
        <button className="addbutton">Ouvrir un serveur supplémentaire</button>
      </div>
      <Password />
    </div>
  );
}

export default Home;
