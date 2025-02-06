import { Tabs, Divider, NavLink, ScrollArea } from "@mantine/core";
import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
} from "@tabler/icons-react";

import classes from "../../styles/landing-page/landingPage.module.css";

import {
  MissionSection,
  ResearchSection,
  TestimonialSection,
  ScholarshipSection,
  NewsSection,
  CommnuityWorksSection,
  AdmissionSection,
  PartnersSection,
} from "./index.js";

export default function LandingPage() {
  const sections = [
    { Tab: "Mission Section", Component: MissionSection },
    { Tab: "Research Section", Component: ResearchSection },
    { Tab: "Testimonial Section", Component: TestimonialSection },
    { Tab: "Scholarship Section", Component: ScholarshipSection },
    { Tab: "News Section", Component: NewsSection },
    { Tab: "Community Works Section", Component: CommnuityWorksSection },
    { Tab: "Admission Section", Component: AdmissionSection },
    { Tab: "Partners Section", Component: PartnersSection },
  ];

  return (
    <Tabs
      keepMounted={false}
      color="indigo"
      variant="pills"
      defaultValue={sections[0].Tab}
    >
      <Tabs.List justify="center" m="sm">
        {sections.map(({ Tab }, index) => (
          <Tabs.Tab
            key={index}
            value={Tab}
            leftSection={<IconPhoto size={15} />}
            classNames={{ tab: classes.tab }}
          >
            {Tab}
          </Tabs.Tab>
        ))}
      </Tabs.List>
      <Divider my="md" />
      {sections.map(({ Tab, Component }, index) => (
        <Tabs.Panel
          key={index}
          value={Tab}
          classNames={{ panel: classes.panel }}
        >
          <Component key={index} />
        </Tabs.Panel>
      ))}
    </Tabs>
  );
}
