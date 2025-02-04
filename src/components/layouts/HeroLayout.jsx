import { Container } from "@mantine/core";
import { clsx } from "clsx";
import classes from "./Layout.module.css";

import defaultBg from "../../assets/backgrounds/spcf-bg.jpg";

export default function HeroLayout({
  bgImage = defaultBg,
  children,
  containerProps = {}, 
}) {
  return (
    <section
      className={classes.heroSection}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={classes.overlay}>
        <Container
          size="responsive"
          classNames={{ root: classes.heroContainer }}
          {...containerProps}
        >
          {children}
        </Container>
      </div>
    </section>
  );
}
