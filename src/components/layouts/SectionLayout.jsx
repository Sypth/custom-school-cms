import { Container, Flex } from "@mantine/core";
import { clsx } from "clsx";
import classes from "./Layout.module.css";

export default function SectionLayout({
  children,
  sectionClasses = "",
  containerProps = {},
  flexProps = {},
  withFlex = false,
  // theme = "light",
}) {
  // const setTheme = () => {
  //   const selectedTheme =
  //     theme === "light"
  //       ? classes.defaultSectionLight
  //       : classes.defaultSectionDark;
  // };

  return (
    <section className={clsx(sectionClasses)}>
      <Container {...containerProps}>
        {withFlex ? <Flex {...flexProps}>{children}</Flex> : children}
      </Container>
    </section>
  );
}
