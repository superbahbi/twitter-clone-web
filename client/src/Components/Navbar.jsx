import React, { useContext } from "react";
import List from "./List";
import styled from "styled-components";
import { authContext } from "../Contexts/AuthContext";
import { useHistory } from "react-router-dom";
const ListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  text-align: center;
  color: #657786;
  align-items: baseline;
  margin-right: 50px;
  :hover {
  }
`;
function Navbar() {
  let history = useHistory();
  const { auth } = useContext(authContext);
  const username = auth.data.user.username;
  function handleLogout(event) {
    event.preventDefault();
    // Remove the token from localStorage
    localStorage.removeItem("authData");
    history.push("/");
  }

  return (
    <ListStyle>
      <List
        id="icon"
        icon="dog"
        color="#1da1f2"
        onHandleClick={() => {
          history.push("/home");
        }}
      />
      <List
        id="home"
        name="Home"
        icon="home"
        onHandleClick={() => {
          history.push("/home");
        }}
      />
      <List
        id="explorer"
        name="Explorer"
        icon="hashtag"
        onHandleClick={() => {
          history.push("/explorer");
        }}
      />
      <List
        id="notification"
        name="Notification"
        icon="bell"
        onHandleClick={() => {
          history.push("/notification");
        }}
      />
      <List
        id="messages"
        name="Messages"
        icon="envelope"
        onHandleClick={() => {
          history.push("/messages");
        }}
      />
      <List
        id="bookmarks"
        name="Bookmarks"
        icon="bookmark"
        onHandleClick={() => {
          history.push("/bookmarks");
        }}
      />
      <List
        id="lists"
        name="Lists"
        icon="list"
        onHandleClick={() => {
          history.push("/lists");
        }}
      />
      <List
        id="profile"
        name="Profile"
        icon="circle"
        onHandleClick={() => {
          history.push(username);
        }}
      />
      <List
        id="logout"
        name="Logout"
        icon="circle"
        onHandleClick={handleLogout}
      />
    </ListStyle>
  );
}
export default Navbar;
