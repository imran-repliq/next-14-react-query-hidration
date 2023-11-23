"use client";

import React from "react";
import { fetchFn } from "./common";
import { useQuery } from "@tanstack/react-query";

const UserData = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchFn,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(data);

  return (
    <div>
      {data.map((user: any) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default UserData;
