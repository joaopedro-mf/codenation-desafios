import React, { useState, useEffect } from "react";

import Stories from "../../containers/Stories";
import Loading from "../../components/Loading";

import Posts from "../../containers/Posts";

import "./FeedRoute.scss";

const FeedRoute = () => {
  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState({});
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState({});

  useEffect(() => {
    var url = "	https://5e7d0266a917d70016684219.mockapi.io/api/v1/stories ";
    fetch(url)
      .then((res) => res.json())
      .then((res) => setStories(res));
  }, []);
  useEffect(() => {
    var url =
      "	https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/1/posts ";
    fetch(url)
      .then((res) => res.json())
      .then(function (res) {
        setPosts(res);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    var url = "https://5e7d0266a917d70016684219.mockapi.io/api/v1/users ";
    fetch(url)
      .then((res) => res.json())
      .then((res) => setUsers(res));
  }, []);

  function getUserHandler(userID) {
    return users.find((user) => userID === user.id);
  }

  return (
    <div data-testid="feed-route">
      {users.length > 0 && stories.length > 0 && (
        <Stories stories={stories} getUserHandler={getUserHandler} />
      )}

      {loading ? (
        <Loading />
      ) : (
        users.length > 0 &&
        posts.length > 0 && (
          <Posts posts={posts} getUserHandler={getUserHandler} />
        )
      )}
    </div>
  );
};

export default FeedRoute;
