import React, { useState } from "react";

import SuccessMessage from "../../components/SuccessMessage";

import "./UserForm.scss";

const UserForm = () => {
  const [name, setName] = useState("New User");
  const [avatar, setAvatar] = useState("");
  const [username, setUsername] = useState("New User");
  const [email, setEmail] = useState("@gmail.com");
  const [submit, setSubmit] = useState(false);

  const handleAddUser = (event) => {
    event.preventDefault();

    const user = {
      name,
      avatar,
      username,
      email,
    };

    fetch("https://5e7d0266a917d70016684219.mockapi.io/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: user,
    }).then(() => setSubmit(true));
  };

  return (
    <React.Fragment>
      <section className="profile" data-testid="user-form">
        <div className="container">
          <div className="profile-data">
            <div className="user">
              <div className="user__thumb">
                {avatar ? (
                  <img src={avatar} alt="" />
                ) : (
                  <img
                    src="https://viniciusvinna.netlify.app/assets/api-instagram/profiles/profile-placeholder.png"
                    alt=""
                  />
                )}
              </div>

              {name && (
                <p className="user__name">
                  {name}
                  <span>@{username}</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="post__form">
        <div className="container">
          <div className="post__form__wrapper">
            <label>Nome</label>
            <input
              type="text"
              value={name}
              placeholder="Ex: Maria Beasley"
              onChange={(event) => setName(event.target.value)}
            />

            <label>Usuário</label>
            <input
              type="text"
              value={username}
              placeholder="Ex: maria_beasley"
              onChange={(event) => setUsername(event.target.value)}
            />

            <label>Email</label>
            <input
              type="email"
              value={email}
              placeholder="Ex: mariabeasley@gmail.com"
              onChange={(event) => setEmail(event.target.value)}
            />

            <label>Url da Imagem de Perfil</label>
            <input
              type="text"
              placeholder="http://..."
              onChange={(event) => setAvatar(event.target.value)}
            />

            <button type="button" onClick={(event) => handleAddUser(event)}>
              Cadastrar
            </button>
          </div>
        </div>
      </section>

      {submit && <SuccessMessage />}
    </React.Fragment>
  );
};

export default UserForm;
