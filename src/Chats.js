import React from "react";
import Chat from "./Chat";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import "./Chats.css";

const StyledBadgeOnline = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);

const StyledBadgeOffline = withStyles((theme) => ({
  badge: {
    backgroundColor: "#f51212",
    color: "#f51212",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      // animation: "$ripple 1.2s infinite ease-in-out",
      // border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);

const Chats = (props) => {
  return (
    <div className="chats">
      <div className="chats__avatars">
        <StyledBadgeOnline
          overlap="circle"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          variant="dot"
        >
          <Avatar alt="Remy Sharp" className="chats__avatar" src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Anushka_Sharma_promoting_Zero.jpg" />
        </StyledBadgeOnline>
        <StyledBadgeOffline
          overlap="circle"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          variant="dot"
        >
          <Avatar alt="Remy Sharp" className="chats__avatar" src="https://wikibio.in/wp-content/uploads/2018/07/Jacqueline-Fernandez.jpg" />
        </StyledBadgeOffline>
        <StyledBadgeOnline
          overlap="circle"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          variant="dot"
        >
          <Avatar alt="Remy Sharp" className="chats__avatar" src="https://static.toiimg.com/photo/67944205.cms" />
        </StyledBadgeOnline>
        <StyledBadgeOffline
          overlap="circle"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          variant="dot"
        >
          <Avatar alt="Remy Sharp" className="chats__avatar" src="https://wikibio.in/wp-content/uploads/2019/02/Kiara-Advani-Photo.jpg" />
        </StyledBadgeOffline>
      </div>
      <Chat
        name="Anushka"
        message="Hey!! supp 😄"
        timestamp="40 sec ago"
        profilePic="https://upload.wikimedia.org/wikipedia/commons/e/e6/Anushka_Sharma_promoting_Zero.jpg"
      />
      <Chat
        name="Jacky"
        message="Yo!!"
        timestamp="4 min ago"
        profilePic="https://wikibio.in/wp-content/uploads/2018/07/Jacqueline-Fernandez.jpg"
      />
      <Chat
        name="Alia"
        message="🥰🥰😍"
        timestamp="2 days ago"
        profilePic="https://static.toiimg.com/photo/67944205.cms"
      />
      <Chat
        name="Kiara"
        message="No! 🥺"
        timestamp="1 week ago"
        profilePic="https://wikibio.in/wp-content/uploads/2019/02/Kiara-Advani-Photo.jpg"
      />
    </div>
  );
};

export default Chats;
