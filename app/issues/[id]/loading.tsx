import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { Heading, Flex, Card, Box } from "@radix-ui/themes";
import React from "react";
import ReactMarkdown from "react-markdown";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const loading = () => {
  return (
    <Box className="max-w-xl">
      <Heading className="mb-1">
        <Skeleton />
      </Heading>

      <Flex gap={"5"} mb={"2"}>
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </Flex>

      <Card className="prose" mt={"4"}>
        <Skeleton count={3} />
      </Card>
    </Box>
  );
};

export default loading;
