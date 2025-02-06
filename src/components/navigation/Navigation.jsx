import classes from "./Navigation.module.css"
import { Text, Burger, Flex, Image, Stack } from "@mantine/core"
import spcfLogo from "../../assets/logo/spcf.png"

export default function Navigation({ opened, toggle }) {
    return <nav className={classes.navigation}>
        <Flex gap="sm">
            <Image src={spcfLogo} h={40} w={40} />
            <Stack gap={0} justify="center">
                <Text
                    fz={{ base: "md" }}
                    classNames={{ root: classes.logoText }}
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

        {/* <Burger
            opened={opened}
            onClick={toggle}
            color="white"
        /> */}
    </nav>
}