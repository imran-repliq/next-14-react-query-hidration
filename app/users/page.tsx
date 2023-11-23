import React from "react";
import UserData from "./components/UserData";
import { fetchFn } from "./components/common";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

const Page = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["users"],
    queryFn: fetchFn,
  });
  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <UserData />{" "}
      </HydrationBoundary>
    </div>
  );
};

export default Page;
