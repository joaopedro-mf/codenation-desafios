import React from "react";

import Post from "../../components/Post";

import "./UserPosts.scss";

const UserPosts = ({ posts }) => (
  <div className="container" data-testid="user-posts">
    <section className="user-posts">
      {posts.length > 0 ? (
        posts.map((post) => <Post key={post.id} postInfo={post} />)
      ) : (
        <div>
          <span className="noposts__content">Sem Publicações</span>
        </div>
      )}
    </section>
  </div>
);

export default UserPosts;
