import React, { useState, useEffect } from "react";

import UserProfile from "../../containers/UserProfile";
import UserPosts from "../../containers/UserPosts";

import Loading from "../../components/Loading";

const ProfileRoute = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div data-testid="profile-route" >
      {loading ? (
        <Loading />
      ) : (
        <React.Fragment>
          <UserProfile />
          <UserPosts />
        </React.Fragment>
      )}
    </div>
  );
};

export default ProfileRoute;
