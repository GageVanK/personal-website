import {
  createStyles,
  Header,
  Group,
  ActionIcon,
  Container,
  Text
} from "@mantine/core";

import {
  BrandUpwork,
  BrandLinkedin,
  BrandGithub,
  HexagonLetterG,
  HexagonLetterV,
  HexagonLetterK
} from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 56,

    [theme.fn.smallerThan("sm")]: {
      justifyContent: "flex-start"
    }
  },

  links: {
    width: 260,

    [theme.fn.smallerThan("sm")]: {
      display: "none"
    }
  },

  social: {
    width: 260,

    [theme.fn.smallerThan("sm")]: {
      width: "auto",
      marginLeft: "auto",
      display: "none"
    }
  }
}));

export default function NavBar() {
  const { classes } = useStyles();

  return (
    <>
      <Header height={56} mb={22}>
        <Container className={classes.inner}>
          <Group position="center">
            <HexagonLetterG color={"#4DABF7"} size={44} stroke-width={1.5} />
            <HexagonLetterV color={"#4DABF7"} size={44} stroke-width={1.5} />
            <HexagonLetterK color={"#4DABF7"} size={44} stroke-width={1.5} />
          </Group>
          <Group spacing={5} className={classes.social} position="right" noWrap>
            <ActionIcon
              color="blue"
              variant="light"
              component="a"
              href="https://www.upwork.com/freelancers/~012c5697e7fc2669c1?viewMode=1"
              size="lg"
            >
              <BrandUpwork size={22} stroke-width={1.5} />
            </ActionIcon>
            <ActionIcon
              color="blue"
              variant="light"
              component="a"
              href="http://www.linkedin.com/in/gage-van-kuilenburg-b5a04319a/"
              size="lg"
            >
              <BrandLinkedin size={22} stroke-width={1.5} />
            </ActionIcon>
            <ActionIcon
              color="blue"
              variant="light"
              component="a"
              href="http://github.com/GageVanK"
              size="lg"
            >
              <BrandGithub size={22} stroke-width={1.5} />
            </ActionIcon>
          </Group>
        </Container>
      </Header>
    </>
  );
}
