import React, { useState, useEffect, useContext } from "react";
import { authContext } from "../Contexts/AuthContext";
import Navbar from ".././Components/Navbar";
import Feed from ".././Components/Feed";
import Sidebar from ".././Components/Sidebar";
import styled from "styled-components";
import Header from "../Components/Header";
import ProfileBox from "../Components/ProfileBox";
const Container = styled.div`
  display: flex !important;
  flex-direction: row !important;
  justify-content: center !important;
`;
const NavContainer = styled.div`
  width: 15% !important;
`;
const ProfileContainer = styled.div`
  width: 50% !important;
  padding: 0;
  max-width: 600px;
`;
const SideBarContainer = styled.div`
  width: 15% !important;
  padding: 0;
`;
function Profile(props) {
  const profile = props.match.params.profile;
  const { auth } = useContext(authContext);
  const [tweetData, setTweetData] = useState({});
  const [userData, setUserData] = useState({});
  useEffect(() => {
    // This gets called after every render, by default (the first one, and every one
    // after that)
    const request = async (id = 100) => {
      const res1 = await fetch(
        process.env.REACT_APP_API_URL + "/api/user/" + profile
      );
      setUserData(await res1.json());
      const res2 = await fetch(
        process.env.REACT_APP_API_URL + "/api/tweet/" + profile
      );
      setTweetData(await res2.json());
    };
    request();
    // If you want to implement componentWillUnmount, return a function from here,
    // and React will call it prior to unmounting.
    return () => console.log("unmounting...");
  }, []);
  return (
    <Container>
      <NavContainer>
        <Navbar />
      </NavContainer>
      <ProfileContainer>
        {userData.foundUser
          ? userData.foundUser.map(item => (
              <Header
                page="Profile"
                name={item.profile.name}
                tweetCount={item.tweets}
              />
            ))
          : null}
        <ProfileBox user={userData.foundUser} />
        <Feed tweet={tweetData.foundTweet} auth={auth} />
      </ProfileContainer>
      <SideBarContainer>
        <Sidebar />
      </SideBarContainer>
    </Container>
  );
}
export default Profile;
