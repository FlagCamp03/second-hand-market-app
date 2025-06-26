// src/pages/Profile.tsx

// Profile Page

import React from "react";
import { Card, Avatar, Typography } from "antd";
import useAuthStore from "../store/auth";

const { Title, Text } = Typography;

const Profile: React.FC = () => {
  const user = useAuthStore((state) => state.user);

  // if user didn't login yet
  if (!user) {
    return <Text>Please log in first</Text>;
  }

  return (
    <Card
      style={{
        maxWidth: 400,
        margin: "0 auto",
        paddingTop: 100,
      }}
    >
      {/* User Avatar */}
      <Avatar size={64} src={user.avatar} style={{ marginBottom: 16 }} />

      {/* Nickname and Email */}
      <Title level={4}>{user.nickname || "Anonymous"}</Title>
      <Text>{user.email}</Text>
    </Card>
  );
};

export default Profile;
