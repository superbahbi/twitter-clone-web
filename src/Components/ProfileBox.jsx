import React from "react";
import { Navigate } from "react-router-dom";
import moment from "moment";
import styled from "styled-components";
import Button from ".././Components/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const TweetBox = styled.div`
  display: flex;
  flex-direction: row;
  border-color: #eee #ddd #bbb;
  border-style: solid;
  border-width: 1px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
`;
const ProfileContainer = styled.div`
  position: relative;
  font-size: 15px;
  font-weight: lighter;
  line-height: 1.3125;
  flex: 1 1 auto;
`;
const ProfileCover = styled.img`
  background-position: 0 50%;
  background-size: 100% auto;
  border-bottom: 1px solid #e1e8ed;
  border-radius: 2px 2px 0 0;
  width: 100%;
  height: auto;
  max-height: 200px;
  object-fit: cover;
  display: block !important;
  z-index: 0;
`;
const ProfileAvatar = styled.img`
  z-index: 1;
  margin-top: -80px;
  margin-left: 30px;
  color: #fff;
  height: 134px;
  width: 134px;
  border-radius: 50% !important;
`;
const ProfileUser = styled.div`
  margin: 5px 0 0;
  padding: 10px;
`;

const ProfileName = styled.div`
  font-size: 20px;
  font-weight: 900;
  line-height: 21px;
`;
const ProfileTag = styled.div`
  color: #657786;
  text-decoration: none;
`;
const ProfileBio = styled.div`
  padding: 5px 0 5px 0;
`;
const ProfileInfo = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px 0 5px 0;
`;
const ProfileStat = styled.div`
  margin-right: 20px;
`;
const ProfileButton = styled.div`
  display: flex;
  flex-direction: row;
`;

function ProfileBox(props) {
  function onHandleClick() {
    Navigate("/settings");
  }
  const user = props.user;
  const username = props.user.username;
  return (
    <div>
      <TweetBox>
        <div>
          <Row className="ml-0 mr-0">
            <ProfileCover src={user.profile && user.profile.cover.filename} />
            <ProfileAvatar
              src={user.profile && user.profile.avatar.filename}
              alt=""
            />
            {props.username === username ? (
              <Button
                primary
                right
                width="100px"
                id="tweets"
                name="button"
                type="submit"
                label="Edit profile"
                handleClick={onHandleClick}
              />
            ) : null}
          </Row>
          <ProfileContainer>
            <ProfileUser>
              <ProfileName>{user.profile && user.profile.name}</ProfileName>
              <ProfileTag>@{user.profile && user.username}</ProfileTag>
              <ProfileBio>{user.profile && user.profile.bio}</ProfileBio>
              <ProfileInfo>
                <Row className="flex-fill">
                  <Col sm>
                    <i className="icon ion-ios-location-outline mr-1"></i>
                    {user.profile && user.profile.location}
                  </Col>
                  <Col sm>
                    <i className="icon ion-link mr-1"></i>
                    {user.profile && user.profile.website}
                  </Col>
                  <Col sm>
                    <i className="icon ion-ios-calendar-outline mr-1"></i>
                    {moment
                      .unix(user.profile && user.profile.regDate)
                      .format("MMMM YYYY")}
                  </Col>
                </Row>
              </ProfileInfo>
              <ProfileInfo>
                <ProfileStat>
                  <strong>{user && user.following}</strong> Following
                </ProfileStat>
                <ProfileStat>
                  <strong>{user && user.followers}</strong> Followers
                </ProfileStat>
              </ProfileInfo>
            </ProfileUser>
            <ProfileButton>
              <Button
                secondary
                id="tweets"
                name="button"
                type="submit"
                label="Tweets"
                onClick={onHandleClick}
              />
              <Button
                secondary
                id="tweetsnreplies"
                name="button"
                type="submit"
                label="Tweets & replies"
              />
              <Button
                secondary
                id="media"
                name="button"
                type="submit"
                label="Media"
              />
              <Button
                secondary
                id="likes"
                name="button"
                type="submit"
                label="Likes"
              />
            </ProfileButton>
          </ProfileContainer>
        </div>
      </TweetBox>
    </div>
  );
}
export default ProfileBox;
