import React, { useEffect, useState } from "react";
import { Avatar, Typography } from "src/components";
import { ProfileCard, Wrapper } from "./userProfile.styled";

export default function UserProfile() {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    setUserProfile(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <Wrapper>
      {userProfile && (
        <ProfileCard>
          <Avatar
            size="lg"
            text={`${userProfile.firstName[0] + userProfile.lastName[0]}`}
            type="span"
          />
          <Typography variant="h2">
            {userProfile.firstName} {userProfile.lastName}
          </Typography>
          <Typography variant="h3">{userProfile.email}</Typography>
          <Typography
            variant="h3"
            as="a"
            href={userProfile.profile}
            color="primary"
          >
            {userProfile.github}
          </Typography>
        </ProfileCard>
      )}
    </Wrapper>
  );
}
