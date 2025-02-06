import { useState, useEffect } from "react";
import { useForm } from "@mantine/form";
import {
  Stack,
  Button,
  Textarea,
  Loader,
  Alert,
  Text,
  Box,
  TextInput,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import SectionLayout from "../../components/layouts/SectionLayout";
import api from "../../api/axios";
import classes from "../../styles/landing-page/MissionSection.module.css";

export default function MissionSection() {
  // State hooks
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // Always call your hooks at the top level
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      title: "",
      longText: "",
    },
    validate: {
      // email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("landing/mission/mission-section");
        setData(response.data);
      } catch (err) {
        setError(err.message || "Failed to fetch mission data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Early returns for loading and error states
  if (loading) {
    return (
      <SectionLayout title="Mission Section" withFlex>
        <Loader />
      </SectionLayout>
    );
  }

  if (error) {
    return (
      <SectionLayout title="Mission Section" withFlex>
        <Alert color="red">{error}</Alert>
      </SectionLayout>
    );
  }

  const handleSubmit = async (values) => {
    try {
      const payload = {
        sectionName: "mission-section",
        contents: {
          title: values.title,
          longText: values.longText,
        },
      };

      const response = await api.post("/landing/mission", payload);

      notifications.show({
        title: "Success!",
        message: response.message,
        color: "green",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SectionLayout
      sectionClasses={classes.sectionLayout}
      containerProps={{ size: "responsive" }}
      flexProps={{ justify: "flex-start", gap: "md" }}
      withFlex
    >
      <Stack>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            w={400}
            withAsterisk
            label="Title"
            placeholder={data?.missionSectionData?.title}
            key={form.key("title")}
            {...form.getInputProps("title")}
          />
          <TextInput
            w={400}
            withAsterisk
            label="Long Text"
            placeholder={data?.missionSectionData?.longText}
            key={form.key("longText")}
            {...form.getInputProps("longText")}
          />
          <Button
            type="submit"
            color="blue"
            classNames={{ root: classes.loginButton }}
          >
            Login
          </Button>
          {/* Add more form fields as needed */}
        </form>
      </Stack>
      <Text size="xl">asd</Text>
    </SectionLayout>
  );
}
