import React, { useState, useEffect } from "react";

import UserProfile from "../../containers/UserProfile";
import UserPosts from "../../containers/UserPosts";

import Loading from "../../components/Loading";

const ProfileRoute = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState({});

  useEffect(() => {
    const { pathname } = window.location;
    const param = pathname.split("/users/")[1];
    var url = `https://5e7d0266a917d70016684219.mockapi.io/api/v1/users?search=${param}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setUser(res[0]);
      });
  }, []);

  useEffect(() => {
    if (user.id !== undefined) {
      const { id } = user;
      fetch(
        `https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${id}/posts`
      )
        .then((res) => res.json())
        .then((posts) => {
          setPosts(posts);
          console.log(posts);
          setLoading(false);
        });
    }
  }, [user]);

  return (
    <div data-testid="profile-route">
      <UserProfile
        avatar={user.avatar}
        name={user.name}
        username={user.username}
      />
      {loading ? <Loading /> : <UserPosts posts={posts} />}
    </div>
  );
};

export default ProfileRoute;
