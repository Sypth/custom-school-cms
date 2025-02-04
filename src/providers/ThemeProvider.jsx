import cx from "clsx";
import { MantineProvider, createTheme, rem, Container } from "@mantine/core";
import classes from "./ThemeProvider.module.css"

const theme = createTheme({
  fontSizes: {
    xs: rem(10),
    sm: rem(11),
    md: rem(14),
    lg: rem(16),
    xl: rem(20),
    title1: rem(30),
    title2: rem(40),
    title3: rem(60),
    title4: rem(75),
  },
  components: {
    Container: Container.extend({
      classNames: (_, { size }) => ({
        root: cx({ [classes.responsiveContainer]: size === "responsive" }),
      }),
    }),
  },
});

export default ({ children }) => {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
};
