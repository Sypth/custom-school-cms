import classes from "./Navigation.module.css";
import {
  Box,
  Container,
  Text,
  Divider,
  ScrollArea,
  Group,
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import { useState } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";

const navKeys = ["academics", "research", "admission"];

const navItems = {
  academics: {
    name: "Academics",
    children: [
      {
        name: "Academics",
        path: "/academics",
      },
      {
        name: "Elementary Education",
        path: "/admission/elementary",
      },
      {
        name: "Junior High Education",
        path: "/admission/junior-high",
      },
      {
        name: "Senior High Education",
        children: [
          {
            name: "General Academic Strand",
          },
          {
            name: "Accountancy and Business Management",
          },
          {
            name: "Humanities and Social Sciences",
          },
          {
            name: "Science, Technology, Engineering, and Mathematics",
          },
          {
            name: "Technical Vocational Strand",
          },
        ],
      },
      {
        name: "Undergraduate Education",
        children: [
          {
            name: "Undergraduate Education",
            path: "/admission/college",
          },
          {
            name: "College of Criminology",
            path: "/departments/coc",
          },
          {
            name: "College of Nursing",
            path: "/departments/con",
          },
          {
            name: "College of Arts, Social Sciences, and Education",
            path: "/departments/cassed",
          },
          {
            name: "College of Business",
            path: "/departments/cob",
          },
          {
            name: "College of Engineering",
            path: "/departments/coe",
          },
          {
            name: "College of Hospitality and Tourism Management",
            path: "/departments/chtm",
          },
          {
            name: "College of Computing and Information Sciences",
            path: "/departments/ccis",
          },
        ],
      },
      {
        name: "Post Graduate Education",
        path: "/admission/post-graduate",
      },
    ],
  },
  research: {
    name: "Research",
    children: [],
  },
  admission: {
    name: "Admission",
    children: [
      {
        name: "Elementary",
        path: "/admission/elementary",
      },
      {
        name: "Junior High School",
        path: "/admission/junior-high",
      },
      {
        name: "Senior High School",
        path: "/admission/senior-high",
      },
      {
        name: "College",
        path: "/admission/college",
      },
      {
        name: "Post Graduate",
        path: "/admission/post-graduate",
      },
    ],
  },
};

export default function NavigationDrawer({ toggle }) {
  const [selectedItem, setSelectedItem] = useState("academics");
  const [selectedChildItem, setSelectedChildItem] = useState("");
  const navigate = useNavigate();

  const handleSetSelectedItem = (item) => {
    setSelectedItem(item.toLowerCase());
    setSelectedChildItem("");
  };

  const redirect = (path) => {
    navigate(path);
    toggle();
  };

  return (
    <Box component="div" className={classes.drawerContainer}>
      <Box component="div" className={classes.bgImage}>
        <Box component="div" className={classes.overlay}></Box>
      </Box>
      <Box component="div" className={classes.drawerItemsContainer}>
        <ScrollArea
          h="100%"
          scrollbarSize={4}
          scrollHideDelay={500}
          className={classes.drawerItemsWrapper}
        >
          {navKeys.map((item, i) => {
            return (
              <Box key={`nav-item-${i}`}>
                <Group justify="space-between" mt={{ base: "xl", xl: "50" }}>
                  <Text
                    fz={{ base: "xl", xl: "title1" }}
                    className={
                      selectedItem === navItems[item].name.toLowerCase()
                        ? classes.navItemTextSelected
                        : classes.navItemTextDefault
                    }
                    onClick={() =>
                      handleSetSelectedItem(navItems[item].name.toLowerCase())
                    }
                  >
                    {navItems[item].name}
                  </Text>
                  <IconChevronRight stroke={2} />
                </Group>
                <Divider mt="xs" color="dimmed" />
              </Box>
            );
          })}
        </ScrollArea>
        <Divider orientation="vertical" color="dimmed" />
        <ScrollArea
          h="100%"
          scrollbarSize={10}
          scrollHideDelay={500}
          className={classes.drawerItemsWrapper}
        >
          {selectedItem !== "" ? (
            <NavChildItems
              selectedItem={selectedItem}
              selectedChildItem={selectedChildItem}
              onSelect={setSelectedChildItem}
              redirect={redirect}
            />
          ) : null}
        </ScrollArea>
        <Divider orientation="vertical" color="dimmed" />
        <ScrollArea
          h="100%"
          scrollbarSize={10}
          scrollHideDelay={500}
          className={classes.drawerItemsWrapper}
        >
          {selectedChildItem !== "" ? (
            <NavChildSubItems
              selectedItem={selectedItem}
              selectedChildItem={selectedChildItem}
              redirect={redirect}
            />
          ) : null}
        </ScrollArea>
      </Box>
    </Box>
  );
}

function NavChildItems({
  selectedItem,
  selectedChildItem,
  onSelect,
  redirect,
}) {
  const handleOnSelect = (item) => {
    if (item.path) {
      return redirect(item.path);
    }
    onSelect(item.name.toLowerCase());
  };

  return (
    <AnimatePresence>
      <motion.div
        key={selectedItem}
        initial={{ marginTop: "-100%", opacity: 0 }}
        animate={{ marginTop: 0, opacity: 1 }}
      >
        {navItems[selectedItem].children.map((item, i) => {
          return (
            <Box key={`child-item-${i}`}>
              <Group justify="space-between" mt={{ base: "xl", xl: "50" }}>
                <Text
                  fz={{ base: "md", xl: "xl" }}
                  className={
                    selectedChildItem.toLowerCase() === item.name.toLowerCase()
                      ? classes.navItemTextSelected
                      : classes.navItemTextDefault
                  }
                  onClick={() => handleOnSelect(item)}
                >
                  {item.name}
                </Text>
                <IconChevronRight stroke={2} />
              </Group>
              <Divider mt="xs" color="dimmed" />
            </Box>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
}

function NavChildSubItems({ selectedItem, selectedChildItem, redirect }) {
  if (selectedChildItem === "") return;
  let childItem = navItems[selectedItem].children.find((child) => {
    return child.name.toLowerCase() === selectedChildItem.toLowerCase();
  });

  if (!childItem) return;

  return (
    <AnimatePresence>
      <motion.div
        key={selectedChildItem}
        initial={{ marginTop: "-100%", opacity: 0 }}
        animate={{ marginTop: 0, opacity: 1 }}
      >
        {childItem.children?.map((item, i) => (
          <Box key={`child-sub-item-${i}`}>
            <Group
              justify="space-between"
              mt={{ base: "xl", xl: "50" }}
              wrap="nowrap"
            >
              <Text
                fz={{ base: "md", xl: "xl" }}
                className={classes.navItemTextDefault}
                onClick={() => redirect(item.path)}
              >
                {item.name}
              </Text>
              <IconChevronRight stroke={2} />
            </Group>
            <Divider mt="xs" color="dimmed" />
          </Box>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
