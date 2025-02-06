import { Loader, Image, Box } from "@mantine/core";
import logo from "../../assets/logo/spcf.png";
import classes from "./Loading.module.css";

export default function Loading({}) {
  return (
    <Box component="div" className={classes.loadingContainer}>
      <Image src={logo} className={classes.loadingImage} />
      <Loader size={50} type="dots" />
    </Box>
  );
}
