import React from "react";

import Post from "../../components/Post";

const Posts = ({ posts, getUserHandler }) => {
  console.log(posts);

  return (
    <React.Fragment>
      <div className="container" data-testid="posts">
        {posts.map((post) => (
          <Post
            key={post.id}
            postInfo={post}
            userInfo={getUserHandler(post.userId)}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Posts;
