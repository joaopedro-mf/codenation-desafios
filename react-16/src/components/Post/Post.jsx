import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Post.scss";

const Post = ({ postInfo, userInfo }) => {
  const [like, setLike] = useState(false);
  const [follow, setFollow] = useState(false);

  let commentsLength = postInfo.comments.length;

  return (
    <article className="post" data-testid="post">
      {userInfo && (
        <header className="post__header">
          <Link to={`/users/${userInfo.username}`} className="user">
            <img
              className="user__thumb"
              src={userInfo.avatar}
              alt={`Foto do ${userInfo.name}`}
            />
            <span className="user__name">{userInfo.name}</span>
          </Link>
          <button className="post__context" onClick={() => setFollow(!follow)}>
            {follow ? (
              <span className="follow-btn is-following">{"Seguindo"}</span>
            ) : (
              <span className="follow-btn">{"Seguir"}</span>
            )}
          </button>
        </header>
      )}

      <figure className="post__figure">
        <img src={postInfo.imageUrl} alt="" />
      </figure>

      {userInfo && (
        <section className="post__controls">
          <button
            className="post__control"
            onClick={() => {
              setLike(!like);
            }}
          >
            {like ? (
              <i className="fas fa-heart" />
            ) : (
              <i className="far fa-heart" />
            )}
          </button>

          {commentsLength > 0 && (
            <div className="post__status">
              <div className="user">
                <span>
                  curtido por{" "}
                  <Link to={`/users/${postInfo.comments[0].name}`}>
                    {postInfo.comments[0].name}{" "}
                  </Link>
                  e outra{commentsLength > 0 && "s"}
                  <Link to="/">
                    {" "}
                    {commentsLength - 1} pessoa
                    {commentsLength - 1 > 1 && "s"}.
                  </Link>
                </span>
              </div>
            </div>
          )}
        </section>
      )}
    </article>
  );
};

export default Post;
