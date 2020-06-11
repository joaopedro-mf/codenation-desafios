import React, { useState, useEffect } from "react";

import Stories from "../../containers/Stories";
import Loading from "../../components/Loading";

import Posts from "../../containers/Posts";

import "./FeedRoute.scss";

const FeedRoute = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div data-testid="feed-route">
      {loading ? (
        <Loading />
      ) : (
        <React.Fragment>
          <Stories />
          <Posts />
        </React.Fragment>
      )}
    </div>
  );
};

export default FeedRoute;
