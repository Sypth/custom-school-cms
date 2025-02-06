import classes from "./Navigation.module.css";
import {
  Box,
  Text,
  Divider,
  ScrollArea,
  Group,
  BackgroundImage,
  NavLink,
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import { useState } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import bg from "../../assets/backgrounds/spcf-bg-2.png";
import { navItems } from "../../contents/navigation/navigationItems";

export default function NavigationPanel({ toggle }) {
  const [selectedMain, setSelectedMain] = useState(0);
  const [selectedChild, setSelectedChild] = useState(null);
  const navigate = useNavigate();

  const resetChildSelection = () => setSelectedChild(null);

  // const redirect = (path) => {
  //   resetChildSelection();
  //   navigate(path);
  //   toggle();
  // };

  return (
    <>
      {navItems.map((item, index) => (
        <NavLink
          key={index}
          href={item.children.path}
          label={item.name}
          leftSection={<IconChevronRight size={16} stroke={1.5} />}
        />
      ))}
    </>
  );
}
