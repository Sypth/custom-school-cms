import { Box } from "@mantine/core";

import LoginPage from "./LoginPage";

import { useParams } from "react-router-dom";

export default function AuthPage({}) {
  const { category } = useParams();
  const categories = {
    login: <LoginPage />,
  };
  return <Box>{categories[category]}</Box>;
}
