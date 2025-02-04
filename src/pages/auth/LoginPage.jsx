import {
  Box,
  Text,
  Button,
  Flex,
  Card,
  Container,
  Divider,
} from "@mantine/core";

import SectionLayout from "../../components/layouts/SectionLayout";

import classes from "../../styles/auth/LoginPage.module.css";
import { root } from "postcss";

export default function LoginPage() {
  return (
    <Box component="div" className={classes.section}>
      <Flex justify="center" align="center" gap="xl">
        <Text fz={80}>School CMS</Text>
        <SectionLayout
          sectionClasses={classes.loginContainer}
          flexProps={{
            direction: "column",
            justify: "center",
            gap: "lg",
          }}
          withFlex={true}
        >
          <Text fz="title2" ta="center">
            Login
          </Text>
          <Divider
            size="md"
            color="white"
            classNames={{ root: classes.dividerRadius }}
          />
          <p>ad</p>
        </SectionLayout>
      </Flex>
    </Box>
  );
}
