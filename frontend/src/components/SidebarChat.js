import { Avatar } from "@mui/material";
import React from "react";
import "./sideBarChat.css";

const SidebarChat = () => {
  const lastSeen = new Date().toLocaleDateString();
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h2> User </h2>
        <p>Last Seen {lastSeen}</p>
      </div>
    </div>
  );
};

export default SidebarChat;
