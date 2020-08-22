import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return <div>
    <div>
      <img className={classes.coverImage} alt="Profile header"
           src="https://blog.sandiego.org/wp-content/uploads/2020/04/SDT_Zoom-Backgrounds_April-8_Windansea-2-logo-1024x576.jpg"/>
    </div>
    <div className={classes.description}>
      avatar + description
    </div>
  </div>;
}

export default ProfileInfo;