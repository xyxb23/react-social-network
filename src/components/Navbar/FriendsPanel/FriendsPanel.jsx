import React from "react";
import classes from './FriendsPanel.module.css';

const FriendsPanel = (props) => {
  let friends = props.friends.map((friend) => {
    return <div className={classes.friend} key={friend.id}><img src={friend.avatar} alt={friend.name}/></div>;
  });

  return (
    <div className={classes.friendsPanel}><h1>Friends</h1>
      <div className={classes.friendsGrid}>{friends}</div>
    </div>
  );
}

export default FriendsPanel;