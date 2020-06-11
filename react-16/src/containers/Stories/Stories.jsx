import React, { useState } from "react";

import Story from "../../components/Story";

import "./Stories.scss";

const Stories = ({ stories, getUserHandler }) => {
  const [showStory, setshowStory] = useState(false);
  const [user, setUser] = useState({});
  const [story, setStory] = useState({});

  const handleClick = (user) => {
    stories.map((story) => {
      if (story.userId === user.userId) {
        setUser(getUserHandler(story.userId));
        setStory(story);
      }
      return story;
    });
    setshowStory(true);
  };

  const storyList = stories.map((story, index) => {
    const profileData = getUserHandler(story.userId);

    return (
      <button
        key={story.id}
        onClick={() => handleClick(story)}
        className={`user__thumb ${index === 0 && "user__thumb--hasNew"}`}
      >
        <div className="user__thumb__wrapper">
          <img src={profileData.avatar} alt={profileData.name} />
        </div>
      </button>
    );
  });

  const handleClose = () => {
    setshowStory(false);
  };
  return (
    <React.Fragment>
      <section className="stories" data-testid="stories">
        <div className="container">{storyList}</div>
      </section>

      {showStory && (
        <Story story={story} user={user} handleClose={handleClose} />
      )}
    </React.Fragment>
  );
};

export default Stories;
