import { use } from "react";
import Friend from "./friend";

export default function Friends({friendPromise}) {

    const friends = use(friendPromise);
    // console.log(friends);

  const friendsStyle = {
    border: "4px solid green",
    borderRadius: "20px",
    margin: "10px",
  };
  return (
    <div style={friendsStyle}>
      <h3>Friends : {friends.length} </h3>
      {
        friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
      }
    </div>
  );
}