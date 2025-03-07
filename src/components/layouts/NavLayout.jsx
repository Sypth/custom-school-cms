import { AppShell } from "@mantine/core";
import { Outlet, useLocation, matchPath } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Layout.module.css";

import Navigation from "../navigation/Navigation";
import NavigationPanel from "../navigation/NavigationPanel";

export default function NavLayout({}) {
  const [opened, { toggle }] = useDisclosure();
  const location = useLocation();

  // paths where navigation should be hidden. found in routes folder
  const hiddenFrom = [
    // "/academics",
    // "/departments/:category"
  ];

  const isHidden = () => {
    return hiddenFrom.some((route) => matchPath(route, location.pathname));
  };

  return (
    <AppShell
      // header={!isHidden() ? { height: 60 } : null}
      navbar={{
        width: "190px",
        breakpoint: "sm",
        collapsed: { mobile: !opened, desktop: opened },
      }}
      withBorder={false}
      classNames={{ root: classes.navigation }}
    >
      {/* {!isHidden() ? (
        <AppShell.Header>
          <Navigation opened={opened} toggle={toggle} />
        </AppShell.Header>
      ) : null} */}

      <AppShell.Navbar className={classes.navbar}>
        <Navigation opened={opened} toggle={toggle} />
        <NavigationPanel toggle={toggle} />
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
