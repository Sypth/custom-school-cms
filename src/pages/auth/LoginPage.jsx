import {
  Box,
  Text,
  Button,
  Flex,
  Card,
  Container,
  Divider,
  Image,
  Stack,
  TextInput,
  Group,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";

import { useNavigate } from "react-router-dom";

import spcfLogo from "../../assets/logo/spcf.png";

import SectionLayout from "../../components/layouts/SectionLayout";
import classes from "../../styles/auth/LoginPage.module.css";
import api from "../../api/axios";

export default function LoginPage() {
  const fetchCsrfCookie = async () => {
    await api.get("/auth/csrf-cookie");
  };

  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {

      await fetchCsrfCookie();

      const response = await api.post("/auth/login", values);

      const { access_token, user } = response.data;

      localStorage.setItem("access_token", access_token);
      localStorage.setItem("user", JSON.stringify(user));

      notifications.show({
        title: "Success!",
        message: "Logged in successfully",
        color: "green",
      });

      navigate("/landing");
    } catch (error) {
      notifications.show({
        title: "Error",
        message: error.response?.data?.message || "Login failed",
        color: "red",
      });
    }
  };

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <Box component="div" className={classes.section} size="responsive">
      <Flex justify="center" align="center" gap="xl">
        <SectionLayout
          sectionClasses={classes.loginContainer}
          flexProps={{
            direction: "column",
            justify: "center",
            gap: "lg",
          }}
          withFlex={true}
        >
          <Container size="responsive" mt="md">
            <Flex gap="sm" align="center" justify="center">
              <Image src={spcfLogo} h={40} w={40} />
              <Stack gap={0} justify="center">
                <Text
                  fz={{ base: "md" }}
                  classNames={{ root: classes.logoText1 }}
                >
                  SYSTEMS PLUS
                </Text>
                <Text
                  fz={{ base: "xs" }}
                  classNames={{ root: classes.logoText2 }}
                >
                  COLLEGE FOUNDATION
                </Text>
              </Stack>
            </Flex>
          </Container>
          <Divider
            my={-5}
            size="sm"
            color="white"
            classNames={{ root: classes.dividerRadius }}
          />
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <SectionLayout
              sectionClasses={classes.loginFormContainer}
              flexProps={{
                direction: "column",
                gap: "md",
                justify: "center",
              }}
              withFlex={true}
            >
              <TextInput
                withAsterisk
                label="Email"
                placeholder="your@spcf.edu.ph"
                key={form.key("email")}
                {...form.getInputProps("email")}
                classNames={{
                  input: classes.formTextInput,
                }}
              />

              <TextInput
                withAsterisk
                label="Password"
                placeholder="********"
                type="password"
                key={form.key("password")}
                {...form.getInputProps("password")}
                classNames={{
                  input: classes.formTextInput,
                }}
              />
              <Group>
                <Button
                  type="submit"
                  color="blue"
                  classNames={{ root: classes.loginButton }}
                >
                  Login
                </Button>
              </Group>
            </SectionLayout>
          </form>
        </SectionLayout>
      </Flex>
    </Box>
  );
}
